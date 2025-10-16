"use client";

import { useEffect, useState } from "react";
// import { FilterSidebar } from "../../dashboard/components/FilterSidebar";
import LeadForm from "./LeadForm";

export default function LeadPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchLeads() {
      const res = await fetch("/crm/lead");
      const data = await res.json();
      setLeads(data);
    }
    fetchLeads();
  }, []);

  return (
    <div className="flex h-full">
      {/* Left Filter Sidebar */}
      <div className="w-1/4 border-r bg-white p-3">
        {/* <FilterSidebar /> */}
      </div>

      {/* Main region */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Leads</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {showForm ? "Close Form" : "Create Lead"}
          </button>
        </div>

        {showForm ? (
          <LeadForm />
        ) : leads.length > 0 ? (
          <p>show leads</p>
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
            <p>👋 Welcome to CRM Leads</p>
            <p className="mt-2">No leads found. Create your first lead!</p>
          </div>
        )}
      </div>
    </div>
  );
}
