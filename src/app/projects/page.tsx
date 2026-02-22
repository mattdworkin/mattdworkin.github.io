"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects

  return (
    <div className="container px-4 py-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Building production systems, developer tools, and AI-powered applications
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <p className="text-sm font-medium mb-3">Filter by:</p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found with this filter</p>
        </div>
      )}
    </div>
  )
}
