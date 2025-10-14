import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodeCurtain, { AfterCode, BeforeCode } from './code-curtain'

export default function AnatomySection() {
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
        <div className="rounded-lg overflow-hidden">
          <Card>
            <CardHeader>
              <CardTitle>Anatomy of the form</CardTitle>
              <CardDescription>
                How to build a form using the shadcn/ui TanStack Form
                components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeCurtain>
                <BeforeCode>
                  {`<form.AppForm>
  <Form className="..."
    onSubmit={(e) => {
      e.preventDefault()
      form.handleSubmit()
    }}
  >
    <form.AppField name="..."> {/* You can set field validators here */}
      {(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
        return (
          <Field data-invalid={isInvalid}>
            <FieldLabel htmlFor={field.name}>...</FieldLabel>
            <FieldControl>
              { /* Your form field */}
            </FieldControl>
            <FieldDescription>
              Optional description
            </FieldDescription>
            {isInvalid && <FieldError errors={field.state.meta.errors} />
            /* Validation error must be controlled manually */}
          </Field>
        )
      }}
    </form.AppField>

    {/* This TanStack Form element allows you to listen to the form state */}
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}> 
      {([canSubmit, isSubmitting]) => (
        <Button type="submit" disabled={!canSubmit}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      )}
    </form.Subscribe>
  </Form>
</form.AppForm>`}
                </BeforeCode>
                <AfterCode>
                  {`<form.AppForm>
  <Form className="...">


    {/* You don't have to explicity control onSubmit, but you can. */}


    <form.AppField name="..."> {/* You can set field validators here */}
      {(field) => (

          {/* Error handling is done automatically */}
      
          <Field>
            <FieldLabel>...</FieldLabel>
            <FieldControl>
              { /* Your form field */}
            </FieldControl>
            <FieldDescription>
              Optional description
            </FieldDescription>
            <FieldError /> 
            {/* Validation error message is controlled automatically */}
          </Field>

      )}
    </form.AppField>

    {/* This TanStack Form element allows you to listen to the form state */}
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}> 
      {([canSubmit, isSubmitting]) => (
        <Button type="submit" disabled={!canSubmit}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      )}
    </form.Subscribe>
  </Form>
</form.AppForm>`}
                </AfterCode>
              </CodeCurtain>
            </CardContent>
          </Card>
        </div>
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
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldControl>
              <Input
                type="email"
                placeholder="Enter your email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </FieldControl>
            <FieldDescription>
              We'll never share your email with anyone else.
            </FieldDescription>
            <FieldError />
          </Field>
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
