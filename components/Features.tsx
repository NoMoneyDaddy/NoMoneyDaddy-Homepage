'use client'

export default function Features() {
  const features = [
    {
      title: '直覺易用',
      description: '無需複雜學習，立即上手。',
      icon: '✨',
    },
    {
      title: '快速高效',
      description: '優化性能，快速加載和響應。',
      icon: '⚡',
    },
    {
      title: '可靠安全',
      description: '數據加密，隱私保護優先。',
      icon: '🔒',
    },
    {
      title: '全設備支持',
      description: '手機、平板、電腦無縫同步。',
      icon: '📱',
    },
    {
      title: '24/7 服務',
      description: '隨時隨地使用，不受限制。',
      icon: '⏰',
    },
    {
      title: '專業支持',
      description: '遇到問題？快速反應的團隊在這裡。',
      icon: '💬',
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            為什麼選擇 <span className="gradient-text">NoMoneyDaddy</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            專注於解決實際問題，以用戶體驗和可靠性為核心。
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
