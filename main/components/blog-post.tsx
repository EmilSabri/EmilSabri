import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"
import { getAllBlogPosts } from "@/lib/blog-data" // Import getAllBlogPosts

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">{post.title}</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">{post.description}</p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <BlogContent content={post.content} />
        </div>

        {/* ASCII Art Divider */}
        <div className="mt-16 mb-8 text-center">
          <div className="font-mono text-muted-foreground text-sm">
            <pre className="inline-block">
              {`    ┌─────────────────────────────────────┐
    │  Thanks for reading! 📚             │
    │  More content coming soon...        │
    └─────────────────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* Author Card */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <img
                src="/software-engineer-headshot.png"
                alt="Emil Sabri"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">Emil Sabri</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Software Engineer with experience in computer vision, full stack development, and DevOps. Currently
                  working on SaaS solutions and exploring the intersection of AI and web development.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://linkedin.com/in/emilsabri" target="_blank">
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/emilsabri" target="_blank">
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">More Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RelatedPosts currentPostId={post.id} />
          </div>
        </div>
      </article>
    </div>
  )
}

function BlogContent({ content }: { content: string }) {
  // Simple markdown-like content renderer
  const lines = content.trim().split("\n")

  return (
    <div className="space-y-6">
      {lines.map((line, index) => {
        // Skip empty lines
        if (!line.trim()) return null

        // Headers
        if (line.startsWith("# ")) {
          return (
            <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
              {line.substring(2)}
            </h1>
          )
        }

        if (line.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold text-foreground mt-6 mb-3">
              {line.substring(3)}
            </h2>
          )
        }

        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-bold text-foreground mt-4 mb-2">
              {line.substring(4)}
            </h3>
          )
        }

        // Code blocks
        if (line.startsWith("```")) {
          const language = line.substring(3)
          return (
            <div key={index} className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto my-4">
              <div className="text-muted-foreground mb-2">{language}</div>
            </div>
          )
        }

        // Lists
        if (line.startsWith("- ") || line.startsWith("• ")) {
          return (
            <li key={index} className="text-muted-foreground ml-4">
              {line.substring(2)}
            </li>
          )
        }

        // Regular paragraphs
        if (line.trim() && !line.startsWith("```")) {
          return (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {line}
            </p>
          )
        }

        return null
      })}
    </div>
  )
}

function RelatedPosts({ currentPostId }: { currentPostId: string }) {
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter((post) => post.id !== currentPostId).slice(0, 2)

  return (
    <>
      {relatedPosts.map((post) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              <h4 className="font-bold text-foreground hover:text-primary transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>

              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
