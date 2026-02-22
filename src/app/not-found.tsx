import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Donut } from "@/components/Donut"

export default function NotFound() {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Page not found. But here's a spinning donut while you're here!
      </p>

      <Donut />

      <div className="mt-12">
        <Link href="/">
          <Button size="lg">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        (The donut is a tribute to the classic donut.c by Andy Sloane)
      </p>
    </div>
  )
}
