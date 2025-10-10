"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest } from "@/lib/api";
import { Toaster, toast } from 'sonner';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async (form: any) => {
    try {
      const payload = {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        countryCode: form.countryCode || "+91",
        phoneNumber: form.phoneNumber,
        role: "super_admin",
        agree: form.agree,
      };

      const data = await apiRequest("/identity/api/auth/signup", "POST", payload);

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }

      toast.success("Signup successful!");
      router.push("/org/create");
    } catch (err: any) {
      console.error("Signup error:", err);
      toast.error(err.message || "Signup failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm type="signup" onSubmit={handleSignup} />
    </>
  );
}
