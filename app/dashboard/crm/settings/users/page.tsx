"use client";
import { useState, useEffect } from "react";
import NewUserForm from "./newUserForm";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from "sonner";

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);

  // Fetch all users when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session expired. Please log in again.");
      return;
    }

    const response = await apiRequest("/crm/api/user", "GET", null, token);
    console.log("Users fetched:", response);

    //  FIX: Handle direct array or object with data property
    const usersData = Array.isArray(response)
      ? response
      : (response as { data?: any[] })?.data ?? [];

    setUsers(usersData);
  } catch (error) {
    console.error("Error fetching users:", error);
    toast.error("Failed to load users.");
    setUsers([]); // ensure array
  } finally {
    setLoading(false);
  }
};

  const handleUserCreated = () => {
    toast.success("User added successfully!");
    setShowForm(false);
    fetchUsers(); // refresh list
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      {/* Add User Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>

      {/* Popup Modal */}
{showForm && (
  <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center z-50">
    <div className="absolute top-10 bg-white rounded-lg shadow-lg p-6 w-96 max-h-[45vh] overflow-y-auto">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
      >
        ×
      </button>
      {/* ✅ Pass the callback prop */}
      <NewUserForm onUserCreated={handleUserCreated} />
    </div>
  </div>
)}


      {/* User List */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-medium mb-3">Created Users</h3>

        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : users?.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border">Full Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Profile</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border">{user.fullName}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.role}</td>
                  <td className="p-2 border">{user.profile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
