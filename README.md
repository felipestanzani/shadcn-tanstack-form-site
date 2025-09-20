# shadcn/ui + TanStack Form Website

A documentation and demo website showcasing the seamless integration of shadcn/ui Form components with TanStack Form, maintaining TanStack's core principles of developer experience and type safety.

## 🚀 Features

- **Live Documentation** - Interactive examples and comprehensive guides
- **Type-safe forms** - Full TypeScript support with type inference from form schemas and validation
- **TanStack Integration** - Leverages TanStack Form's powerful state management and reactive updates
- **shadcn/ui styling** - Beautiful, accessible components out of the box with consistent design system
- **Modern React** - Built with React 18, TypeScript, and Vite
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Theme Support** - Dark/light mode with system preference detection

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **TanStack Form** - Powerful form state management
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon toolkit

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Running the Website

1. **Clone the repository**

   ```bash
   git clone https://github.com/felipestanzani/shadcn-tanstack-form-site.git
   cd shadcn-tanstack-form-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Using the Integration in Your Project

To use the shadcn/ui + TanStack Form integration in your own project:

1. **Install shadcn/ui**

   ```bash
   npx shadcn@latest init
   ```

2. **Install TanStack Form**

   ```bash
   npm add @tanstack/react-form
   # or
   pnpm add @tanstack/react-form
   # or
   yarn add @tanstack/react-form
   ```

3. **Copy the form.tsx component** to your project `components/ui` folder

   - [Download from GitHub](https://github.com/felipestanzani/shadcn-tanstack-form/blob/main/src/components/ui/form.tsx)

4. **Copy the form-hook.tsx component** to your project `hooks` folder

   - [Download from GitHub](https://github.com/felipestanzani/shadcn-tanstack-form/blob/main/src/hooks/form-hook.tsx)

5. **Add shadcn/ui components** you need
   ```bash
   npx shadcn@latest add button input label checkbox textarea
   ```

### Development Commands

```bash
# Build for production
npm run build
# or
pnpm build
# or
yarn build

# Preview production build
npm run preview
# or
pnpm preview
# or
yarn preview
```

```tsx
import { useForm } from '@tanstack/react-form'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
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
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── hero-section.tsx    # Landing page hero
│   ├── features-section.tsx # Features showcase
│   ├── installation-section.tsx # Installation guide
│   ├── usage-section.tsx   # Usage examples
│   ├── architecture-section.tsx # Architecture overview
│   ├── simple-form-example.tsx # Form example
│   └── TanStackFormDocs.tsx # Main documentation component
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── styles/                 # Global styles
```

## 🎨 Theming

The project includes a theme provider that supports:

- Light mode
- Dark mode
- System preference detection
- Smooth transitions between themes

## 📚 Website Sections

This documentation website includes:

- **Hero Section** - Project overview and quick links
- **Features Section** - Key benefits and capabilities of the integration
- **Installation Section** - Step-by-step setup guide for using the integration
- **Usage Section** - Live code examples and patterns
- **Architecture Section** - Technical details and design decisions

## 🤝 Contributing

Contributions to this documentation website are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [shadcn/ui](https://shadcn.com/ui) - Beautiful, accessible UI components
- [TanStack Form](https://tanstack.com/form) - Powerful form state management
- [React](https://react.dev) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [TanStack](https://tanstack.com) for the powerful form library
