import { ThemeProvider } from '@/components/theme-provider'
import TanStackFormDocs from '@/components/TanStackFormDocs'

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TanStackFormDocs />
    </ThemeProvider>
  )
}

export default App
