import type { Metadata } from "next";
import { DashboardMock } from "./components/dashboard-mock";
import { FeaturesGrid } from "./components/features-grid";
import { Hero } from "./components/hero";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TechStack } from "./components/tech-stack";

export const metadata: Metadata = {
  title: "Hynox CRM - Simple. Smart. Global.",
  description:
    "The only CRM that helps you close deals, send invoices, and get paid worldwide — all in one place.",
};

export default function Home() {
  return (
    <main id="content" className="min-h-dvh bg-background text-foreground">
      <Hero />
      <FeaturesGrid />
      <DashboardMock />
      <TechStack />
    </main>
  );
}
