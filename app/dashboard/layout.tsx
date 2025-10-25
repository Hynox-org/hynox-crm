"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import { useResponsiveSidebar } from "@/hooks/useResponsiveSidebar";
import { toast } from "sonner";
import { Router } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [subLayerOpen, setSubLayerOpen] = useState(true);

  // Handle responsive behavior
  useResponsiveSidebar(setSidebarOpen, setSubLayerOpen);
  const token = localStorage.getItem("token");
      if (!token) {
        toast.error("session expired. Please log in again.");
        return router.push("/auth/login");
      }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} subLayerOpen={subLayerOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
