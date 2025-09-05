import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlitchText } from "@/components/glitch-text"
import { MatrixBackground } from "@/components/matrix-background"
import { AsciiArt, asciiArts } from "@/components/ascii-art"
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import Link from "next/link";

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
                Software Engineer designing, developing, building a better world
                through code.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  asChild
                  className="glitch-effect hover:animate-pulse neon-glow"
                >
                  <Link
                    href="https://www.linkedin.com/in/esabri/"
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
              </div>
              <div className="space-y-2">
                <div className="text-muted-foreground">
                  emil.sabri@gmail.com
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Las Vegas, NV
                </div>
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
                projects in computer vision, full stack, mobile apps, and dev
                ops. My passion belongs to taming complicated novel technical
                projects into a work of simplicity.
              </p>
              <p className="mb-6">
                Working on Foodie Friend, a barcode scanning app that will
                notify users of potential red flag ingredients such as artifical
                dyes, flavors, seed oils etc with the ability for users to
                create their own red flags for ingredients that personally
                affect them.
              </p>
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
            <ExperienceCard
              title="Senior Software Engineer"
              company="Free Thinkers Consulting"
              startYear={2023}
              endYear="Present"
              isCurrent={true}
              experiences={[
                "Built a custom quoting process within Salesforce replacing our client's current SaaS product that was orginally expesnsive and slow to use. Includes previews of what the quote page looks like, email sending, scheduled reminders, and a live history feature to allow the sales team to see where the user's at in the quote process",
                "Developed an intelligent trip management tool utilzing drag and drop functionality to allow coaches to place athletes into their respective requested room sizes with an automatic CSV export feature that hotels require",
                "Created a bespoke loan servicing application within the Salesforce platform for one of our clients to improve their loan processing system.",
                "I tend to design, develop, write docs, and lead projects with the necessary requirements that stakeholders might not explciitly say but need for their business.",
              ]}
            />

            <ExperienceCard
              title="Software Engineer - Contract"
              company="Amazon"
              startYear={2020}
              endYear={2022}
              experiences={[
                "Resolved 100+ security vulnerabilities from team backlog, reducing security risk exposure and ensuring compliance requirements. Executed comprehensive remediation including dependency updates, IAM permission upgrades, and AWS architecture overhauls.",
                "I took on the team’s DevOps responsibilities of developing and maintaining our CI/CD pipelines using AWS CDK (infrastructure as code tool) to reduce tribal knowledge.",
              ]}
            />

            <ExperienceCard
              title="Software Engineer"
              company="Centauri"
              startYear={2020}
              endYear={2022}
              isCurrent={true}
              experiences={[
                "Developed a full stack application in agile pair programming style for a project mission dashboard allowing officers and top secret cleared individuals to manage SpaceForce related missions such as satellite launches.",
                "Led development of computer vision applications using Python and OpenCV",
                "Refactored a computer vision project written from python over to C++ using intel's image processing libaries resulting in immense speed gains.",
              ]}
            />
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
            <ProjectCard
              title="PreJourney"
              description="SaaS offering Midjourney through an API"
              imageSrc="/pj-screenshot.png"
              imageAlt="PreJourney Dashboard"
              content="Built this for my AI lootbox merch store. Needed a way to programmatically create images for the lootboxes and as of now Midjourney currently has the best generative art."
              technologies={["SvelteKit", "TailwindCSS", "AWS API Gateway"]}
              badgeText="SaaS"
            />

            <ProjectCard
              title="AI Blogs"
              description="ChatGPT 3.5 blogs created through keywords"
              imageSrc="/brianfog-screenshot.png"
              imageAlt="AI Blogs Interface"
              content="Using OpenAI's GPT 3.5 API, I created a system that given a keyword it will grab all the related keyword ideas from Google Keyword Planner and then use those keywords to create blog posts."
              technologies={["OpenAI API", "Google Keyword Planner", "Python"]}
              badgeText="AI Tool"
            />

            <ProjectCard
              title="Golang Websocket server"
              description="Built a custom websocket implementation in Golang from reading The Web Socket Protocol RFC-6455"
              content="Built a custom websocket implementation in Golang from reading The Web Socket Protocol RFC-6455."
              technologies={["Golang"]}
              badgeText="Websockets"
            />
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
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-primary mb-4 font-mono terminal-cursor">
                <GlitchText text="COMING SOON" />
              </div>
              <p className="text-muted-foreground text-lg">
                New blog posts are being crafted in the digital realm...
              </p>
            </div>

            {/* Future blog cards - uncomment when ready */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <BlogCard
                title="Getting Started with AI Development"
                slug="getting-started-with-ai"
                date="March 15, 2024"
                description="A comprehensive guide to building your first AI application using modern tools and frameworks."
              />
              <BlogCard
                title="Full Stack Development Best Practices"
                slug="full-stack-best-practices"
                date="March 10, 2024"
                description="Essential patterns and practices for building scalable full-stack applications in 2024."
              />
              <BlogCard
                title="Computer Vision Projects That Matter"
                slug="computer-vision-projects"
                date="March 5, 2024"
                description="Exploring real-world applications of computer vision and how to get started with your own projects."
              />
            </div> */}
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
              href="https://www.linkedin.com/in/esabri/"
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
          </div>

          {/* ASCII Art Footer */}
          <div className="mt-8 pt-8 border-t border-border">
            <AsciiArt art={asciiArts.rocket} className="text-xs mb-4" />
            <div className="text-sm text-muted-foreground font-mono terminal-cursor">
              {"Made with ♥ and lots of ☕"}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
