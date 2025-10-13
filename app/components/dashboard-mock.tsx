"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export function DashboardMock() {
  return (
    <section className="container mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">An interface that stays out of your way</h2>
          <p className="mt-3 text-muted-foreground">
            Clean structure, deliberate spacing, and meaningful contrast. Orion CRM is crafted to keep attention on what
            matters—relationships and momentum.
          </p>
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)]" />
        </div>
        <Card className="overflow-hidden border-border/60">
          <div className="relative aspect-[16/10] w-full">
            {/* Static, stylized placeholder to suggest a crisp dashboard */}
            <Image
              src="/crm-dashboard-sample.jpg"
              alt="Stylized Orion CRM dashboard mockup"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Card>
      </div>
    </section>
  )
}
