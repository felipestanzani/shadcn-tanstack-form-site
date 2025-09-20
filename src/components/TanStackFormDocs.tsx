import InstallationSection from '@/components/installation-section'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import UsageSection from '@/components/usage-section'
import ArchitectureSection from '@/components/architecture-section'

export default function TanStackFormDocs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex flex-col justify-center">
        <HeroSection />
        <FeaturesSection />
        <InstallationSection />
        <UsageSection />
        <ArchitectureSection />
      </div>
      <Footer />
    </div>
  )
}
