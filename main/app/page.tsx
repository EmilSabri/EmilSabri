import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlitchText } from "@/components/glitch-text"
import { MatrixBackground } from "@/components/matrix-background"
import { AsciiArt, asciiArts } from "@/components/ascii-art"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border scan-lines">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-mono text-lg font-bold text-primary terminal-cursor">
              <GlitchText text="<ES />" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors glitch-hover"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-foreground hover:text-primary transition-colors glitch-hover"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-foreground hover:text-primary transition-colors glitch-hover"
              >
                Projects
              </a>
              <a
                href="#blog"
                className="text-foreground hover:text-primary transition-colors glitch-hover"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 retro-grid">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-primary mb-4 terminal-cursor">
                Hello, I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                <GlitchText text="Emil Sabri" className="glitch-text" />
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Software Engineer crafting digital experiences with code,
                creativity, and a touch of glitch aesthetic.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  asChild
                  className="glitch-effect hover:animate-pulse neon-glow"
                >
                  <Link
                    href="https://linkedin.com/in/emilsabri"
                    target="_blank"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="glitch-hover bg-transparent"
                >
                  <Link href="https://github.com/emilsabri" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="glitch-hover bg-transparent"
                >
                  <Link href="mailto:emil@example.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Link>
                </Button>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                Las Vegas, NV
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <img
                  src="/software-engineer-headshot.png"
                  alt="Emil Sabri"
                  className="rounded-lg shadow-2xl w-full h-full object-cover ascii-border scan-lines"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg pixelate-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            <GlitchText text="About Me" />
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-6">
                Professional experience is wide and varied. I have worked on
                projects in computer vision, full stack, and dev ops. My passion
                lies in creating innovative solutions that bridge the gap
                between complex technical challenges and user-friendly
                experiences.
              </p>
              <p className="mb-6">
                Working on a SaaS to bring an API to Midjourney. Currently
                looking for a full time role that will prove to be a great
                workspace for new learnings and challenges.
              </p>
              <p>And to not go broke lol</p>
            </div>
            <div className="flex justify-center">
              <AsciiArt art={asciiArts.terminal} className="text-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            <GlitchText text="Professional Experience" />
          </h2>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Senior Software Engineer
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Tech Company • 2022 - Present
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="neon-glow">
                    Current
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Led development of computer vision applications using
                    Python and OpenCV
                  </li>
                  <li>
                    • Built full-stack web applications with React, Node.js, and
                    PostgreSQL
                  </li>
                  <li>
                    • Implemented DevOps practices including CI/CD pipelines and
                    containerization
                  </li>
                  <li>
                    • Mentored junior developers and conducted code reviews
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Full Stack Developer
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Startup Inc • 2020 - 2022
                    </CardDescription>
                  </div>
                  <Badge variant="outline">2 years</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Developed responsive web applications using React and
                    TypeScript
                  </li>
                  <li>
                    • Designed and implemented RESTful APIs with Express.js
                  </li>
                  <li>
                    • Collaborated with design team to create pixel-perfect user
                    interfaces
                  </li>
                  <li>
                    • Optimized application performance and implemented testing
                    strategies
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            <GlitchText text="Featured Projects" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all hover:scale-105 glitch-hover scan-lines">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">
                    <GlitchText text="PreJourney" />
                  </CardTitle>
                  <Badge className="neon-glow">SaaS</Badge>
                </div>
                <CardDescription>
                  SaaS offering Midjourney through an API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/midjourney-api-dashboard-interface.jpg"
                  alt="PreJourney Dashboard"
                  className="w-full h-48 object-cover rounded-lg mb-4 ascii-border"
                />
                <p className="text-muted-foreground mb-4">
                  Built this for my AI lootbox merch store. Needed a way to
                  programmatically create images for the lootboxes and as of now
                  Midjourney currently has the best generative art.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">SvelteKit</Badge>
                  <Badge variant="outline">TailwindCSS</Badge>
                  <Badge variant="outline">AWS API Gateway</Badge>
                </div>
                <Button asChild className="w-full glitch-hover">
                  <Link href="https://prejourney.com" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105 glitch-hover scan-lines">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">
                    <GlitchText text="AI Blogs" />
                  </CardTitle>
                  <Badge className="neon-glow">AI Tool</Badge>
                </div>
                <CardDescription>
                  ChatGPT 3.5 blogs created through keywords
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/ai-blog-generation-interface.jpg"
                  alt="AI Blogs Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4 ascii-border"
                />
                <p className="text-muted-foreground mb-4">
                  Using OpenAI's GPT 3.5 API, I created a system that given a
                  keyword it will grab all the related keyword ideas from Google
                  Keyword Planner and then use those keywords to create blog
                  posts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">Google Keyword Planner</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
                <Button asChild className="w-full glitch-hover">
                  <Link href="https://brionfog.com" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* ASCII Art Divider */}
          <div className="mt-16 text-center">
            <AsciiArt art={asciiArts.code} className="text-xs" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            <GlitchText text="Latest Blog Posts" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/getting-started-with-ai"
                    className="hover:text-primary transition-colors"
                  >
                    <GlitchText text="Getting Started with AI Development" />
                  </Link>
                </CardTitle>
                <CardDescription>March 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A comprehensive guide to building your first AI application
                  using modern tools and frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/full-stack-best-practices"
                    className="hover:text-primary transition-colors"
                  >
                    <GlitchText text="Full Stack Development Best Practices" />
                  </Link>
                </CardTitle>
                <CardDescription>March 10, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Essential patterns and practices for building scalable
                  full-stack applications in 2024.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all glitch-hover scan-lines">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/computer-vision-projects"
                    className="hover:text-primary transition-colors"
                  >
                    <GlitchText text="Computer Vision Projects That Matter" />
                  </Link>
                </CardTitle>
                <CardDescription>March 5, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exploring real-world applications of computer vision and how
                  to get started with your own projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-mono text-2xl mb-4 text-primary terminal-cursor">
            <GlitchText text="</> Emil Sabri" />
          </div>
          <p className="text-muted-foreground mb-6">
            Building the future, one line of code at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://linkedin.com/in/emilsabri"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors glitch-hover"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/emilsabri"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors glitch-hover"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:emil@example.com"
              className="text-muted-foreground hover:text-primary transition-colors glitch-hover"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          {/* ASCII Art Footer */}
          <div className="mt-8 pt-8 border-t border-border">
            <AsciiArt art={asciiArts.rocket} className="text-xs mb-4" />
            <div className="text-sm text-muted-foreground font-mono terminal-cursor">
              {'ASCII_ART := "Made with ♥ and lots of ☕"'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
