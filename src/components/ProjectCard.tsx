"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  const openGithub = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Card
      className="group flex h-full flex-col cursor-pointer border-border/80 bg-card/80 transition-transform duration-200 hover:-translate-y-1"
      role="link"
      tabIndex={0}
      onClick={openGithub}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          openGithub()
        }
      }}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex gap-2 border-t border-border/60 pt-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          <Button variant="outline" size="sm">
            <Github className="mr-1 h-4 w-4" /> GitHub
          </Button>
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-1 h-4 w-4" /> Live
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
