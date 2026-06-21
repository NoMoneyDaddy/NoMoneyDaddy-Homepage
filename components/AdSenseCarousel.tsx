'use client'

const ADS = [
  {
    id: 1,
    title: '精選推薦',
    icon: '⭐',
    gradient: 'from-blue-600 via-blue-500 to-cyan-400',
    icon_bg: 'from-blue-600 to-blue-400',
  },
  {
    id: 2,
    title: '合作夥伴',
    icon: '🤝',
    gradient: 'from-violet-600 via-purple-500 to-pink-400',
    icon_bg: 'from-violet-600 to-pink-400',
  },
  {
    id: 3,
    title: '優質內容',
    icon: '✨',
    gradient: 'from-amber-600 via-orange-500 to-red-400',
    icon_bg: 'from-amber-600 to-orange-400',
  },
]

export default function AdSenseCarousel() {
  return (
    <div className="space-y-4">
      {ADS.map((ad) => (
        <div
          key={ad.id}
          className="group relative p-5 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-300 hover:border-slate-600 overflow-hidden"
        >
          {/* 漸層背景 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${ad.gradient} opacity-[0.03] rounded-2xl`} />

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ad.icon_bg} flex items-center justify-center text-2xl shadow-lg`}>
                {ad.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{ad.title}</h3>
            </div>

            {/* AdSense 佔位符 */}
            <div className="w-full h-28 rounded-xl bg-slate-700/30 border border-slate-700/50 flex items-center justify-center hover:bg-slate-700/40 transition-colors">
              <p className="text-slate-400 text-xs">Google AdSense 廣告位置</p>
            </div>
          </div>
        </div>
      ))}
      <p className="text-slate-500 text-xs text-center pt-4">支持網站營運 ❤️</p>
    </div>
  )
}
