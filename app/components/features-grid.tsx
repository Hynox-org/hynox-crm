"use client"

import { Activity, LineChart, Workflow, Mic2, LayoutDashboard, Shield } from "lucide-react"

const FEATURES = [
  {
    icon: Activity,
    title: "Real-Time Insights",
    desc: "Stream customer signals and act on live intelligence.",
  },
  {
    icon: Workflow,
    title: "Smart Pipelines",
    desc: "Adaptive stages that evolve with your process.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Forecast outcomes with confidence and context.",
  },
  {
    icon: Mic2,
    title: "Voice Recognition",
    desc: "Hands-free notes and conversational logging.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    desc: "One clean view across teams, deals, and tasks.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade",
    desc: "Privacy-first, audited, and reliable by design.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="container mx-auto px-6 md:px-8 py-12 md:py-16">
      <h2 className="sr-only">Key capabilities</h2>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <li
            key={title}
            className="group rounded-xl border border-border/60 bg-card p-6 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-medium">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
