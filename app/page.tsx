import ProjectCarousel from '@/components/ProjectCarousel'
import AdSenseCarousel from '@/components/AdSenseCarousel'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="px-6 py-8 border-b border-slate-800/50 sticky top-0 z-40 bg-slate-950/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🚀</span>
            <h1 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              NoMoneyDaddy
            </h1>
            <span className="text-3xl text-cyan-400">實驗室</span>
          </div>
          <p className="text-slate-400 text-sm ml-1">為創業者打造的智能工具生態</p>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative px-6 py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 pb-6 border-b border-dashed border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-1">✨ 精選專案</h2>
            <p className="text-slate-400 text-sm">一站式創業工具解決方案</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Projects */}
          <div>
            <ProjectCarousel />
          </div>

          {/* Right: AdSense */}
          <div>
            <div className="pb-6 border-b border-dashed border-slate-700/50 mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">📢 推薦內容</h2>
              <p className="text-slate-400 text-sm">優質合作與精選推薦</p>
            </div>
            <AdSenseCarousel />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-4 px-6 text-center text-slate-500 text-xs mt-6">
        <p>© 2024 NoMoneyDaddy 實驗室 • 為創業者打造的智能工具生態</p>
      </footer>
    </main>
  )
}
