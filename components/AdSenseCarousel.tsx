'use client'

import { useState } from 'react'

const RESOURCES = [
  {
    id: 1,
    icon: '⭐',
    title: '精選推薦',
    subtitle: '編輯精選',
    description: '經過驗證的創業工具和資源',
    highlights: ['市場領先方案', '用戶評價高', '持續更新'],
    gradient_bg: 'from-blue-600/20 to-cyan-500/20',
    gradient_border: 'from-blue-500 to-cyan-400',
    icon_bg: 'from-blue-600 to-blue-400',
    accent_color: 'bg-blue-500/20 border-blue-500/50',
  },
  {
    id: 2,
    icon: '🤝',
    title: '合作夥伴',
    subtitle: '生態連結',
    description: '與優秀團隊的合作機會',
    highlights: ['互利共贏', '資源共享', '社群支援'],
    gradient_bg: 'from-violet-600/20 to-pink-500/20',
    gradient_border: 'from-violet-500 to-pink-400',
    icon_bg: 'from-violet-600 to-pink-400',
    accent_color: 'bg-violet-500/20 border-violet-500/50',
  },
  {
    id: 3,
    icon: '✨',
    title: '優質內容',
    subtitle: '知識分享',
    description: '創業洞察和實戰經驗',
    highlights: ['行業趨勢', '案例分析', '最佳實踐'],
    gradient_bg: 'from-amber-600/20 to-orange-500/20',
    gradient_border: 'from-amber-500 to-orange-400',
    icon_bg: 'from-amber-600 to-orange-400',
    accent_color: 'bg-amber-500/20 border-amber-500/50',
  },
]

export default function AdSenseCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {RESOURCES.map((res) => (
        <div
          key={res.id}
          className="group relative p-5 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-300 hover:border-slate-600 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredId(res.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* 背景漸層 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${res.gradient_bg} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

          <div className="relative">
            {/* 標題區 */}
            <div className="flex items-start gap-4 mb-3">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${res.icon_bg} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                {res.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h3 className="text-xl font-black text-white">{res.title}</h3>
                  <span className="text-xs font-semibold text-slate-400">{res.subtitle}</span>
                </div>
                <p className="text-sm text-slate-300">{res.description}</p>
              </div>
            </div>

            {/* 內容區 */}
            {hoveredId === res.id && (
              <div className="mb-3 p-3 bg-slate-900/60 border border-slate-700/50 rounded-lg animate-in fade-in duration-200">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">亮點</p>
                <div className="space-y-1">
                  {res.highlights.map((highlight, i) => (
                    <p key={i} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* AdSense 廣告位置 */}
            <div className={`w-full h-24 rounded-xl border ${res.accent_color} bg-slate-800/40 flex items-center justify-center group-hover:bg-slate-800/60 transition-colors duration-300`}>
              <div className="text-center">
                <p className="text-slate-400 text-xs">Google AdSense</p>
                <p className="text-slate-500 text-xs">廣告位置</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 底部信息 */}
      <div className="pt-2 border-t border-slate-800/50">
        <p className="text-xs text-slate-500 text-center">❤️ 廣告收益支持我們提供更好的服務</p>
      </div>
    </div>
  )
}
