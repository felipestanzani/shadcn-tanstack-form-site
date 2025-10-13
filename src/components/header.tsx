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

  const sections = [
    { id: 'features', label: 'Features' },
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'hierarchy', label: 'Hierarchy' },
    { id: 'installation', label: 'Installation' },
    { id: 'usage', label: 'Usage' },
    { id: 'architecture', label: 'Architecture' }
  ]

  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <div className="mr-4 flex items-center">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex items-center justify-center">
              <TreePalm className="size-6 text-primary" />
            </div>
            <span className="hidden font-bold sm:inline-block">
              shadcn/ui + TanStack Form
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium *:transition-colors *:hover:text-foreground/60">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleSmoothScroll(e, section.id)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/felipestanzani/shadcn-tanstack-form"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
                <img
                  alt="GitHub Repo stars"
                  src="https://img.shields.io/github/stars/felipestanzani/shadcn-tanstack-form?style=plastic&labelColor=%23000"
                />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
