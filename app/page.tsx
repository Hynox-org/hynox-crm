'use client';

import { DashboardMock } from "./components/dashboard-mock";
import { FeaturesGrid } from "./components/features-grid";
import { Hero } from "./components/hero";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TechStack } from "./components/tech-stack";

export default function Home() {
  return (
    <main id="content" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <FeaturesGrid />
      <DashboardMock />
      <TechStack />
      <SiteFooter />
    </main>
  );
}
