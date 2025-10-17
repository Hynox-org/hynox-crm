"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Backdrop,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { apiRequest } from "@/lib/api"; // ✅ make sure this import path is correct

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
  const [loading, setLoading] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    company: "",
    name: "",
  });
  const [showTaskForm, setShowTaskForm] = useState(false);

  const API_BASE = "/crm/api/lead";

  // ✅ Fixed delete with token
  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      await apiRequest(`${API_BASE}/${id}`, "DELETE", null, token);
      await refreshLeads();
    } catch (error) {
      console.error("❌ Error deleting lead:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle input change for filters
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // 🔹 Apply Filters
  const applyFilters = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();

      if (filters.status) queryParams.append("leadStatus", filters.status);
      if (filters.company) queryParams.append("company", filters.company);
      if (filters.name) queryParams.append("name", filters.name);

      const token = localStorage.getItem("token");
      const data = await apiRequest(
        `${API_BASE}/filter?${queryParams.toString()}`,
        "GET",
        null,
        token
      );

      console.log("Filtered leads:", data);
      setOpenFilter(false);

      // directly replace leads shown
      if (data && Array.isArray(data)) {
        (leads as any).splice(0, leads.length, ...data);
      }
    } catch (error) {
      console.error("❌ Error applying filters:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* 🔹 Header Buttons */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="contained" onClick={() => setOpenFilter(true)}>
          Filter
        </Button>
        <Button variant="outlined" color="primary" onClick={refreshLeads}>
          Refresh
        </Button>
      </div>

      {/* 🔹 Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lead Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Lead Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Lead Owner</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead._id}>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={lead.profilePic || ""}
                      alt={lead.firstName}
                      style={{ marginRight: 10 }}
                    />
                    {lead.firstName} {lead.lastName}
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

      {/* 🔹 Filter Popup */}
      <Dialog open={openFilter} onClose={() => setOpenFilter(false)}>
        <DialogTitle>Filter Leads</DialogTitle>
        <DialogContent className="flex flex-col gap-3 mt-2 w-[300px]">
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

          <TextField
            label="Company"
            name="company"
            value={filters.company}
            onChange={handleFilterChange}
            fullWidth
          />

          <TextField
            label="Lead Name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            onClick={applyFilters}
            className="mt-3"
          >
            Apply Filters
          </Button>
        </DialogContent>
      </Dialog>

      {/* 🔹 Task Form Popup */}
      <Dialog open={showTaskForm} onClose={() => setShowTaskForm(false)}>
        <DialogTitle>Assign Task</DialogTitle>
        <DialogContent>
          <p>Task form content here...</p>
          <Button onClick={() => setShowTaskForm(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadList;
