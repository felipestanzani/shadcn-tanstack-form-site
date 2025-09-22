import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function UsageSection() {
  return (
    <section id="usage" className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Usage
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-balance">
          Simple, intuitive API that combines the best of both libraries.
        </p>
      </div>
      <div className="mx-auto max-w-[800px] px-4">
        <Card>
          <CardHeader>
            <CardTitle>Create a form schema</CardTitle>
            <CardDescription>
              You can optionally create a form schema to validate the form data,
              create a custom validator, or set validators for each field.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
                showLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
              >
                {`import { z } from "zod"

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
})`}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-[800px] px-4">
        <Card>
          <CardHeader>
            <CardTitle>Define the form properties</CardTitle>
            <CardDescription>
              You can define the form properties such as default values,
              validators, and onSubmit handler. For more details, check the
              TanStack Form documentation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
                showLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
              >
                {`import { z } from "zod"
import { useAppForm } from "@/hooks/form-hook"

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
})

const form = useAppForm({
  defaultValues: {
    email: "",
  },
  validators: {
    onChange: userSchema,
  },
  onSubmit: async ({ value }) => {
    alert(\`Hello \${value.email}!\`)
  },
})`}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-[800px] px-4">
        <Card>
          <CardHeader>
            <CardTitle>Create the form</CardTitle>
            <CardDescription>
              You can create the form using the {' <form.AppForm> '} and the
              {' <Form> '}
              wrapper component. For more details, check the{' '}
              <a
                href="https://tanstack.com/form/latest/docs/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                TanStack Form documentation.
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
                showLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
              >
                {`import { z } from "zod"
import { useAppForm } from "@/hooks/form-hook"
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
})

const form = useAppForm({
  defaultValues: {
    validators: {
      onChange: userSchema,
    },
    email: "",
  },
  onSubmit: async ({ value }) => {
    alert(\`Hello \${value.email}!\`)
  },
})

return (
  <form.AppForm>
    <Form className="space-y-4">
        <form.AppField name="email">
        {(field) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Enter your email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </FormControl>
            <FormDescription>
              We'll never share your email with anyone else.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      </form.AppField>

      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        )}
      </form.Subscribe>
    </Form>
  </form.AppForm>
)`}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
