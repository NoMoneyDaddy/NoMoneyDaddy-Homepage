import ProjectCarousel from '@/components/ProjectCarousel'
import AdSenseCarousel from '@/components/AdSenseCarousel'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-40 px-6 py-8 border-b border-slate-800/50 sticky top-0 bg-slate-950/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl">🚀</span>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
              NoMoneyDaddy
            </h1>
            <span className="text-3xl sm:text-4xl font-black text-cyan-400">實</span>
            <span className="text-3xl sm:text-4xl font-black text-slate-400">驗</span>
            <span className="text-3xl sm:text-4xl font-black text-cyan-400">室</span>
          </div>
          <p className="text-slate-400 text-sm font-medium tracking-wide">為創業者打造的智能工具生態</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <div className="mb-12">
            <div className="inline-block mb-4">
              <div className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest">
                ✨ 創業工具套件
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 max-w-3xl">
              一個平台<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">解決多個問題</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              從社群營銷到親子互動，再到數據輔助決策。NoMoneyDaddy 為每位創業者提供智能化解決方案。
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Projects */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">📦 精選工具</h3>
                <p className="text-slate-400 text-sm">經過驗證的創業利器</p>
              </div>
              <ProjectCarousel />
            </div>

            {/* Right: AdSense */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">📢 推薦內容</h3>
                <p className="text-slate-400 text-sm">優質資源和合作機會</p>
              </div>
              <AdSenseCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-500 text-sm mb-3">© 2024 NoMoneyDaddy 實驗室</p>
          <p className="text-slate-600 text-xs">為解決現實問題而生的工具生態 • 點子 × 行動 × 結果</p>
        </div>
      </footer>
    </main>
  )
}
