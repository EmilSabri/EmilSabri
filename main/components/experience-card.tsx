import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  startYear: number
  endYear: number | "Present"
  experiences: string[]
  isCurrent?: boolean
}

export function ExperienceCard({
  title,
  company,
  startYear,
  endYear,
  experiences,
  isCurrent = false
}: ExperienceCardProps) {
  const formatDateRange = () => {
    if (endYear === "Present") {
      return `${startYear} - Present`
    }
    return `${startYear} - ${endYear}`
  }

  const getBadgeText = () => {
    if (isCurrent) return "Current"
    if (endYear === "Present") return "Current"
    
    const years = typeof endYear === "number" ? endYear - startYear : 0
    return years > 1 ? `${years} years` : `${years} year`
  }

  const getBadgeVariant = () => {
    return isCurrent || endYear === "Present" ? "secondary" : "outline"
  }

  return (
    <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-lg">
              {company} • {formatDateRange()}
            </CardDescription>
          </div>
          <Badge 
            variant={getBadgeVariant()} 
            className={isCurrent || endYear === "Present" ? "neon-glow" : ""}
          >
            {getBadgeText()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-muted-foreground">
          {experiences.map((experience, index) => (
            <li key={index}>• {experience}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
