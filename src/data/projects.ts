export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "smart-trade-advisor",
    title: "Smart Trade Advisor",
    description:
      "Role-aware AI market research platform that routes queries across market data, news, vector knowledge, and graph relationships to generate actionable trading insights.",
    tags: ["Python", "FastAPI", "Neon", "pgvector", "Neo4j", "AI Agents"],
    githubUrl: "https://github.com/mattdworkin/smart-trade-advisor",
    liveUrl: "https://smart-trade-advisor.onrender.com/",
    featured: true,
  },
  {
    id: "certifyfpga",
    title: "CertifyFPGA",
    description:
      "AI-assisted FPGA verification workflow for generating requirements traces, HDL, and simulation artifacts.",
    tags: ["Next.js", "FastAPI", "Supabase", "FPGA"],
    liveUrl: "https://www.ringiltech.com/",
    featured: true,
  },
  {
    id: "api-simulator",
    title: "REST API Simulator & Testing Framework",
    description:
      "Python and Docker-based simulator used to test hardware-facing APIs without physical device access.",
    tags: ["Python", "Docker", "Flask", "Jenkins"],
    githubUrl: "https://github.com/mattdworkin/rest-api-simulator",
    featured: true,
  },
  {
    id: "poolerz",
    title: "Poolerz",
    description:
      "Carpool coordination app that uses clustering to group riders by location and availability.",
    tags: ["Next.js", "TypeScript", "MongoDB", "DBSCAN"],
    githubUrl: "https://github.com/tylerrcady/poolerz",
    featured: true,
  },
]

export const experience = [
  {
    company: "L3Harris Technologies",
    role: "Software Engineer Intern",
    location: "Melbourne, FL",
    date: "May 2025 - Aug 2025",
    highlights: [
      "Built and maintained a Python/Docker REST API simulator used for hardware API testing.",
      "Fixed production API issues and standardized error handling for CI-driven test workflows.",
      "Documented internal AI coding tool behavior and shared adoption guidance with the team.",
    ],
  },
  {
    company: "L3Harris Technologies",
    role: "FPGA Electrical Engineering Intern",
    location: "Melbourne, FL",
    date: "May 2024 - Aug 2024",
    highlights: [
      "Contributed to FPGA-focused engineering workflows with an emphasis on verification and reliability.",
      "Supported hardware-adjacent development and validation tasks in a cross-functional environment.",
      "Produced technical artifacts to improve traceability and handoff clarity.",
    ],
  },
  {
    company: "Vecima Networks Inc.",
    role: "Software Engineer Intern",
    location: "Duluth, GA",
    date: "May 2023 - Aug 2023",
    highlights: [
      "Built a Linux cgroups-based I/O throttling tool for storage performance simulation.",
      "Wrote Python utilities to improve throughput in internal diagnostics workflows.",
      "Contributed to test-lab server setup and Python services in an Agile team.",
    ],
  },
]
