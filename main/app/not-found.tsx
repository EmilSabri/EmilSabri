import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="font-mono text-6xl text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* ASCII Art */}
        <div className="font-mono text-muted-foreground text-sm my-8">
          <pre className="inline-block">
            {`    ╔══════════════════════════════════════╗
    ║  Oops! Nothing here...               ║
    ║  ¯\\_(ツ)_/¯                          ║
    ╚══════════════════════════════════════╝`}
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">View Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
