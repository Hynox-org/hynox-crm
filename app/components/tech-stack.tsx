"use client"

const STACK = ["React", "Next.js", "Node.js", "MongoDB", "Flask", "TypeScript"]

export function TechStack() {
  return (
    <section className="container mx-auto px-6 md:px-8 py-8 md:py-12">
      <h2 className="sr-only">Technology stack</h2>
      <div className="flex flex-wrap items-center gap-2">
        {STACK.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
