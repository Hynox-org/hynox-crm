"use client";
import { useEffect } from "react";
import React, { ReactNode } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { validateToken } from "@/lib/api";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const handleUser = async () =>  {
    const accessToken = localStorage.getItem("token");
    const res = await validateToken(accessToken);
        if (res.action === "CREATE_ORG") {
            router.push("/org/create");
            return;
        }
      };
      handleUser();
    });
  if (loading) {
    return <div>Loading...</div>; // Or a more sophisticated loading spinner
  }

  if (!isAuthenticated) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
