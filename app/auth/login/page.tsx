"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from "sonner";

interface LoginFormValues {
  email?: string;
  password?: string;
  [key: string]: unknown; // Add index signature
}

interface LoginApiResponse {
  accessToken?: string;
  action?: "CREATE_ORG" | "UNAUTHORIZED_USER" | "DASHBOARD";
  message?: string;
}

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (form: LoginFormValues) => {
    try {
      const data = await apiRequest<LoginApiResponse>("/identity/api/auth/login", "POST", form);

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }

      // 🧭 Handle action from backend
      switch (data.action) {
        case "CREATE_ORG":
          toast.info("Please create your organization first!");
          router.push("/org/create");
          break;

        case "UNAUTHORIZED_USER":
          toast.error("Unauthorized user. Contact your admin.");
          router.push("/unauthorized");
          break;

        case "DASHBOARD":
        default:
          toast.success("Login successful!");
          router.push("/dashboard");
          break;
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      toast.error((err as Error).message || "Login failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm type="login" onSubmit={handleLogin} />
    </>
  );
}
