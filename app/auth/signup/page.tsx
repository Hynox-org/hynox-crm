"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest, oauthLogin } from "@/lib/api";
import { Toaster, toast } from 'sonner';
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";

interface SignupFormValues {
  fullName?: string;
  email?: string;
  password?: string;
  countryCode?: string;
  phoneNumber?: string;
  agree?: boolean;
  [key: string]: unknown; // Add index signature
}

interface SignupApiResponse {
  accessToken?: string;
  message?: string;
}

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignup = async (form: SignupFormValues) => {
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

      const data = await apiRequest<SignupApiResponse>("/identity/api/auth/signup", "POST", payload);

      if (data.accessToken) {
        await login(data.accessToken); // Await the login function from AuthContext
      }

      toast.success("Signup successful!");
      router.push("/org/create");
    } catch (err: unknown) {
      console.error("Signup error:", err);
      toast.error((err as Error).message || "Signup failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const data = await oauthLogin("google");
      router.push(data.url);
    } catch (err: unknown) {
      console.error("Google login error:", err);
      toast.error((err as Error).message || "Google signup failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm
        type="signup"
        onSubmit={handleSignup}
        renderOAuthButton={() => (
          <Button onClick={handleGoogleLogin} className="w-full max-w-sm">
            Sign up with Google
          </Button>
        )}
      />
    </>
  );
}
