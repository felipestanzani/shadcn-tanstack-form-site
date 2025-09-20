import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function InstallationSection() {
  return (
    <section
      id="installation"
      className="space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Installation
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-balance">
          Get up and running in minutes with our simple installation process.
        </p>
      </div>
      <div className="mx-auto max-w-[800px] px-4">
        <Tabs defaultValue="npm" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="npm" className="text-xs sm:text-sm">
              npm
            </TabsTrigger>
            <TabsTrigger value="pnpm" className="text-xs sm:text-sm">
              pnpm
            </TabsTrigger>
            <TabsTrigger value="yarn" className="text-xs sm:text-sm">
              yarn
            </TabsTrigger>
          </TabsList>
          <NpmTab />
          <PnpmTab />
          <YarnTab />
        </Tabs>
      </div>
    </section>
  )
}

function FixedSteps() {
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold mb-2">
          3. Copy the form.tsx component to your project components/ui folder
        </h3>
        <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
          <a
            href="https://github.com/felipestanzani/shadcn-tanstack-form/blob/main/src/components/ui/form.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="break-words"
          >
            Download it here
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">
          4. Copy the form-hook.tsx component to your project hooks folder
        </h3>
        <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
          <a
            href="https://github.com/felipestanzani/shadcn-tanstack-form/blob/main/src/hooks/form-hook.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="break-words"
          >
            Download it here
          </a>
        </div>
      </div>
    </>
  )
}

function NpmTab() {
  return (
    <TabsContent value="npm" className="space-y-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Install shadcn/ui</h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npx shadcn@latest init
            </pre>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            2. Install TanStack Form
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npm add @tanstack/react-form
            </pre>
          </div>
        </div>
        <FixedSteps />
        <div>
          <h3 className="text-lg font-semibold mb-2">
            5. Add the shadcn/ui components you want (button, input, label,
            checkbox, textarea...)
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npx shadcn@latest add button input label checkbox textarea
            </pre>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

export function PnpmTab() {
  return (
    <TabsContent value="pnpm" className="space-y-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Install shadcn/ui</h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npx shadcn@latest init
            </pre>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            2. Install TanStack Form
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              pnpm add @tanstack/react-form
            </pre>
          </div>
        </div>
        <FixedSteps />
        <div>
          <h3 className="text-lg font-semibold mb-2">
            5. Add the shadcn/ui components you want (button, input, label,
            checkbox, textarea...)
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npx shadcn@latest add button input label checkbox textarea
            </pre>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

export function YarnTab() {
  return (
    <TabsContent value="yarn" className="space-y-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Install shadcn/ui</h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npx shadcn@latest init
            </pre>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            2. Install TanStack Form
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              yarn add @tanstack/react-form
            </pre>
          </div>
        </div>
        <FixedSteps />
        <div>
          <h3 className="text-lg font-semibold mb-2">
            5. Add the shadcn/ui components you want (button, input, label,
            checkbox, textarea...)
          </h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              npx shadcn@latest add button input label checkbox textarea
            </pre>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
