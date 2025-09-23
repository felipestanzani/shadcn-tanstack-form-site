import { Download, ExternalLink, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
        <div className="mb-6">
          <div className="size-48 md:size-96 rounded-full overflow-hidden bg-primary p-1 md:p-3 mx-auto">
            <img
              src="/tanstack.png"
              alt="TanStack Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <Badge variant="outline" className="mb-4">
          <Zap className="mr-1 size-3" />
          TanStack Form Integration
        </Badge>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-balance">
          shadcn/ui + TanStack Form
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl text-balance">
          A shadcn/ui component that seamless integrates with TanStack Form,
          maintaining its core principles of developer experience and type
          safety.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 sm:p-0">
          <Button size="lg" asChild className="sm:w-auto">
            <a href="#installation">
              <Download className="mr-2 size-4" />
              Get Started
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild className="sm:w-auto">
            <a href="https://shadcn.com/ui" target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 size-4" />
              shadcn/ui
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto"
          >
            <a
              href="https://tanstack.com/form"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="mr-2 size-4" />
              TanStack Form
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
