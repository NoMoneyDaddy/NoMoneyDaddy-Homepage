import ProjectCarousel from '@/components/ProjectCarousel'
import AdSenseCarousel from '@/components/AdSenseCarousel'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-900 overflow-hidden">
      <ProjectCarousel />
      <AdSenseCarousel />
    </main>
  )
}
