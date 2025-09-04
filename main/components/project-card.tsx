import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlitchText } from "@/components/glitch-text"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  content: string
  technologies: string[]
  projectUrl: string
  badgeText: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  content,
  technologies,
  projectUrl,
  badgeText,
  badgeVariant = "default"
}: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all hover:scale-105 glitch-hover scan-lines">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">
            <GlitchText text={title} />
          </CardTitle>
          <Badge className="neon-glow" variant={badgeVariant}>
            {badgeText}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-lg mb-4 ascii-border"
        />
        <p className="text-muted-foreground mb-4">{content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        {projectUrl && (
          <Button asChild className="w-full glitch-hover">
            <Link href={projectUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
