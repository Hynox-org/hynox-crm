"use client";

import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { apiRequest } from "@/lib/api";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { validateToken } from "@/lib/api";

export default function LeadForm({ onLeadCreated }: { onLeadCreated?: () => void }) {
  const router = useRouter();

  const [form, setForm] = useState({
    leadOwner: "",
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    leadSource: "",
    leadStatus: "",
    Industry: "",
    noOfEmployees: "",
    annualRevenue: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const [companyOptions, setCompanyOptions] = useState<string[]>([]);
  const [leadOwnerOptions, setLeadOwnerOptions] = useState<{ label: string; id: string }[]>([]);

 // ✅ Combined useEffect for fetching both company and lead owner data
useEffect(() => {
  const fetchInitialData = async () => {
    try {
      setLoadingData(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Session expired. Please log in again.");
        return router.push("/auth/login");
      }
        const data = await validateToken(token);
      // Fetch company & user data in parallel
      const [companyData, userData, currentUser] = await Promise.all([
        apiRequest("/crm/api/lead/filter", "GET", null, token),
        apiRequest("/identity/api/auth/users", "GET", null, token),
        data.user.orgId]);
        console.log("Combined Data Fetched:", currentUser);

      // --- Company Data ---
      if (Array.isArray(companyData)) {
        const names = companyData
          .map((lead: any) => lead.company?.trim())
          .filter((name: any): name is string => !!name && typeof name === "string");

        const uniqueNames = Array.from(new Set(names));
        setCompanyOptions(uniqueNames);
      } else {
        toast.error("Invalid company data format");
      }

      // --- Lead Owner Data ---
      if (Array.isArray(userData) && currentUser) {
        // ✅ Filter users with same orgId as current user
        const filteredUsers = userData.filter(
          (user: any) => user.orgId === currentUser
        );

        // ✅ Deduplicate by userId
        const uniqueOwnersMap = new Map<string, { label: string; id: string }>();

        filteredUsers.forEach((user: any) => {
          const label = user.fullName || user.email;
          const id = user.userId;
          if (label && id && !uniqueOwnersMap.has(id)) {
            uniqueOwnersMap.set(id, { label, id });
          }
        });

        setLeadOwnerOptions(Array.from(uniqueOwnersMap.values()));
      } else {
        toast.error("Invalid user data format or current user orgId missing");
      }
    } catch (error: any) {
      console.error("Error fetching initial data:", error);
      toast.error("Failed to load dropdown data");
    } finally {
      setLoadingData(false);
    }
  };

  fetchInitialData();
}, [router]);

  const leadSourceOptions = [
    "None",
    "Advertisement",
    "Cold Call",
    "Employee Referral",
    "External Referral",
    "Online Store",
    "Partner",
    "Public Relations",
    "Sales Email Alias",
    "Seminar Partner",
    "Internal Seminar",
    "Trade Show",
    "Web Download",
    "Web Research",
    "Chat",
    "X (Twitter)",
    "Facebook",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //  Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Session expired. Please log in again.");
        return router.push("/auth/login");
      }

      const data = await apiRequest("/crm/api/lead/create", "POST", form, token);

      toast.success("Lead created successfully!");
      console.log("Response:", data);

      if (onLeadCreated) onLeadCreated();

      // Reset form
      setForm({
        leadOwner: "",
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        leadSource: "",
        leadStatus: "",
        Industry: "",
        noOfEmployees: "",
        annualRevenue: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        description: "",
      });
    } catch (err: any) {
      toast.error(`Failed to create lead: ${err.message}`);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 w-full max-w-3xl overflow-y-auto max-h-[75vh]"
      >
        <h2 className="text-xl font-semibold mb-6">Create Lead</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Lead Owner Autocomplete */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Lead Owner *</label>
            <Autocomplete
              options={leadOwnerOptions}
              loading={loadingData}
              getOptionLabel={(option) => option.label}
              value={leadOwnerOptions.find((opt) => opt.id === form.leadOwner) || null} // ✅ Match by ID now
              onChange={(_, newValue) =>
                setForm((prev) => ({
                  ...prev,
                  leadOwner: newValue ? newValue.id : "", // ✅ Store ID instead of label
                }))   
              }
              renderOption={(props, option, index) => (
                <li {...props} key={`${option.id}-${index}`}>
                  {option.label}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Lead Owner"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingData ? (
                          <span className="text-gray-400 text-xs mr-2">Loading...</span>
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>

          {/* Company Autocomplete */}
          <div>
            <label className="block text-sm font-medium mb-1">Company *</label>
            <Autocomplete
              freeSolo
              loading={loadingData}
              options={companyOptions}
              value={form.company}
              onChange={(_, newValue) =>
                setForm((prev) => ({ ...prev, company: newValue || "" }))
              }
              onInputChange={(_, newInputValue) =>
                setForm((prev) => ({ ...prev, company: newInputValue || "" }))
              }
              renderOption={(props, option) => (
                <li {...props} key={option}>
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  placeholder="Search or enter company name"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingData ? (
                          <span className="text-gray-400 text-xs mr-2">Loading...</span>
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Lead Source */}
          <div>
            <label className="block text-sm font-medium mb-1">Lead Source</label>
            <select
              name="leadSource"
              value={form.leadSource}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Source</option>
              {leadSourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Lead Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Lead Status</label>
            <select
              name="leadStatus"
              value={form.leadStatus}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium mb-1">Industry</label>
            <input
              type="text"
              name="Industry"
              value={form.Industry}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* No. of Employees */}
          <div>
            <label className="block text-sm font-medium mb-1">No. of Employees</label>
            <input
              type="number"
              name="noOfEmployees"
              value={form.noOfEmployees}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Annual Revenue */}
          <div>
            <label className="block text-sm font-medium mb-1">Annual Revenue</label>
            <input
              type="number"
              name="annualRevenue"
              value={form.annualRevenue}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Street */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Street</label>
            <input
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Zipcode */}
          <div>
            <label className="block text-sm font-medium mb-1">Zipcode</label>
            <input
              type="text"
              name="zipcode"
              value={form.zipcode}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded p-2 h-24"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`mt-6 px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
          }`}
        >
          {loading ? "Submitting..." : "Submit Lead"}
        </button>
      </form>
    </>
  );
}
