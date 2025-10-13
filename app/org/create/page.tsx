"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from 'sonner';

export default function OrgPage() {
  const router = useRouter();

  const handleOrg = async (form: any) => {
    try {
      const token = localStorage.getItem("token");
      await apiRequest("/identity/api/org/setup", "POST", form, token);

      toast.success("Organization created successfully!");
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Org creation error:", err);
      // ✅ Show only the clean backend message
      toast.error(err.message || "Organization setup failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm type="org" onSubmit={handleOrg} />
    </>
  );
}
