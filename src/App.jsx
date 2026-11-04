import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import Features from './components/Features'
import BeforeAfter from './components/BeforeAfter'
import HowIWork from './components/HowIWork'
import Pricing from './components/Pricing'
import AboutKitia from './components/AboutKitia'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <BeforeAfter />
        <HowIWork />
        <Pricing />
        <AboutKitia />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
