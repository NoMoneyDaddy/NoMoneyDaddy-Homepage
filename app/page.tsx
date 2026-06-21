import ProjectCarousel from '@/components/ProjectCarousel'
import AdSenseCarousel from '@/components/AdSenseCarousel'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-auto">
      {/* Header */}
      <header className="px-6 py-8 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            NoMoneyDaddy 實驗室
          </h1>
          <p className="text-slate-400 mt-2 text-lg">為創業者打造的智能工具生態</p>
        </div>
      </header>

      {/* Two-Column Layout */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Projects */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span> 精選專案
            </h2>
            <div className="flex-1">
              <ProjectCarousel />
            </div>
          </div>

          {/* Right: AdSense */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span> 推薦內容
            </h2>
            <div className="flex-1">
              <AdSenseCarousel />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
