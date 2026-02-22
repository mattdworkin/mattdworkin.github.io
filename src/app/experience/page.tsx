import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/projects"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Building high-reliability systems, developer tools, and AI-powered workflows in aerospace and networking
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={`${exp.company}-${exp.role}-${index}`} className="relative">
            {/* Timeline Line */}
            {index !== experience.length - 1 && (
              <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-border" />
            )}

            {/* Timeline Dot */}
            <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-primary" />

            {/* Content */}
            <div className="ml-12 pb-8 border-b last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-1 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-1 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span className="flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-12 pt-12 border-t">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">TypeScript/JavaScript</Badge>
              <Badge variant="secondary">VHDL/Verilog</Badge>
              <Badge variant="secondary">C</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">x86 Assembly</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Backend & Systems</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">FastAPI</Badge>
              <Badge variant="secondary">Flask</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Linux</Badge>
              <Badge variant="secondary">REST API design</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">MySQL</Badge>
              <Badge variant="secondary">MongoDB</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React.js</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TailwindCSS</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Data & ML</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">scikit-learn</Badge>
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">NumPy</Badge>
              <Badge variant="secondary">matplotlib</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Git/GitHub</Badge>
              <Badge variant="secondary">Bitbucket</Badge>
              <Badge variant="secondary">Vivado</Badge>
              <Badge variant="secondary">Vercel</Badge>
              <Badge variant="secondary">JUnit</Badge>
              <Badge variant="secondary">LaTeX</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12 pt-12 border-t">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="border rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">
                Georgia Institute of Technology
              </h3>
              <p className="text-muted-foreground">
                B.S. in Computer Science
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Concentrations: Information Internetworks and Artificial Intelligence
              </p>
            </div>
            <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
              <div className="flex items-center gap-1 md:justify-end">
                <Calendar className="h-4 w-4" />
                <span>August 2022 - May 2026</span>
              </div>
              <div className="flex items-center gap-1 md:justify-end mt-1">
                <MapPin className="h-4 w-4" />
                <span>Atlanta, GA</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Relevant Coursework</h4>
              <p className="text-sm text-muted-foreground">
                Design & Analysis of Algorithms, Data Structures and Algorithms, Systems & Networks,
                Computer Organization, Database Systems, Enterprise Computing, Machine Learning,
                Artificial Intelligence, Computer Vision, Automata & Complexity, Computer Networking,
                Linear Algebra, Probability and Statistics, Discrete Mathematics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
