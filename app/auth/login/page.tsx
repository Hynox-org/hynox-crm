"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest } from "@/lib/api";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (form: any) => {
    try {
      const data = await apiRequest("/identity/api/auth/login", "POST", form);

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }

      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AuthForm type="login" onSubmit={handleLogin} />
    </>
  );
}
