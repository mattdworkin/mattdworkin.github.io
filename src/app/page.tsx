"use client"

import Link from "next/link"
import { MouseEvent, useEffect } from "react"
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
  id: string
  period: string
  type: "Experience" | "Project"
  title: string
  summary: string
  links?: { label: string; href: string }[]
}

const projectShowcase: ProjectShowcase[] = [
  {
    id: "ringil",
    title: "Ringil",
    summary:
      "Converts unstructured specification/proposal documents into structured requirements and verification traceability.",
    stack: ["Next.js", "FastAPI", "Postgres/Supabase", "LLM extraction", "CI"],
    signals: ["Traceability", "Audit-ready outputs", "Deterministic pipelines"],
    links: [
      { label: "Website", href: "https://www.ringiltech.com/" },
    ],
  },
  {
    id: "smart-trade-advisor",
    title: "Smart Trade Advisor",
    summary:
      "Agentic market research platform that routes each question across market data, headlines, vector knowledge, and company graph relationships to produce role-aware trading recommendations.",
    stack: ["FastAPI", "Python", "Neon pgvector", "Neo4j", "NewsAPI.ai", "OpenAI"],
    signals: ["Source routing", "Role-aware outputs", "Action planning automation"],
    links: [
      { label: "Live App", href: "https://smart-trade-advisor.onrender.com/" },
      { label: "GitHub", href: "https://github.com/mattdworkin/smart-trade-advisor" },
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
    ],
  },
]

const timeline: TimelineEntry[] = [
  {
    id: "ringil-current",
    period: "Jan 2026 - Present",
    type: "Project",
    title: "Ringil",
    summary: "Building traceability-first verification automation for high-assurance engineering workflows.",
    links: [{ label: "Website", href: "https://www.ringiltech.com/" }],
  },
  {
    id: "l3harris-swe",
    period: "May 2025 - Aug 2025",
    type: "Experience",
    title: "L3Harris Technologies - Software Engineer Intern",
    summary: "Shipped and maintained API simulation/testing infrastructure used in hardware-facing workflows.",
    links: [{ label: "View on Resume", href: "/resume" }],
  },
  {
    id: "l3harris-fpga",
    period: "May 2024 - Aug 2024",
    type: "Experience",
    title: "L3Harris Technologies - FPGA Electrical Engineer Intern",
    summary: "Worked on FPGA-centric hardware workflows with a focus on validation and engineering rigor.",
    links: [{ label: "View on Resume", href: "/resume" }],
  },
  {
    id: "vecima-swe",
    period: "May 2023 - Aug 2023",
    type: "Experience",
    title: "Vecima Networks - Software Engineer Intern",
    summary: "Built internal Linux/Python tooling for throughput simulation and diagnostics workflows.",
    links: [{ label: "View on Resume", href: "/resume" }],
  },
]

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    element.style.setProperty("--mx", `${x}%`)
    element.style.setProperty("--my", `${y}%`)
  }

  return (
    <div className="future-stream container max-w-6xl px-4 py-10 md:py-14 mx-auto">
      <section id="home" className="py-12 md:py-20 scroll-mt-24" data-reveal>
        <div className="cell-panel interactive-card p-6 md:p-10" onMouseMove={handlePointerMove}>
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
              className="hero-link inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matthew-dworkin"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href="/#resume" className="hero-link inline-flex items-center gap-1.5 hover:text-foreground">
              <ExternalLink className="h-4 w-4" />
              Resume
            </a>
            <a
              href="mailto:mdworkin3@gatech.edu"
              className="hero-link inline-flex items-center gap-1.5 hover:text-foreground"
            >
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

      <section id="projects" className="py-10 border-t border-white/10 scroll-mt-24" data-reveal>
        <div className="mb-7">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">Featured Projects</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Some projects focused on verification, testing infrastructure, and practical product engineering I&apos;m
            proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectShowcase.map((project, index) => (
            <article
              key={project.id}
              className="cell-panel interactive-card p-6"
              onMouseMove={handlePointerMove}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
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

      <section id="timeline" className="py-10 border-t border-white/10 scroll-mt-24" data-reveal>
        <div className="mb-7">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">Work Experience</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A clear timeline of experience that shapes my current engineering direction.
          </p>
        </div>

        <div className="space-y-4">
          {timeline.map((entry) => (
            <article key={entry.id} className="cell-panel interactive-card timeline-card p-5" onMouseMove={handlePointerMove}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="status-line">{entry.period}</p>
                <p className="kicker">{entry.type}</p>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{entry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{entry.summary}</p>
              {entry.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {entry.links.map((link) => (
                    <a
                      key={`${entry.id}-${link.label}`}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <Button variant="outline" size="sm">
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="py-10 border-t border-white/10 scroll-mt-24" data-reveal>
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.03em]">Resume</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Access my full resume details, including project history, experience, and technical skills.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/Matthew%20Dworkin%27s%20Resume%20(6).pdf" target="_blank" rel="noopener noreferrer">
            <Button>Open Resume PDF</Button>
          </a>
        </div>
      </section>

      <section id="contact" className="py-10 border-t border-white/10 scroll-mt-24" data-reveal>
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
