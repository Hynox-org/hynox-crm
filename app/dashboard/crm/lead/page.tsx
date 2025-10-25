"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";
import LeadList from "./LeadList";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LeadPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_BASE = "/crm/api/lead/";

  //  Fetch leads from backend
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("session expired. Please log in again.");
        setLeads([]);
        return router.push("/auth/login");
      }

      const data = await apiRequest<any[]>(API_BASE, "GET", null, token);
      console.log(" Leads fetched:", data);
      setLeads(data || []);
    } catch (err) {
      console.error("Failed to fetch leads:", err);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  //  Run once on mount
  useEffect(() => {
    fetchLeads();
  }, []);

  // 🔹 Handle Create/Close Form
  const handleToggleForm = () => {
    // When closing the form, re-fetch data
    if (showForm) {
      fetchLeads();
    }
    setShowForm(!showForm);
  };
const handleLeadCreated = async () => {
    await fetchLeads();
    setShowForm(false);
  };

  return (
    <div className="flex flex-col h-full p-4">
      <Toaster richColors position="top-right" />

      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Leads</h1>
        <button
          onClick={handleToggleForm}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {showForm ? "Close Form" : "Create Lead"}
        </button>
      </div>

      {/* 🔹 Main Content */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-4 overflow-y-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading leads...</p>
        ) : showForm ? (
          <LeadForm onLeadCreated={handleLeadCreated} />
        ) : leads.length > 0 ? (
          <LeadList leads={leads} refreshLeads={fetchLeads} />
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
            <p>Welcome to CRM Leads</p>
            <p className="mt-2">No leads found. Create your first lead!</p>
            <button
              onClick={handleToggleForm}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-3"
            >
              Create Lead
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
