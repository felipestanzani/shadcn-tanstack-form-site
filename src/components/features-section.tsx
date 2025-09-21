import { CheckCircle, Code, Zap } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Features
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-balance">
          Everything you need to build type-safe, accessible forms with the best
          developer experience.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4">
        <Card>
          <CardHeader>
            <CheckCircle className="h-8 w-8 text-primary" />
            <CardTitle>Type-safe forms</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Full TypeScript support with type inference from form schemas and
              validation.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 text-primary" />
            <CardTitle>TanStack Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Leverages TanStack Form's powerful state management, validation,
              and reactive updates.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Code className="h-8 w-8 text-primary" />
            <CardTitle>shadcn/ui styling</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Beautiful, accessible components out of the box with consistent
              design system.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
