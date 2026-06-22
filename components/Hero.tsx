'use client'

import { PROGRESS } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-0 overflow-hidden"
    >
      {/* 背景漸變和裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse hidden sm:block" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse hidden sm:block" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* 左側：文案 */}
          <div className="animate-slideUp">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                🚀 解決現實問題的工具
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              NoMoneyDaddy<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                奶爸實驗室
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              為忙碌的現代人打造的實用應用
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              <span className="font-semibold">iWantPo：</span> Shopee 分潤人員的自動化行銷工具
              <br className="hidden md:block" />
              <span className="font-semibold">FamilyPlay：</span> 現代父母的 30 秒親子互動方案
              <br className="hidden md:block" />
              <span className="font-semibold">BingoKing：</span> 台灣彩券的智能輔助決策系統
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3"
              >
                查看作品
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3"
              >
                了解更多
              </a>
            </div>

            {/* 統計數據 */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
              <div className="border-l-4 border-blue-600 pl-3 sm:pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">3</p>
                <p className="text-xs sm:text-sm text-gray-600">個實用工具</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-3 sm:pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">✓</p>
                <p className="text-xs sm:text-sm text-gray-600">免費試用</p>
              </div>
              <div className="border-l-4 border-pink-600 pl-3 sm:pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">♾️</p>
                <p className="text-xs sm:text-sm text-gray-600">持續更新</p>
              </div>
            </div>
          </div>

          {/* 右側：視覺效果 */}
          <div className="hidden lg:block">
            <div className="relative h-96">
              {/* iWantPo 卡片 */}
              <div className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">iWantPo</h3>
                <p className="text-sm text-gray-600">自動化 Threads 發文平台</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: `${PROGRESS.iWantPo}%` }} />
                  </div>
                  <span className="text-xs text-gray-500">{PROGRESS.iWantPo}%</span>
                </div>
              </div>

              {/* FamilyPlay 卡片 */}
              <div className="absolute bottom-0 left-0 w-64 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">FamilyPlay</h3>
                <p className="text-sm text-gray-600">30秒親子互動遊戲</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 bg-purple-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: `${PROGRESS.FamilyPlay}%` }} />
                  </div>
                  <span className="text-xs text-gray-500">{PROGRESS.FamilyPlay}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
