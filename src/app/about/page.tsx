/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { readStravaSummary } from "@/lib/strava"
import { StravaDashboard } from "@/components/StravaDashboard"

const topFiveLists = [
  {
    title: "Top 5 Movies",
    items: ["The Social Network", "Heat", "The Fellowship of the Ring", "A Ghost Story", "Pan's Labyrinth"],
  },
  {
    title: "Top 5 Directors",
    items: ["Add director #1", "Add director #2", "Add director #3", "Add director #4", "Add director #5"],
  },
  {
    title: "Top 5 Authors",
    items: ["Add author #1", "Add author #2", "Add author #3", "Add author #4", "Add author #5"],
  },
  {
    title: "Top 5 Books",
    items: ["Add book #1", "Add book #2", "Add book #3", "Add book #4", "Add book #5"],
  },
  {
    title: "Top 5 Songs",
    items: ["Add song #1", "Add song #2", "Add song #3", "Add song #4", "Add song #5"],
  },
  {
    title: "Top 5 Artists",
    items: ["Add artist #1", "Add artist #2", "Add artist #3", "Add artist #4", "Add artist #5"],
  },
]

export default async function AboutPage() {
  const stravaSummary = await readStravaSummary()

  return (
    <div className="future-stream container max-w-6xl px-4 py-10 md:py-14 mx-auto">
      <section className="cell-panel overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
          <img
            src="/profile_pic.jpg"
            alt="Matthew Dworkin outdoors in the mountains"
            className="h-full min-h-[260px] w-full object-cover"
          />
          <div className="p-6 md:p-10">
            <p className="kicker">About Me</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold uppercase tracking-[0.04em] leading-tight">
              Matthew Dworkin
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
You know I do the software thing, but believe it or not, there's lots of other things that I enjoy doing in my free time - whether it's running a new trail, or picking up a new instrument, I most enjoy doing things that bring me closer to others and open opportunities for me to meet new people. Don't hesitate to reach out and share your thoughts on anything I have on here!            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://github.com/mattdworkin" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">GitHub</Button>
              </a>
              <a href="https://linkedin.com/in/matthew-dworkin" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">LinkedIn</Button>
              </a>
              <a href="mailto:mdworkin3@gatech.edu">
                <Button variant="outline">Email</Button>
              </a>
              <Link href="/">
                <Button>Back Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-6">
        <article className="cell-panel p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-5">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
              alt="Runners on a track"
              className="h-full min-h-[260px] w-full object-cover border border-white/10"
            />
            <div>
              <p className="kicker">Running</p>
              <h2 className="mt-2 text-3xl font-semibold">Performance, Pace, Discipline</h2>
              <p className="mt-3 text-muted-foreground">
                Running keeps everything else sharp. It is structure, momentum, and consistency.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://ga.milesplit.com/athletes/6383077-matthew-dworkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="path-branch block"
                >
                  Georgia MileSplit Profile <ExternalLink className="ml-2 inline h-3.5 w-3.5" />
                </a>
                <Link href="/#projects" className="path-branch block">
                  See Projects
                </Link>
              </div>
              <StravaDashboard summary={stravaSummary} />
            </div>
          </div>
        </article>

        <article className="cell-panel overflow-visible p-5 pb-7 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-5 items-start">
            <div>
              <p className="kicker">Music</p>
              <h2 className="mt-2 text-3xl font-semibold">Band Work and Live Shows</h2>
              <p className="mt-3 text-muted-foreground">
                Spring Street is the band my friends and I started about a month ago. We're mostly new players and I started learning the drums for it! It's been tough but playing songs I love in front of an audience has always been on my bucket list and I can safely say we survived our first "concert" and some people even said they liked it! Follow our instagram if you want to check us out next time we perform!
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.instagram.com/spring.street.band/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="path-branch block"
                >
                  Spring Street Instagram <ExternalLink className="ml-2 inline h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=NbFFlEwQb50&list=LL&index=3&t=686s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="path-branch block"
                >
                  Watch Concert Clip <ExternalLink className="ml-2 inline h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="aspect-video border border-white/10 bg-black/30">
              <iframe
                src="https://www.youtube.com/embed/NbFFlEwQb50?start=686"
                title="Spring Street concert"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </article>

        <article className="cell-panel p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-5">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Friends spending time together"
              className="h-full min-h-[260px] w-full object-cover border border-white/10"
            />
            <div>
              <p className="kicker">Friends & Family</p>
              <h2 className="mt-2 text-3xl font-semibold">People First, Always</h2>
              <p className="mt-3 text-muted-foreground">
                The core support system and the reason everything else matters. This is the anchor.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a href="mailto:mdworkin3@gatech.edu" className="path-branch block">
                  Reach Out Directly
                </a>
                <a href="https://linkedin.com/in/matthew-dworkin" target="_blank" rel="noopener noreferrer" className="path-branch block">
                  Connect on LinkedIn <ExternalLink className="ml-2 inline h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-8 cell-panel p-5 md:p-6">
        <p className="kicker">Favorites</p>
        <h2 className="mt-2 text-3xl font-semibold">Top 5 Lists</h2>
        <p className="mt-3 text-muted-foreground">
          I'd love your recommendations!
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topFiveLists.map((list) => (
            <article key={list.title} className="signal-tile">
              <p className="kicker">{list.title}</p>
              <ol className="mt-3 space-y-1 text-sm text-muted-foreground list-decimal pl-5">
                {list.items.map((item) => (
                  <li key={`${list.title}-${item}`}>{item}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
