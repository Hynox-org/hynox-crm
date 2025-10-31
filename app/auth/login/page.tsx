"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { apiRequest, oauthLogin } from "@/lib/api";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";

interface LoginFormValues {
  email?: string;
  password?: string;
  [key: string]: unknown; // Add index signature
}

interface LoginApiResponse {
  accessToken?: string;
  action?: "CREATE_ORG" | "UNAUTHORIZED_USER" | "DASHBOARD";
  message?: string;
  orgId?: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (form: LoginFormValues) => {
  console.log("Login triggered with:", form); // ✅
  try {
    const data = await apiRequest<LoginApiResponse>(
      "/identity/api/auth/login",
      "POST",
      form
    );
    console.log("API response:", data); // ✅ Check full response

    
    if (data.accessToken) {
      await login(data.accessToken);
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
          console.log("Org ID:", data.orgId);
          if (data.orgId) {
          localStorage.setItem("orgId", data.orgId);
        }

          toast.success("Login successful!");
          router.push("/dashboard");
          break;
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      toast.error((err as Error).message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const data = await oauthLogin("google");
      router.push(data.url);
    } catch (err: unknown) {
      console.error("Google login error:", err);
      toast.error((err as Error).message || "Google login failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <AuthForm
        type="login"
        onSubmit={handleLogin}
        renderOAuthButton={() => (
          <Button onClick={handleGoogleLogin} className="w-full max-w-sm">
            Sign in with Google
          </Button>
        )}
      />
    </>
  );
}
