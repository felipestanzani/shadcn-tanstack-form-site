import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  Children,
  ReactElement
} from 'react'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { ChevronsLeftRightIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export default function CodeCurtain({
  children
}: {
  children: React.ReactNode
}) {
  const childrenArray = Children.toArray(children)
  const beforeCodeChild = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === BeforeCode
  ) as ReactElement
  const afterCodeChild = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === AfterCode
  ) as ReactElement

  const beforeCode = beforeCodeChild
  const afterCode = afterCodeChild
  const [dividerPosition, setDividerPosition] = useState(100)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [clicked, setClicked] = useState(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const newPosition = (x / rect.width) * 100
    const clampedPosition = Math.max(0, Math.min(100, newPosition))
    setDividerPosition(clampedPosition)
  }, [])

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) {
        handleMove(event.clientX)
      }
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (isDragging) {
        handleMove(event.touches[0].clientX)
      }
    },
    [isDragging, handleMove]
  )

  const startDragging = () => {
    setClicked(true)
    setIsDragging(true)
  }
  const stopDragging = () => setIsDragging(false)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as any)
    window.addEventListener('mouseup', stopDragging)
    window.addEventListener('touchmove', handleTouchMove as any)
    window.addEventListener('touchend', stopDragging)

    document.body.style.userSelect = isDragging ? 'none' : ''

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any)
      window.removeEventListener('mouseup', stopDragging)
      window.removeEventListener('touchmove', handleTouchMove as any)
      window.removeEventListener('touchend', stopDragging)
      document.body.style.userSelect = ''
    }
  }, [handleMouseMove, handleTouchMove, isDragging])

  const handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setClicked(true)
    setDividerPosition((pos) => (pos > 50 ? 0 : 100))
  }

  const transitionClass = isDragging
    ? ''
    : 'transition-all duration-3000 ease-in-out'

  return (
    <div
      ref={containerRef}
      className="relative bg-zinc-950 rounded-xl font-mono text-sm select-none cursor-ew-resize overflow-hidden"
      onMouseDown={startDragging}
      onTouchStart={startDragging}
    >
      {beforeCode}

      <div
        className={`absolute inset-0 w-full h-full bg-zinc-950 ${transitionClass}`}
        style={{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }}
      >
        {afterCode}
      </div>

      <div
        className={`absolute top-0 bottom-0 w-1 bg-blue-500/50 pointer-events-none ${transitionClass}`}
        style={{
          left: `${dividerPosition}%`,
          transform: 'translateX(-50%)'
        }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-4 size-9 rounded-full bg-blue-500/10 flex items-center justify-center backdrop-blur-sm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleToggleClick}
                  onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) =>
                    e.stopPropagation()
                  }
                  onTouchStart={(e) => e.stopPropagation()}
                  className={cn(
                    'size-7 bg-zinc-800 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-300 hover:bg-zinc-700 transition-colors pointer-events-auto',
                    !clicked && 'animate-ping'
                  )}
                  aria-label="Toggle code view"
                >
                  <ChevronsLeftRightIcon className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click or drag me!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

function CodeBlock({ children }: { children: string }) {
  return (
    <SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      customStyle={{
        margin: 0,
        borderRadius: '0.75rem',
        fontSize: '0.875rem'
      }}
      showLineNumbers={true}
      wrapLines={true}
      wrapLongLines={true}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export function BeforeCode({ children }: { children: string }) {
  return (
    <>
      <div className="absolute w-16 top-2 right-2 text-white bg-amber-500 text-xs text-center font-sans font-medium px-3 py-1.5 rounded-xl">
        Before
      </div>
      <CodeBlock>{children}</CodeBlock>
    </>
  )
}

export function AfterCode({ children }: { children: string }) {
  return (
    <>
      <div className="absolute w-16 top-2 right-2 text-white bg-green-500 text-xs text-center font-sans font-medium px-3 py-1.5 rounded-xl">
        After
      </div>
      <CodeBlock>{children}</CodeBlock>
    </>
  )
}
