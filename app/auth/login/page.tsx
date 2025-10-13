"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (form: any) => {
    try {
      const data = await apiRequest("/identity/api/auth/login", "POST", form);

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
    } catch (err: any) {
      console.error("Login error:", err);
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm type="login" onSubmit={handleLogin} />
    </>
  );
}
