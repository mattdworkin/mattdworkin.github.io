import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export default function PoolerzPage() {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Poolerz</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Full-stack carpool coordination platform using DBSCAN clustering for automatic carpool matching
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>Next.js</Badge>
          <Badge>TypeScript</Badge>
          <Badge>React</Badge>
          <Badge>MongoDB</Badge>
          <Badge>Google OAuth</Badge>
          <Badge>DBSCAN</Badge>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="metric">Google OAuth</Badge>
          <Badge variant="metric">Real-time updates</Badge>
          <Badge variant="metric">Vercel</Badge>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/tylerrcady/poolerz"
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
          College students organizing carpools for events face coordination challenges: manually matching people by location, managing group chats, tracking who's driving, and ensuring balanced car capacity.
        </p>
        <p className="text-muted-foreground">
          Existing solutions (group chats, spreadsheets) require significant manual effort and don't scale as events grow. There's no automated way to cluster people by geographic proximity.
        </p>
      </section>

      {/* Constraints */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Constraints</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Must authenticate users securely (university email verification)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Carpool matching must happen automatically without manual intervention</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Real-time roster updates as people join/leave carpools</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Mobile-responsive (most users access from phones)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Zero-cost deployment (student project budget constraints)</span>
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-4">Solution</h2>
        <p className="text-muted-foreground mb-6">
          Built a full-stack web application with Google OAuth, MongoDB storage, and DBSCAN clustering for automatic carpool matching by geographic proximity.
        </p>

        {/* Architecture Diagram */}
        <div className="border rounded-lg p-6 bg-muted/30 mb-6">
          <h3 className="font-semibold mb-4">Architecture</h3>
          <div className="space-y-4 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="flex-1 border rounded px-3 py-2 bg-background">Next.js Frontend</div>
            </div>
            <div className="pl-8 space-y-2">
              <div className="flex items-center gap-2">
                <span>↓ Google OAuth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 border rounded px-3 py-2 bg-background">
                  Auth & Session Management
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>↓ API Routes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 border rounded px-3 py-2 bg-background">
                  MongoDB (Users, Events, Carpools)
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>↓ DBSCAN Algorithm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 border rounded px-3 py-2 bg-background">
                  Carpool Clusters by Location
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="mb-12 pb-12 border-b">
        <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. DBSCAN Clustering for Carpool Matching</h3>
            <p className="text-muted-foreground mb-4">
              Implemented DBSCAN (Density-Based Spatial Clustering) to automatically group people by geographic proximity. Unlike k-means, DBSCAN doesn't require knowing the number of carpools in advance.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`import { DBSCAN } from 'density-clustering'

function createCarpools(users: User[], maxDistance: number) {
  // Extract coordinates: [latitude, longitude]
  const coordinates = users.map(u => [u.location.lat, u.location.lng])

  // DBSCAN: eps = max distance (km), minPts = 2
  const dbscan = new DBSCAN()
  const clusters = dbscan.run(coordinates, maxDistance, 2)

  // Map clusters to carpools
  return clusters.map(clusterIndices => ({
    members: clusterIndices.map(i => users[i]),
    centroid: calculateCentroid(clusterIndices, coordinates)
  }))
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Google OAuth Authentication</h3>
            <p className="text-muted-foreground mb-4">
              Integrated Google OAuth to verify university email addresses and prevent spam. Used NextAuth.js for session management.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({ profile }) {
      // Only allow university emails
      return profile.email?.endsWith('@gatech.edu') ?? false
    }
  }
})`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Real-Time Roster Updates</h3>
            <p className="text-muted-foreground mb-4">
              Implemented SWR (stale-while-revalidate) for optimistic UI updates. When a user joins/leaves a carpool, the UI updates immediately while revalidating in the background.
            </p>
            <pre className="text-xs p-4 bg-muted rounded-lg overflow-x-auto">
              <code>{`import useSWR from 'swr'

function CarpoolRoster({ carpoolId }: { carpoolId: string }) {
  const { data, mutate } = useSWR(\`/api/carpools/\${carpoolId}\`)

  const joinCarpool = async () => {
    // Optimistic update
    mutate({ ...data, members: [...data.members, currentUser] }, false)

    // Actual API call
    await fetch(\`/api/carpools/\${carpoolId}/join\`, { method: 'POST' })

    // Revalidate
    mutate()
  }

  return <div>{/* Roster UI */}</div>
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Multi-Step Registration Flow</h3>
            <p className="text-muted-foreground mb-4">
              Built a clean onboarding flow with form validation, location input (geocoding via Google Maps API), and availability selection.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">5. Vercel Serverless Deployment</h3>
            <p className="text-muted-foreground mb-4">
              Deployed on Vercel with serverless functions for API routes and MongoDB Atlas for data storage. Zero-cost deployment for student project.
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
            <span>Automated carpool matching using DBSCAN geographic clustering</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Secure Google OAuth authentication with university email verification</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Real-time roster updates with optimistic UI</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Mobile-responsive design for on-the-go coordination</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Deployed on Vercel with zero hosting costs</span>
          </li>
        </ul>
      </section>

      {/* What's Next */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What I'd Do Next</h2>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Add in-app messaging for carpool coordination</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Implement push notifications for ride reminders</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Support recurring events (weekly carpools)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Add route optimization (Google Maps Directions API)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span>Build analytics dashboard for organizers (attendance, carpool efficiency)</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between border-t pt-8">
        <Link href="/projects/api-simulator">
          <Button variant="outline">← Previous Project</Button>
        </Link>
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    </div>
  )
}
