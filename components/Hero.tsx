'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="section-container relative z-10">
        <div className="text-center animate-slideUp">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            🚀 為忙碌現代人打造
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
            NoMoneyDaddy
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              奶爸實驗室
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            三個實用工具，三種解決方案
          </p>

          <a
            href="#projects"
            className="btn-primary inline-flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            探索作品
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
