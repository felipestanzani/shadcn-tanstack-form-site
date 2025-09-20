import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'

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
      <div className="mx-auto max-w-[800px]">
        <Card>
          <CardHeader>
            <CardTitle>Basic Form Hook</CardTitle>
            <CardDescription>
              Create a custom hook that integrates TanStack Form with shadcn/ui
              components.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`const form = useAppForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value)
      alert(\`Hello \${value.firstName} \${value.lastName}!\`)
    },
  })

  return (
    <form.AppForm>
      <Form className="space-y-4">
        <form.AppField
          name="firstName"
          validators={{
            onChange: ({ value }: { value: string }) =>
              !value
                ? "A first name is required"
                : value.length < 2
                  ? "First name must be at least 2 characters"
                  : undefined,
          }}
        >
          {(field) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display first name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        </form.AppField>

        <form.AppField
          name="lastName"
          validators={{
            onChange: ({ value }: { value: string }) =>
              !value
                ? "A last name is required"
                : value.length < 2
                  ? "Last name must be at least 2 characters"
                  : undefined,
          }}
        >
          {(field) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display last name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        </form.AppField>

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
  )`}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
