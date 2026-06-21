'use client'

export default function Features() {
  const features = [
    {
      title: '直覺易用',
      description: '無需複雜學習，30秒快速上手。設計簡潔專注，避免過度功能。',
      icon: '✨',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: '快速高效',
      description: '輕量級設計，快速加載和響應。優化每一個互動，提升用戶體驗。',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      title: '可靠安全',
      description: '數據加密，隱私保護優先。您的信息安全是我們的首要責任。',
      icon: '🔒',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: '全設備支持',
      description: '手機、平板、電腦完美適配。無論何時何地，都能無縫使用。',
      icon: '📱',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: '24/7 可用',
      description: '隨時隨地使用，無需安裝複雜軟體。在線應用，即時訪問。',
      icon: '🌙',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: '持續更新',
      description: '根據用戶反饋不斷改進。每月新功能，每周性能優化。',
      icon: '🚀',
      color: 'from-red-500 to-pink-600',
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="section-container relative z-10">
        {/* 標題 */}
        <div className="text-center mb-16 animate-slideUp">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            💪 為什麼選擇我們
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            構建在實際需求之上的<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> 產品優勢</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            每個特色都是為了解決您的實際痛點而設計
          </p>
        </div>

        {/* 特色網格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl"
            >
              {/* 背景漸變 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* 頂部裝飾條 */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

              {/* 內容 */}
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* 底部箭頭 */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  了解更多
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">準備好體驗差異了嗎？</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            立即開始免費試用
          </a>
        </div>
      </div>
    </section>
  )
}
