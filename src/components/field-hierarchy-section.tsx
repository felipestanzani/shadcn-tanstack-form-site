import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function FieldHierarchySection() {
  return (
    <section
      id="anatomy"
      className="space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Field Hierarchy
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-balance">
          Optionally, you can use the field hierarchy to build a form. In
          example, you can simply use <code>field.Label</code>, instead of{' '}
          <code>FieldLabel</code>.
        </p>
      </div>
      <div className="mx-auto max-w-[800px] px-4">
        <Card>
          <CardHeader>
            <CardTitle>Field Hierarchy</CardTitle>
            <CardDescription>
              How to build a form using the field hierarchy.
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
    <form.AppField name="...">
      {(field) => (
        <field.Field>
          <field.Label>...</field.Label>
          <field.Control>
            { /* Your form field */}
          </field.Control>
          <field.Description>
            Optional description
          </field.Description>
          <field.Error />
        </field.Field>
      )}
    </form.AppField>`}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
