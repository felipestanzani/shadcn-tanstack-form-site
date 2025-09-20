import { Download, ExternalLink, Zap } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
        <Badge variant="outline" className="mb-4">
          <Zap className="mr-1 h-3 w-3" />
          TanStack Form Integration
        </Badge>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-balance">
          shadcn/ui + TanStack Form
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl text-balance">
          A seamless integration of shadcn/ui Form components with TanStack
          Form, maintaining TanStack's core principles of developer experience
          and type safety.
        </p>
        <div className="flex gap-4 mt-6">
          <Button size="lg" asChild>
            <a href="#installation">
              <Download className="mr-2 h-4 w-4" />
              Get Started
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://shadcn.com/ui" target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              shadcn/ui
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://tanstack.com/form"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              TanStack Form
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
