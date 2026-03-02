/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { MouseEvent } from "react"

const topFiveLists = [
  {
    title: "Top 5 Movies",
    items: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
  {
    title: "Top 5 Directors",
    items: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
  {
    title: "Top 5 Authors",
    items: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
  {
    title: "Top 5 Books",
    items: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
  {
    title: "Top 5 Songs",
    items: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
  {
    title: "Top 5 Artists",
    items: ["TBD", "TBD", "TBD", "TBD", "TBD"],
  },
]

export default function AboutPage() {
  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    event.currentTarget.style.setProperty("--about-x", `${x}%`)
    event.currentTarget.style.setProperty("--about-y", `${y}%`)
  }

  return (
    <div className="about-cosmos px-4 py-10 md:px-8 md:py-12" onMouseMove={handlePointerMove}>
      <div className="about-aurora" aria-hidden />
      <div className="about-stars" aria-hidden />
      <div className="about-stars about-stars-far" aria-hidden />
      <div className="about-haze" aria-hidden />

      <div className="relative z-10 w-full">
        <section className="cell-panel p-6 md:p-10">
          <p className="kicker">Who Is Matthew Dworkin?</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold uppercase tracking-[0.04em] leading-tight">
            Personal Graph
          </h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground">
            A Figma-style node board of the non-work side: running, Spring Street, and friends + family.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/">
              <Button>Back Home</Button>
            </Link>
          </div>
        </section>

        <section className="graph-board mt-8">
          <svg className="graph-lines" viewBox="0 0 1000 720" aria-hidden="true">
            <path d="M500 360 L260 170" />
            <path d="M500 360 L740 170" />
            <path d="M500 360 L500 590" />
            <path d="M500 360 L790 520" />
          </svg>

          <article className="graph-node graph-hub">
            <p className="kicker">Center Node</p>
            <h2 className="mt-2 text-2xl font-semibold">Matthew Dworkin</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Musician, runner, builder, and teammate. Explore the category nodes around this hub.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <a href="https://github.com/mattdworkin" target="_blank" rel="noopener noreferrer" className="graph-chip">
                GitHub
              </a>
              <a href="https://linkedin.com/in/matthew-dworkin" target="_blank" rel="noopener noreferrer" className="graph-chip">
                LinkedIn
              </a>
              <a href="mailto:mdworkin3@gatech.edu" className="graph-chip">
                Email
              </a>
            </div>
          </article>

          <article className="graph-node graph-running">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">Running</h3>
              <span className="kicker">Node 01</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Cross-country and track footprint.</p>
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
              alt="Running track at sunset"
              className="graph-media mt-4"
            />
            <div className="graph-video mt-4">
              <video
                controls
                muted
                loop
                playsInline
                src="https://cdn.coverr.co/videos/coverr-man-training-in-the-city-1579/1080p.mp4"
              />
            </div>
            <a
              href="https://ga.milesplit.com/athletes/6383077-matthew-dworkin"
              target="_blank"
              rel="noopener noreferrer"
              className="path-branch mt-4 block"
            >
              Georgia MileSplit Profile <ExternalLink className="ml-2 inline h-3.5 w-3.5" />
            </a>
          </article>

          <article className="graph-node graph-spring">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">Spring Street</h3>
              <span className="kicker">Node 02</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Band clips, shows, and moments.</p>
            <div className="graph-video mt-4">
              <iframe
                src="https://www.youtube.com/embed/NbFFlEwQb50?start=1669"
                title="Spring Street concert"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.instagram.com/spring.street.band/"
              target="_blank"
              rel="noopener noreferrer"
              className="path-branch mt-4 block"
            >
              Spring Street Instagram <ExternalLink className="ml-2 inline h-3.5 w-3.5" />
            </a>
          </article>

          <article className="graph-node graph-family">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">Friends & Family</h3>
              <span className="kicker">Node 03</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">The people node. Real life context behind the work.</p>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Friends enjoying time together"
              className="graph-media mt-4"
            />
            <div className="graph-video mt-4">
              <video
                controls
                muted
                loop
                playsInline
                src="https://cdn.coverr.co/videos/coverr-friends-watching-the-sunset-1575/1080p.mp4"
              />
            </div>
          </article>

          <article className="graph-node graph-favorites">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">Movies + Top 5 Lists</h3>
              <span className="kicker">Node 04</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Favorite movies and ranking lists. Replace each `TBD` with your picks.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {topFiveLists.map((list) => (
                <section key={list.title} className="graph-list">
                  <p className="graph-list-title">{list.title}</p>
                  <ol className="graph-list-items">
                    {list.items.map((item, index) => (
                      <li key={`${list.title}-${index}`}>{item}</li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}
