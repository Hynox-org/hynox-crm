"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import { DashboardMock } from "./components/dashboard-mock";
import { FeaturesGrid } from "./components/features-grid";
import { Hero } from "./components/hero";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TechStack } from "./components/tech-stack";
import { validateToken } from "@/lib/api";

export default function Home() {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      const hash = window.location.hash;
      if (hash) {
        const params = new URLSearchParams(hash.substring(1)); // Remove '#'
        const accessToken = params.get("access_token");

        if (accessToken) {
          await login(accessToken);
          // Clean up the URL hash
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
          router.push("/dashboard");
        }
      }
    };

    handleOAuthRedirect();
  }, [router, login]);

  return (
    <main id="content" className="min-h-dvh bg-background text-foreground">
      <Hero />
      <FeaturesGrid />
      <DashboardMock />
      <TechStack />
    </main>
  );
}
