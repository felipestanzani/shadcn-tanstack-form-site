import * as React from 'react'
import { Button } from './ui/button'
import { Github } from 'lucide-react'

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <a
        href="https://github.com/felipestanzani/shadcn-tanstack-form"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="size-4" />
        <React.Suspense fallback={<span className="h-4 w-8" />}>
          <StarsCount />
        </React.Suspense>
      </a>
    </Button>
  )
}

export async function StarsCount() {
  const [stars, setStars] = React.useState(0)

  React.useEffect(() => {
    const fetchStars = async () => {
      await fetch(
        'https://api.github.com/repos/felipestanzani/shadcn-tanstack-form'
      )
        .then((res) => res.json())
        .then((data) => setStars(data.stargazers_count))
    }
    fetchStars()
  }, [])

  return (
    <span className="text-muted-foreground w-8 text-xs tabular-nums">
      {stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toLocaleString()}
    </span>
  )
}
