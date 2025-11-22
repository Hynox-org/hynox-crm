"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Avatar, IconButton, Button, Dialog, DialogTitle, DialogContent,
  TextField, Backdrop, CircularProgress, MenuItem, Tooltip
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { apiRequest } from "@/lib/api";
import { toast } from "sonner";
import Autocomplete from "@mui/material/Autocomplete";

interface Lead {
  _id: string;
  profilePic?: string;
  firstName: string;
  lastName: string;
  company: string;
  leadStatus: string;
  email: string;
  phone: string;
  leadOwner: string;
}

interface LeadListProps {
  leads: Lead[];
  refreshLeads: () => Promise<void>;
}

const LeadList: React.FC<LeadListProps> = ({ leads, refreshLeads }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>(leads);
  const [filters, setFilters] = useState({
    status: "",
    company: "",
    name: "",
  });

  // ✅ Company dropdown state
  const [companyOptions, setCompanyOptions] = useState<string[]>([]);
  const [loadingCompanies, setLoadingCompanies] = useState(false);

  const API_BASE = "/crm/api/lead";

  useEffect(() => {
    setFilteredLeads(leads); // ✅ Sync table when parent updates
  }, [leads]);

  // ✅ Delete Lead
  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) { 
        toast.error("session expired. Please log in again.");
         throw new Error("Token missing");
          return router.push("/auth/login");}
      await apiRequest(`${API_BASE}/${id}`, "DELETE", null, token);
      toast.success("Lead deleted successfully!");
      refreshLeads();
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Controlled Input Filter Change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // ✅ Apply filters WITHOUT modifying props
  const applyFilters = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const queryParams = new URLSearchParams();

      if (filters.status) queryParams.append("status", filters.status);
      if (filters.company) queryParams.append("company", filters.company);
      if (filters.name) queryParams.append("name", filters.name);

      // ✅ Explicitly type the response as Lead[]
      const data = await apiRequest<Lead[]>(
        `${API_BASE}/filter?${queryParams.toString()}`,
        "GET",
        null,
        token
      );
      setFilteredLeads(data || []);
      setOpenFilter(false);
    } catch (error) {
      console.error("Filter failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch unique company names safely
  useEffect(() => {
    const fetchCompanyNames = async () => {
      try {
        setLoadingCompanies(true);
        const token = localStorage.getItem("token");

        // ✅ Explicitly type the response as Lead[]
        const data = await apiRequest<Lead[]>(`${API_BASE}`, "GET", null, token);

        const uniqueNames = [
          ...new Set(data.map((lead) => lead.company).filter(Boolean)),
        ];

        setCompanyOptions(uniqueNames);
      } catch (error) {
        console.error("Company fetch failed:", error);
      } finally {
        setLoadingCompanies(false);
      }
    };

    fetchCompanyNames();
  }, []);

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* ✅ Loading Overlay */}
      {loading && (
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="contained" onClick={() => setOpenFilter(true)}>
          Filter
        </Button>
        <Button variant="outlined" onClick={refreshLeads}>
          Refresh
        </Button>
      </div>

      {/* ✅ Table now uses filteredLeads */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lead Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow key={lead._id}>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar src={lead.profilePic || ""} />
                    <span className="ml-2 truncate max-w-[120px]">
                      {lead.firstName} {lead.lastName}
                    </span>
                  </div>
                </TableCell>

                <TableCell>{lead.company}</TableCell>
                <TableCell>{lead.leadStatus}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.leadOwner}</TableCell>

                <TableCell>
                  <IconButton onClick={() => handleDelete(lead._id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton onClick={() => setShowTaskForm(true)}>
                    <AssignmentIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ✅ Filter Dialog */}
      <Dialog open={openFilter} onClose={() => setOpenFilter(false)}>
        <DialogTitle>Filter Leads</DialogTitle>
        <DialogContent className="flex flex-col gap-3 mt-2 w-[300px]">

          {/* Status Filter */}
          <TextField
            select
            label="Lead Status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Contacted">Contacted</MenuItem>
            <MenuItem value="Qualified">Qualified</MenuItem>
            <MenuItem value="Lost">Lost</MenuItem>
          </TextField>

          {/* Company Autocomplete */}
          <Autocomplete
            freeSolo
            loading={loadingCompanies}
            options={companyOptions}
            onChange={(_, value) =>
              setFilters({ ...filters, company: value || "" })
            }
            renderInput={(params) => (
              <TextField {...params} label="Company" fullWidth />
            )}
          />

          {/* Name Search */}
          <TextField
            label="Lead Name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            fullWidth
          />

          <Button variant="contained" onClick={applyFilters}>
            Apply Filters
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadList;
