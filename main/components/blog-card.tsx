import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlitchText } from "@/components/glitch-text"
import Link from "next/link"

interface BlogCardProps {
  title: string
  slug: string
  date: string
  description: string
}

export function BlogCard({
  title,
  slug,
  date,
  description
}: BlogCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-primary transition-colors"
          >
            <GlitchText text={title} />
          </Link>
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
