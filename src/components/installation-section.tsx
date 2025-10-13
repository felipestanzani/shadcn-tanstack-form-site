import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function InstallationSection() {
  return (
    <section id="installation" className="space-y-6 py-8 md:py-12 lg:py-24">
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
          <InstallationSteps manager="npm" install="npm install" dlx="npx" />
          <InstallationSteps manager="pnpm" install="pnpm add" dlx="pnpm dlx" />
          <InstallationSteps manager="yarn" install="yarn add" dlx="npx" />
        </Tabs>
        <p className="text-sm text-muted-foreground pt-4">
          You can also download the components from the project{' '}
          <a
            href="https://github.com/felipestanzani/shadcn-tanstack-form"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub repository
          </a>
        </p>
      </div>
    </section>
  )
}

function Step({
  managerCode,
  title,
  command
}: {
  managerCode: string
  title: string
  command: string
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="bg-muted p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
        <pre className="whitespace-pre-wrap break-words">
          {managerCode + ' ' + command}
        </pre>
      </div>
    </div>
  )
}

const steps = [
  {
    managerType: 'dlx',
    title: '1. Install shadcn/ui',
    command: 'shadcn@latest init'
  },
  {
    managerType: 'install',
    title: '2. Install TanStack Form',
    command: '@tanstack/react-form'
  },
  {
    managerType: 'dlx',
    title:
      '3. Add the shadcn/ui components you want. Field component is required.',
    command: 'shadcn@latest add field button input label checkbox textarea'
  },
  {
    managerType: 'dlx',
    title: '4. Add the shadcn-tanstack-form components to your project',
    command:
      'shadcn@latest add https://shadcn-tanstack-form.felipestanzani.com/r/shadcn-tanstack-form.json'
  }
] as const

function InstallationSteps({
  manager,
  install,
  dlx
}: {
  manager: string
  install: string
  dlx: string
}) {
  return (
    <TabsContent value={manager} className="space-y-4">
      {steps.map((step) => (
        <Step
          key={step.title}
          managerCode={step.managerType === 'dlx' ? dlx : install}
          title={step.title}
          command={step.command}
        />
      ))}
    </TabsContent>
  )
}
