import ProjectCarousel from '@/components/ProjectCarousel'
import AdSenseCarousel from '@/components/AdSenseCarousel'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="px-6 py-6 border-b border-slate-800/50 sticky top-0 z-40 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xl font-bold text-white">
              🚀
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              NoMoneyDaddy
            </h1>
          </div>
          <p className="text-slate-400 text-sm">為創業者打造的智能工具生態</p>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Projects */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-lg">📦</span> 精選專案
            </h2>
            <ProjectCarousel />
          </div>

          {/* Right: AdSense */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-lg">📢</span> 推薦內容
            </h2>
            <AdSenseCarousel />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-6 px-6 text-center text-slate-500 text-xs">
        <p>© 2024 NoMoneyDaddy 實驗室</p>
      </footer>
    </main>
  )
}
