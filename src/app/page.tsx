"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectShowcase = {
  id: string
  title: string
  summary: string
  stack: string[]
  signals: string[]
  links: { label: string; href: string }[]
}

type TimelineEntry = {
  period: string
  type: "Experience" | "Project"
  title: string
  summary: string
  links?: { label: string; href: string }[]
}

const projectShowcase: ProjectShowcase[] = [
  {
    id: "certifyfpga",
    title: "Ringil",
    summary:
      "Converts unstructured specification/proposal documents into structured requirements and verification traceability.",
    stack: ["Next.js", "FastAPI", "Postgres/Supabase", "LLM extraction", "CI"],
    signals: ["Traceability", "Audit-ready outputs", "Deterministic pipelines"],
    links: [
      { label: "GitHub", href: "https://github.com/ringil-technologies-inc/beta" },
      { label: "Overview", href: "/projects/certifyfpga" },
    ],
  },
  {
    id: "poolerz",
    title: "Poolerz",
    summary: "Full-stack ride coordination app with clustering-based rider grouping and practical scheduling workflows.",
    stack: ["Next.js", "TypeScript", "MongoDB", "DBSCAN"],
    signals: ["Pragmatic UX", "Geo clustering", "Production deployment"],
    links: [
      { label: "GitHub", href: "https://github.com/tylerrcady/poolerz" },
      { label: "Live", href: "https://poolerz.vercel.app" },
    ],
  },
]

const timeline: TimelineEntry[] = [
  {
    period: "2025 - Present",
    type: "Project",
    title: "Ringil",
    summary: "Building traceability-first verification automation for high-assurance engineering workflows.",
    links: [{ label: "Overview", href: "/projects/certifyfpga" }],
  },
  {
    period: "May 2025 - Aug 2025",
    type: "Experience",
    title: "L3Harris Technologies - Software Engineer Intern",
    summary: "Shipped and maintained API simulation/testing infrastructure used in hardware-facing workflows.",
    links: [{ label: "Project", href: "/projects/api-simulator" }],
  },
  {
    period: "May 2024 - Aug 2024",
    type: "Experience",
    title: "L3Harris Technologies - FPGA Electrical Engineering Intern",
    summary: "Worked on FPGA-centric hardware workflows with a focus on validation and engineering rigor.",
    links: [{ label: "Resume", href: "/resume" }],
  },
  {
    period: "May 2023 - Aug 2023",
    type: "Experience",
    title: "Vecima Networks - Software Engineer Intern",
    summary: "Built internal Linux/Python tooling for throughput simulation and diagnostics workflows.",
    links: [{ label: "Details", href: "/experience" }],
  },
]

export default function Home() {
  return (
    <div className="future-stream container max-w-6xl px-4 py-10 md:py-14 mx-auto">
      <section id="home" className="py-12 md:py-20 scroll-mt-24">
        <div className="cell-panel p-6 md:p-10">
          <h1 className="max-w-5xl text-4xl md:text-6xl font-semibold uppercase tracking-[0.04em] leading-tight">
            Matthew Dworkin
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground">Software Engineer</p>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground">
            I build high-assurance software systems for mission-critical domains: fast, verifiable, and scalable.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com/mattdworkin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matthew-dworkin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Resume (PDF)
            </a>
            <a href="mailto:mdworkin3@gatech.edu" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#projects">
              <Button size="lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#timeline">
              <Button variant="outline" size="lg">
                View Timeline
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="py-10 border-t border-white/10 scroll-mt-24">
        <div className="mb-7">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">Featured Projects</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Some projects focused on verification, testing infrastructure, and practical product
            engineering I'm proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectShowcase.map((project) => (
            <article key={project.id} className="cell-panel p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">{project.summary}</p>
                <p>
                  <span className="font-semibold text-foreground">Stack: </span>
                  <span className="text-muted-foreground">{project.stack.join(" · ")}</span>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Signals: </span>
                  <span className="text-muted-foreground">{project.signals.join(" • ")}</span>
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                {project.links.map((link) => (
                  <a
                    key={`${project.id}-${link.label}`}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="py-10 border-t border-white/10 scroll-mt-24">
        <div className="mb-7">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">Work Experience</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A clear timeline of internships and projects that shape my current engineering direction.
          </p>
        </div>

        <div className="space-y-4">
          {timeline.map((entry) => (
            <article key={`${entry.period}-${entry.title}`} className="cell-panel p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="status-line">{entry.period}</p>
                <p className="kicker">{entry.type}</p>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{entry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{entry.summary}</p>
              {entry.links && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {entry.links.map((link) => (
                    <a
                      key={`${entry.title}-${link.label}`}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="py-10 border-t border-white/10 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">About</h2>
        <p className="mt-5 max-w-4xl text-muted-foreground">
          I&apos;m a Georgia Tech engineer focused on making complex systems legible and reliable. I care about clean
          interfaces, traceable outputs, and shipping tools that hold up under real-world constraints.
        </p>
      </section>

      <section id="contact" className="py-10 border-t border-white/10 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">Contact</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          If you&apos;re hiring for roles where reliability matters and speed still wins, I&apos;d love to talk.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:mdworkin3@gatech.edu">
            <Button>Send Email</Button>
          </a>
          <a href="https://linkedin.com/in/matthew-dworkin" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Open LinkedIn</Button>
          </a>
        </div>
      </section>
    </div>
  )
}
