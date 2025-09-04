import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// Blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: "getting-started-with-ai",
    title: "Getting Started with AI Development",
    description: "A comprehensive guide to building your first AI application using modern tools and frameworks.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["AI", "Development", "Tutorial"],
    content: `
# Getting Started with AI Development

Artificial Intelligence is transforming the way we build applications. In this comprehensive guide, we'll explore the fundamentals of AI development and walk through building your first AI-powered application.

## What You'll Learn

- Setting up your AI development environment
- Understanding machine learning basics
- Building your first AI model
- Integrating AI into web applications

## Prerequisites

Before we dive in, make sure you have:
- Basic programming knowledge (Python or JavaScript)
- Understanding of web development concepts
- Curiosity and patience for learning

## Setting Up Your Environment

First, let's set up the necessary tools and libraries...

[Content continues...]
    `,
  },
  {
    id: "full-stack-best-practices",
    title: "Full Stack Development Best Practices",
    description: "Essential patterns and practices for building scalable full-stack applications in 2024.",
    date: "March 10, 2024",
    readTime: "12 min read",
    tags: ["Full Stack", "Best Practices", "Architecture"],
    content: `
# Full Stack Development Best Practices

Building scalable full-stack applications requires careful consideration of architecture, code organization, and development practices. Here are the essential patterns every developer should know.

## Architecture Principles

### 1. Separation of Concerns
Keep your frontend, backend, and database layers clearly separated...

### 2. API Design
Design your APIs with consistency and scalability in mind...

[Content continues...]
    `,
  },
  {
    id: "computer-vision-projects",
    title: "Computer Vision Projects That Matter",
    description: "Exploring real-world applications of computer vision and how to get started with your own projects.",
    date: "March 5, 2024",
    readTime: "10 min read",
    tags: ["Computer Vision", "OpenCV", "Projects"],
    content: `
# Computer Vision Projects That Matter

Computer vision is one of the most exciting fields in AI, with applications ranging from medical imaging to autonomous vehicles. Let's explore some impactful projects you can build.

## Real-World Applications

### Medical Image Analysis
Computer vision is revolutionizing healthcare by helping doctors analyze medical images more accurately...

### Autonomous Systems
From self-driving cars to delivery drones, computer vision enables machines to understand their environment...

[Content continues...]
    `,
  },
  {
    id: "building-saas-with-nextjs",
    title: "Building a SaaS Application with Next.js",
    description: "Step-by-step guide to creating a production-ready SaaS application using Next.js and modern tools.",
    date: "February 28, 2024",
    readTime: "15 min read",
    tags: ["Next.js", "SaaS", "React"],
    content: `
# Building a SaaS Application with Next.js

Next.js has become the go-to framework for building modern web applications. In this guide, we'll build a complete SaaS application from scratch.

## Project Overview

We'll be building a project management SaaS with the following features:
- User authentication and authorization
- Team collaboration tools
- Real-time updates
- Payment integration

[Content continues...]
    `,
  },
  {
    id: "devops-automation-strategies",
    title: "DevOps Automation Strategies for Modern Teams",
    description: "Implementing CI/CD pipelines and automation practices that scale with your development team.",
    date: "February 20, 2024",
    readTime: "11 min read",
    tags: ["DevOps", "CI/CD", "Automation"],
    content: `
# DevOps Automation Strategies for Modern Teams

Effective DevOps practices can dramatically improve your team's productivity and code quality. Let's explore automation strategies that actually work.

## The DevOps Mindset

DevOps isn't just about tools—it's about culture, collaboration, and continuous improvement...

## Essential Automation Areas

### 1. Continuous Integration
Automate your testing and build processes...

### 2. Deployment Pipelines
Create reliable, repeatable deployment processes...

[Content continues...]
    `,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Thoughts on software development, AI, and building things that matter.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`hover:shadow-lg transition-all hover:scale-105 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ASCII Art Divider */}
        <div className="mt-16 text-center">
          <div className="font-mono text-muted-foreground text-sm">
            <pre className="inline-block">
              {`    ╔══════════════════════════════════════╗
    ║  More posts coming soon...           ║
    ║  Stay tuned for updates!             ║
    ╚══════════════════════════════════════╝`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
