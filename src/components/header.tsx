import { Github, TreePalm } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export default function Header() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 56
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <div className="mr-4 flex items-center">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex items-center justify-center">
              <TreePalm className="h-6 w-6 text-primary" />
            </div>
            <span className="hidden font-bold sm:inline-block">
              shadcn/ui + TanStack Form
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, 'features')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </a>
            <a
              href="#anatomy"
              onClick={(e) => handleSmoothScroll(e, 'anatomy')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Anatomy
            </a>
            <a
              href="#installation"
              onClick={(e) => handleSmoothScroll(e, 'installation')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Installation
            </a>
            <a
              href="#usage"
              onClick={(e) => handleSmoothScroll(e, 'usage')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Usage
            </a>
            <a
              href="#architecture"
              onClick={(e) => handleSmoothScroll(e, 'architecture')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Architecture
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/felipestanzani/shadcn-tanstack-form"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
