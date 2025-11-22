"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from 'sonner';

interface OrgFormValues {
  orgName: string;
  employeeCount: number;
  [key: string]: unknown; // Add index signature
}

interface OrgApiResponse {
  message?: string;
  orgId?: string;
}

export default function OrgPage() {
  const router = useRouter();

  const handleOrg = async (form: OrgFormValues) => {
    try {
      const token = localStorage.getItem("token");
      await apiRequest<OrgApiResponse>("/identity/api/org/setup", "POST", form, token);

      toast.success("Organization created successfully!");
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Org creation error:", err);
      // ✅ Show only the clean backend message
      toast.error((err as Error).message || "Organization setup failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm type="org" onSubmit={handleOrg} />
    </>
  );
}
