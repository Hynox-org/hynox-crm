"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

// Example Illustration, replace with your own SVG or component
function CRMIllustration() {
  return (
    <div className="flex justify-center items-center h-full">
      {/* Placeholder graphic */}
      <svg
        width="180"
        height="140"
        viewBox="0 0 180 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <rect x="20" y="40" width="140" height="60" rx="12" fill="url(#panel)" />
        <circle cx="54" cy="70" r="16" fill="#52b3d9" opacity="0.21"/>
        <rect x="90" y="62" width="36" height="18" rx="6" fill="#8f9cf7" opacity="0.09"/>
        <defs>
          <linearGradient id="panel" x1="20" y1="40" x2="160" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-brand)" />
            <stop offset="1" stopColor="var(--color-brand-accent)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleGetStartedClick = () => {
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      router.push("/auth/signup");
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "relative isolate overflow-hidden",
        "py-14 md:py-24"
      )}
      aria-label="Hero"
    >
      {/* Background gradients & overlays */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand) 0%, color-mix(in oklab, var(--color-brand) 50%, var(--color-brand-accent)) 45%, var(--color-brand-accent) 100%)",
          opacity: 0.10,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full blur-3xl -z-10"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse closest-side, var(--color-brand-accent), transparent 70%)",
          opacity: 0.16,
        }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left block: headline/info */}
          <div>
            <span className="inline-block rounded-full border border-border/50 bg-primary/20 px-3 py-1 text-xs text-muted-foreground tracking-wide">
              Hynox CRM
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] bg-clip-text text-transparent">
                Redefining Relationship Intelligence
              </span>
            </h1>
            <p className="mt-5 text-muted-foreground md:text-lg">
              A focused, modern CRM interface built for clarity, speed, and deep customer insight—without the noise.
            </p>
            {/* Call to action */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={handleGetStartedClick}
                className="cursor-pointer px-6 py-2 rounded-lg bg-[color:var(--color-brand)] text-white font-medium shadow hover:bg-[color:var(--color-brand-accent)] focus:outline-none transition"
                type="button"
              >
                Get Started
              </button>
              <button
                onClick={scrollToFooter}
                className="cursor-pointer px-5 py-2 rounded-lg border border-border text-[color:var(--color-brand-accent)] bg-secondary hover:bg-muted/50 transition font-medium"
                type="button"
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* Right block: visual / highlights */}
          <div className="flex items-center justify-center">
            <CRMIllustration />
          </div>
        </div>
      </div>
    </header>
  )
}
