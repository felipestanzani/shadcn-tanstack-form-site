import { useForm } from '@tanstack/react-form'
import {
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SimpleFormExample() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value)
      alert(`Hello ${value.firstName} ${value.lastName}!`)
    }
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-4"
    >
      <form.Field
        name="firstName"
        validators={{
          onChange: ({ value }: { value: string }) =>
            !value
              ? 'A first name is required'
              : value.length < 2
              ? 'First name must be at least 2 characters'
              : undefined
        }}
      >
        {(field) => (
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <FieldControl>
              <Input
                placeholder="Enter your first name"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </FieldControl>
            <FieldDescription>
              This is your public display first name.
            </FieldDescription>
            <FieldError />
          </Field>
        )}
      </form.Field>

      <form.Field
        name="lastName"
        validators={{
          onChange: ({ value }: { value: string }) =>
            !value
              ? 'A last name is required'
              : value.length < 2
              ? 'Last name must be at least 2 characters'
              : undefined
        }}
      >
        {(field) => (
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <FieldControl>
              <Input
                placeholder="Enter your last name"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </FieldControl>
            <FieldDescription>
              This is your public display last name.
            </FieldDescription>
            <FieldError />
          </Field>
        )}
      </form.Field>

      <form.Field name="email">
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
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        )}
      </form.Subscribe>
    </form>
  )
}
