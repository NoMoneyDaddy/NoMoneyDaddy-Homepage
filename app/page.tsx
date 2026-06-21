import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import GoogleAds from '@/components/GoogleAds'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <GoogleAds />
      <Projects />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
