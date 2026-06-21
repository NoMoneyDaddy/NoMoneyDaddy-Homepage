'use client'

const ADS = [
  {
    id: 1,
    title: '精選推薦',
    icon: '⭐',
    gradient: 'from-blue-600 via-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: '合作夥伴',
    icon: '🤝',
    gradient: 'from-violet-600 via-purple-500 to-pink-400',
  },
  {
    id: 3,
    title: '優質內容',
    icon: '✨',
    gradient: 'from-amber-600 via-orange-500 to-red-400',
  },
]

export default function AdSenseCarousel() {
  return (
    <div className="space-y-3">
      {ADS.map((ad) => (
        <div
          key={ad.id}
          className="group relative p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 hover:border-slate-600"
        >
          {/* 漸層背景 */}
          <div className={`absolute inset-0 bg-gradient-to-r ${ad.gradient} opacity-5 rounded-lg`} />

          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">{ad.icon}</div>
              <h3 className="text-lg font-bold text-white">{ad.title}</h3>
            </div>

            {/* AdSense 佔位符 */}
            <div className="w-full h-20 rounded-lg bg-slate-700/30 border border-slate-600/30 flex items-center justify-center">
              <p className="text-slate-400 text-xs">Google AdSense 廣告</p>
            </div>
          </div>
        </div>
      ))}
      <p className="text-slate-500 text-xs text-center pt-2">支持網站營運 ❤️</p>
    </div>
  )
}
