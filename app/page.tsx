import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AdSenseCarousel from '@/components/AdSenseCarousel'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <AdSenseCarousel />
      <Projects />
      <Footer />
    </main>
  )
}
