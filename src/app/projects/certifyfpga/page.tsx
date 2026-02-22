import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CertifyFPGAPage() {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">CertifyFPGA</h1>
        <p className="text-xl text-muted-foreground mb-6">
          AI-powered FPGA verification platform that automates DO-254/ISO 26262 certification workflows from proposal upload through sign-off
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>Next.js</Badge>
          <Badge>React</Badge>
          <Badge>FastAPI</Badge>
          <Badge>Supabase</Badge>
          <Badge>Claude API</Badge>
          <Badge>Vivado</Badge>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="metric">85%+ coverage</Badge>
          <Badge variant="metric">PDF extraction</Badge>
          <Badge variant="metric">Tcl generation</Badge>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/ringil-technologies-inc/beta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </a>
        </div>
      </div>

      {/* Problem */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Problem</h2>
        <p className="text-muted-foreground mb-4">
          FPGA verification for safety-critical systems (aerospace, automotive) requires compliance with DO-254 and ISO 26262 standards. Engineers manually extract requirements from PDF proposals, write HDL code, generate testbenches, run simulations, and produce traceability matrices—a process that takes weeks and is error-prone.
        </p>
        <p className="text-muted-foreground">
          Traditional verification tools don't integrate with modern LLMs, lack end-to-end workflow automation, and require significant manual intervention at every stage.
        </p>
      </section>

      {/* Constraints */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Constraints</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Must integrate with existing Xilinx Vivado toolchain (Tcl scripting)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Requirements traceability must be bidirectional and auditable</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Generated code needs unique tags for requirement-to-HDL mapping</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Test coverage must target 85%+ for certification compliance</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Must handle complex PDF formats (proposal documents, datasheets)</span>
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Solution</h2>
        <p className="text-muted-foreground mb-6">
          Built a full-stack platform that automates the entire verification workflow using AI and batch simulation.
        </p>

        {/* Architecture Diagram */}
        <div className="border rounded-lg p-6 bg-muted/30 mb-6">
          <h3 className="font-semibold mb-4">Architecture</h3>
          <div className="space-y-4 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="w-32 border rounded px-3 py-2 bg-background">PDF Upload</div>
              <span>→</span>
              <div className="w-32 border rounded px-3 py-2 bg-background">Extract Text</div>
              <span>→</span>
              <div className="w-32 border rounded px-3 py-2 bg-background">Claude API</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32"></div>
              <span></span>
              <div className="w-32"></div>
              <span>↓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32 border rounded px-3 py-2 bg-background">HDL + Tags</div>
              <span>→</span>
              <div className="w-32 border rounded px-3 py-2 bg-background">Testbench</div>
              <span>→</span>
              <div className="w-32 border rounded px-3 py-2 bg-background">Tcl Script</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32"></div>
              <span></span>
              <div className="w-32"></div>
              <span>↓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32 border rounded px-3 py-2 bg-background">Vivado Sim</div>
              <span>→</span>
              <div className="w-32 border rounded px-3 py-2 bg-background">Coverage</div>
              <span>→</span>
              <div className="w-32 border rounded px-3 py-2 bg-background">Traceability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              1. AI-Powered Requirement Extraction
            </h3>
            <p className="text-muted-foreground mb-4">
              Integrated Anthropic Claude API to parse PDF proposals and extract structured requirements. Custom prompt engineering ensures consistent output format for downstream processing.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`# Simplified requirement extraction
def extract_requirements(pdf_text: str) -> List[Requirement]:
    prompt = f"""Extract FPGA requirements from this proposal:
    {pdf_text}

    Return structured JSON with: id, description, type, priority"""

    response = anthropic.messages.create(
        model="claude-3-opus-20240229",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}]
    )
    return parse_requirements(response.content)`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. HDL Code Generation with Traceability Tags</h3>
            <p className="text-muted-foreground mb-4">
              Generated VHDL/Verilog code includes unique comment tags that map back to requirements, enabling bidirectional traceability and gap analysis.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`-- REQ_ID: SYS-001
-- Description: I2C clock must operate at 100kHz
signal i2c_clk : std_logic;
constant CLK_FREQ : integer := 100_000; -- REQ_TAG: SYS-001`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Vivado Batch-Mode Simulation</h3>
            <p className="text-muted-foreground mb-4">
              Automated Vivado simulation via Tcl script generation. No manual GUI interaction required—enables CI/CD integration.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`# Generate Tcl simulation script
create_project -force sim_project ./sim
add_files [glob ./rtl/*.vhd]
add_files -fileset sim_1 [glob ./tb/*.vhd]
set_property top testbench [get_filesets sim_1]
launch_simulation
run 1000ns
close_project`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Full-Stack Integration</h3>
            <p className="text-muted-foreground mb-4">
              Next.js frontend with FastAPI backend and Supabase for auth/storage. Real-time updates via websockets for long-running simulation jobs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">5. Gap Analysis & Traceability Matrix</h3>
            <p className="text-muted-foreground mb-4">
              Automated detection of requirements without corresponding HDL implementation or test coverage. Generates compliance-ready traceability matrices.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Generated test suites achieving 85%+ code coverage</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>End-to-end workflow automation from PDF to simulation results</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Bidirectional requirements traceability with automated gap detection</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Successfully integrated Vivado batch simulation via Tcl generation</span>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground italic">
          TODO: Add screenshots of traceability matrix and coverage reports
        </p>
      </section>

      {/* What's Next */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What I'd Do Next</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Add support for formal verification (model checking with Z3/Yices)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Integrate with version control for HDL diff tracking</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Build a CI/CD plugin for automated regression testing</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Add support for multiple FPGA vendors (Intel, Lattice)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Implement team collaboration features (shared workspaces, comments)</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between border-t pt-8">
        <Link href="/projects">
          <Button variant="outline">← Back to Projects</Button>
        </Link>
        <Link href="/projects/api-simulator">
          <Button variant="outline">Next Project →</Button>
        </Link>
      </div>
    </div>
  )
}
