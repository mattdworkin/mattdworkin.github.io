"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

const recommendationTargets = [
  { value: "watch", label: "Watch List" },
  { value: "listen", label: "Listen List" },
  { value: "book", label: "Book List" },
] as const

type RecommendationTarget = (typeof recommendationTargets)[number]["value"]

type Recommendation = {
  id: string
  target: RecommendationTarget
  title: string
  displayName: string
  anonymous: boolean
  createdAt: string
}

const STORAGE_KEY = "about-recommendations-v1"

const targetLabels: Record<RecommendationTarget, string> = {
  watch: "Watch List",
  listen: "Listen List",
  book: "Book List",
}

function isTarget(value: unknown): value is RecommendationTarget {
  return value === "watch" || value === "listen" || value === "book"
}

function parseRecommendations(raw: string | null): Recommendation[] {
  if (!raw) return []

  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed
      .map((entry) => {
        if (!entry || typeof entry !== "object") return null

        const candidate = entry as Record<string, unknown>
        const id = typeof candidate.id === "string" ? candidate.id : ""
        const target = candidate.target
        const title = typeof candidate.title === "string" ? candidate.title.trim() : ""
        const displayName = typeof candidate.displayName === "string" ? candidate.displayName.trim() : ""
        const createdAt = typeof candidate.createdAt === "string" ? candidate.createdAt : ""
        const anonymous = Boolean(candidate.anonymous)

        if (!id || !title || !isTarget(target)) return null

        return {
          id,
          target,
          title,
          displayName: displayName || "Anonymous",
          anonymous,
          createdAt: createdAt || new Date(0).toISOString(),
        }
      })
      .filter((entry): entry is Recommendation => entry !== null)
  } catch {
    return []
  }
}

function formatDate(date: string): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return ""
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function RecommendationBoard() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [target, setTarget] = useState<RecommendationTarget>("watch")
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [anonymous, setAnonymous] = useState(true)
  const [message, setMessage] = useState("")
  const [hasLoadedStorage, setHasLoadedStorage] = useState(false)

  useEffect(() => {
    setRecommendations(parseRecommendations(window.localStorage.getItem(STORAGE_KEY)))
    setHasLoadedStorage(true)
  }, [])

  useEffect(() => {
    if (!hasLoadedStorage) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recommendations))
  }, [hasLoadedStorage, recommendations])

  const groupedRecommendations = useMemo(() => {
    const grouped: Record<RecommendationTarget, Recommendation[]> = {
      watch: [],
      listen: [],
      book: [],
    }

    for (const recommendation of recommendations) {
      grouped[recommendation.target].push(recommendation)
    }

    return grouped
  }, [recommendations])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const cleanTitle = title.trim()
    const cleanName = name.trim()

    if (!cleanTitle) {
      setMessage("Add a recommendation first.")
      return
    }

    if (!anonymous && !cleanName) {
      setMessage("Add your name or post anonymously.")
      return
    }

    const nextRecommendation: Recommendation = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      target,
      title: cleanTitle,
      displayName: anonymous ? "Anonymous" : cleanName,
      anonymous,
      createdAt: new Date().toISOString(),
    }

    setRecommendations((previous) => [nextRecommendation, ...previous].slice(0, 120))
    setTitle("")
    setName("")
    setAnonymous(true)
    setMessage(`Added to ${targetLabels[target]}.`)
  }

  return (
    <div className="mt-8 border border-white/10 bg-black/20 p-4 md:p-5">
      <p className="kicker">Recommendations</p>
      <h3 className="mt-2 text-2xl font-semibold">Leave Me a Pick</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Share a movie, song, or book recommendation and choose whether your name is shown.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
        <label className="block">
          <span className="kicker">Add To</span>
          <select
            className="mt-2 w-full border border-border bg-black/30 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            value={target}
            onChange={(event) => setTarget(event.target.value as RecommendationTarget)}
          >
            {recommendationTargets.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="kicker">Recommendation</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={120}
            placeholder="Title or artist + song"
            className="mt-2 w-full border border-border bg-black/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="kicker">Your Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={60}
            disabled={anonymous}
            placeholder={anonymous ? "Hidden while anonymous is on" : "Name"}
            className="mt-2 w-full border border-border bg-black/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60 focus:border-primary focus:outline-none"
          />
        </label>

        <div className="flex flex-col justify-end gap-3">
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(event) => setAnonymous(event.target.checked)}
              className="h-4 w-4"
            />
            Post anonymously
          </label>
          <Button type="submit" className="w-full md:w-auto">
            Add Recommendation
          </Button>
        </div>
      </form>

      {message ? <p className="mt-3 text-sm text-muted-foreground">{message}</p> : null}

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {recommendationTargets.map((section) => (
          <article key={section.value} className="signal-tile">
            <p className="kicker">{section.label}</p>
            {groupedRecommendations[section.value].length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">No recommendations yet.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {groupedRecommendations[section.value].map((recommendation) => (
                  <li key={recommendation.id} className="border border-white/10 bg-black/25 px-3 py-2">
                    <p className="text-sm">{recommendation.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {recommendation.anonymous ? "Anonymous" : recommendation.displayName}
                      {` · ${formatDate(recommendation.createdAt)}`}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
