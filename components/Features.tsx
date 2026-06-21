'use client'

export default function Features() {
  const features = [
    {
      title: '簡潔易用',
      description: '專注核心功能，避免過度複雜。',
      icon: '✨',
    },
    {
      title: '快速反應',
      description: '輕量級設計，快速加載和響應。',
      icon: '⚡',
    },
    {
      title: '完全開源',
      description: '代碼公開，可以自由查看和修改。',
      icon: '🔓',
    },
    {
      title: '跨設備適配',
      description: '在手機、平板和電腦上都能使用。',
      icon: '📱',
    },
    {
      title: '持續迭代',
      description: '根據反饋逐步改進功能。',
      icon: '🔄',
    },
    {
      title: '學習項目',
      description: '展示實際開發和設計的經驗。',
      icon: '📚',
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            為什麼選擇 <span className="gradient-text">我們</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            我們的專案以質量、創新和用戶滿意度為核心理念構建。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover group relative p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
