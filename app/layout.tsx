"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/app/context/AuthContext";
import { PublicLayout } from "@/app/components/PublicLayout";
import { ProtectedLayout } from "@/app/components/ProtectedLayout";

const primaryFont = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isPublicRoute = pathname.startsWith("/auth") || pathname === "/";

  return (
    <html lang="en" className={primaryFont.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <AuthProvider>
          {isPublicRoute ? (
            <PublicLayout>{children}</PublicLayout>
          ) : (
            <ProtectedLayout>{children}</ProtectedLayout>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
