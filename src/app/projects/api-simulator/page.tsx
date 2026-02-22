import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function APISimulatorPage() {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">REST API Simulator & Testing Framework</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Python/Docker testing framework that scaled from a 7-person team tool to a framework used by 50+ engineers across Strategic Missions Division
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>Python</Badge>
          <Badge>Docker</Badge>
          <Badge>REST API</Badge>
          <Badge>Jenkins</Badge>
          <Badge>CI/CD</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="metric">50+ engineers</Badge>
          <Badge variant="metric">CI/CD integration</Badge>
          <Badge variant="metric">Standardized testing</Badge>
        </div>
      </div>

      {/* Problem */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Problem</h2>
        <p className="text-muted-foreground mb-4">
          Hardware API testing at L3Harris required physical devices, long feedback loops, and manual verification. A 7-person team had built a basic API simulator, but it was undocumented, inconsistent, and lacked standard error handling.
        </p>
        <p className="text-muted-foreground">
          As the Strategic Missions Division scaled, multiple teams needed to test against the same hardware APIs without blocking each other or requiring dedicated hardware allocations.
        </p>
      </section>

      {/* Constraints */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Constraints</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Must match production hardware API behavior exactly</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Integrate with existing Jenkins CI/CD pipeline (no infrastructure changes)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Support parallel test execution for multiple teams</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Zero downtime during simulator updates</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Must be maintainable by engineers unfamiliar with original codebase</span>
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Solution</h2>
        <p className="text-muted-foreground mb-6">
          Transformed the prototype into a production-grade framework with standardized interfaces, Docker containerization, and comprehensive documentation.
        </p>

        {/* Architecture Diagram */}
        <div className="border rounded-lg p-6 bg-muted/30 mb-6">
          <h3 className="font-semibold mb-4">Architecture</h3>
          <div className="space-y-4 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="flex-1 border rounded px-3 py-2 bg-background">Test Suite</div>
            </div>
            <div className="pl-8 space-y-2">
              <div className="flex items-center gap-2">
                <span>↓ HTTP Requests</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 border rounded px-3 py-2 bg-background">
                  Docker: API Simulator (Flask)
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>↓ State Machine</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 border rounded px-3 py-2 bg-background">
                  Hardware Behavior Model
                </div>
              </div>
            </div>
            <div className="pl-4 flex items-center gap-2">
              <span>← Standardized Responses (JSON)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. Standardized HTTP Status Codes</h3>
            <p className="text-muted-foreground mb-4">
              Fixed critical bugs where the simulator returned inconsistent status codes. Implemented a standard error-handling middleware.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`# Before: inconsistent error handling
def endpoint():
    if error:
        return {"error": "bad"}, 500  # Sometimes 400, 500, 200...

# After: standardized responses
class APIResponse:
    @staticmethod
    def success(data): return jsonify(data), 200
    @staticmethod
    def bad_request(msg): return jsonify({"error": msg}), 400
    @staticmethod
    def not_found(msg): return jsonify({"error": msg}), 404`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Docker Containerization</h3>
            <p className="text-muted-foreground mb-4">
              Packaged the simulator as a Docker container for consistent deployment across developer machines, CI/CD, and test environments.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "simulator.py"]`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. State Machine for Hardware Behavior</h3>
            <p className="text-muted-foreground mb-4">
              Implemented a state machine to accurately model hardware behavior (initialization sequences, error conditions, state transitions).
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`class HardwareState(Enum):
    IDLE = "idle"
    INITIALIZING = "initializing"
    READY = "ready"
    ERROR = "error"

class HardwareSimulator:
    def __init__(self):
        self.state = HardwareState.IDLE

    def initialize(self):
        if self.state != HardwareState.IDLE:
            raise InvalidStateError()
        self.state = HardwareState.INITIALIZING
        # Simulate initialization delay
        time.sleep(2)
        self.state = HardwareState.READY`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Jenkins CI/CD Integration</h3>
            <p className="text-muted-foreground mb-4">
              Integrated with existing Jenkins pipeline using docker-compose. Tests now run automatically on every commit without requiring hardware.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`# Jenkinsfile (simplified)
pipeline {
    stages {
        stage('Test') {
            steps {
                sh 'docker-compose up -d simulator'
                sh 'pytest tests/ --simulator=docker'
                sh 'docker-compose down'
            }
        }
    }
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">5. Documentation & Adoption Strategy</h3>
            <p className="text-muted-foreground mb-4">
              Wrote comprehensive documentation, example test cases, and migration guides. Presented at team demos to drive adoption across the division.
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
            <span>Scaled from 7-person team tool to framework used by <strong>50+ engineers</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Reduced test cycle time from hours (with hardware) to minutes (with simulator)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Enabled parallel testing across multiple teams without hardware contention</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Fixed critical API bugs standardizing HTTP status codes across CI/CD pipeline</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Early adopter of company's VSCode AI tool—documented use cases that informed enterprise rollout</span>
          </li>
        </ul>
      </section>

      {/* What's Next */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What I'd Do Next</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Add support for simulating hardware failures and edge cases</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Implement request recording/replay for creating test fixtures from production traffic</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Build a web UI for inspecting simulator state and logs</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Add performance benchmarking to catch API performance regressions</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Containerize with Kubernetes for multi-tenant simulator deployments</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between border-t pt-8">
        <Link href="/projects">
          <Button variant="outline">← Previous Project</Button>
        </Link>
        <Link href="/projects/poolerz">
          <Button variant="outline">Next Project →</Button>
        </Link>
      </div>
    </div>
  )
}
