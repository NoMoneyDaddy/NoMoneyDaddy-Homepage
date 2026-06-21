'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="section-container relative z-10 text-center animate-slideUp">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
          我的網頁作品
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          一些實驗和練習專案
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="btn-primary inline-flex items-center justify-center"
          >
            查看專案
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center"
          >
            聯絡我們
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">2</p>
            <p className="text-gray-600">個專案</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">MVP</p>
            <p className="text-gray-600">版本階段</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">開源</p>
            <p className="text-gray-600">源碼公開</p>
          </div>
        </div>
      </div>
    </section>
  )
}
