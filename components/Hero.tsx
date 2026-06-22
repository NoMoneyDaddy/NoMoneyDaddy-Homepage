'use client'

import { PROGRESS } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-12 md:pb-0 overflow-hidden"
    >
      {/* 背景漸變和裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse hidden sm:block" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse hidden sm:block" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* 左側：文案 - 移動優先設計 */}
          <div className="animate-slideUp px-2 sm:px-0">
            {/* 標籤 */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                🎯 為忙碌的創業者而生
              </span>
            </div>

            {/* 主標題 - 強化斷字控制 */}
            <h1 className="heading-safe text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              <span className="block sm:inline">打造您的</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">智能工具生態</span>
            </h1>

            {/* 副標題 */}
            <p className="heading-safe text-base sm:text-lg md:text-xl text-gray-600 mb-5 sm:mb-6 leading-relaxed">
              3個精心設計的工具，解決您在社群、親子和投資決策上的實際痛點
            </p>

            {/* 快速優勢列表 */}
            <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                <span className="heading-safe text-sm sm:text-base text-gray-700">無需複雜設置，立即開始使用</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                <span className="heading-safe text-sm sm:text-base text-gray-700">三大工具免費試用，無須信用卡</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                <span className="heading-safe text-sm sm:text-base text-gray-700">每月更新新功能，根據反饋持續優化</span>
              </div>
            </div>

            {/* 特別優惠 */}
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-xs sm:text-sm font-bold text-yellow-800">⚡ 本月特價</p>
              <p className="heading-safe text-sm sm:text-base font-semibold text-yellow-900">立即試用三大工具，完全免費</p>
            </div>

            {/* CTA 按鈕 - 移動優先 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all min-h-[48px] sm:min-h-[44px] px-4 sm:px-6 py-3 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto"
              >
                探索三大工具
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[44px] px-4 sm:px-6 py-3 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto"
              >
                查看功能特色
              </a>
            </div>

            {/* 統計數據 - 增強行動版本 */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
              <div className="border-l-4 border-blue-600 pl-3 sm:pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">3</p>
                <p className="heading-safe text-xs sm:text-sm text-gray-600">項目準備好</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-3 sm:pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">0</p>
                <p className="heading-safe text-xs sm:text-sm text-gray-600">前置設置成本</p>
              </div>
              <div className="border-l-4 border-pink-600 pl-3 sm:pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">♾️</p>
                <p className="heading-safe text-xs sm:text-sm text-gray-600">持續更新</p>
              </div>
            </div>
          </div>

          {/* 右側：視覺效果 - 桌面版本 */}
          <div className="hidden lg:block">
            <div className="relative h-96">
              {/* iWantPo 卡片 */}
              <div className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="heading-safe text-lg font-bold text-gray-900 mb-2">iWantPo</h3>
                <p className="heading-safe text-sm text-gray-600">自動化行銷工具</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: `${PROGRESS.iWantPo}%` }} />
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">{PROGRESS.iWantPo}%</span>
                </div>
              </div>

              {/* FamilyPlay 卡片 */}
              <div className="absolute bottom-0 left-0 w-64 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="heading-safe text-lg font-bold text-gray-900 mb-2">FamilyPlay</h3>
                <p className="heading-safe text-sm text-gray-600">親子互動方案</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 bg-purple-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: `${PROGRESS.FamilyPlay}%` }} />
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">{PROGRESS.FamilyPlay}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
