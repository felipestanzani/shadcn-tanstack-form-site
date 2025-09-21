import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function UsageSection() {
  return (
    <section id="anatomy" className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Anatomy
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-balance">
          A solid structure for building type-safe forms with built-in
          validation, state management, and design consistency.
        </p>
      </div>
      <div className="mx-auto max-w-[800px] px-4">
        <Card>
          <CardHeader>
            <CardTitle>Anatomy of the Form</CardTitle>
            <CardDescription>
              How to build a form using the shadcn/ui TanStack Form components.
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
                {`<form.AppForm>
  <Form className="...">
    <form.AppField name="..."> {/* You can set field validators here */}
      {(field) => (
        <FormItem>
          <FormLabel>...</FormLabel>
          <FormControl>
            { /* Your form field */}
          </FormControl>
          <FormDescription>
            Optional description
          </FormDescription>
          <FormMessage /> {/* Validation error message */}
        </FormItem>
      )}
    </form.AppField>

    <form.Subscribe
     selector={(state) => [state.canSubmit, state.isSubmitting]}
    > {/* This element allows you to listen to the form state */}
      {([canSubmit, isSubmitting]) => (
        {/* Submit button */}
      )}
    </form.Subscribe>
  </Form>
</form.AppForm>`}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mx-auto max-w-[800px] px-4">
        <Card>
          <CardHeader>
            <CardTitle>Sample Form</CardTitle>
            <CardDescription>Sample form with Zod validation.</CardDescription>
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
                {`const userSchema = z.object({
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
                onBlur={field.handleBlur}
              />
            </FormControl>
            <FormDescription>
              We'll never share your email with anyone else.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      </form.AppField>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
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
