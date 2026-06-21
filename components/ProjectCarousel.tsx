'use client'

const PROJECTS = [
  {
    id: 1,
    icon: '🛍️',
    title: 'iWantPo',
    description: 'Shopee 分潤人員的自動化社群行銷工具',
    features: ['一鍵生成貼文', '分潤文案管理', '智能推廣'],
    url: 'https://iwantpo.nomoneydaddy.app',
    gradient: 'from-blue-600 via-blue-500 to-cyan-400',
    icon_bg: 'bg-blue-500/20',
  },
  {
    id: 2,
    icon: '👨‍👩‍👧‍👦',
    title: 'FamilyPlay',
    description: '忙碌父母的親子互動遊戲平台',
    features: ['30秒快速開始', '即時互動遊戲', '無需複雜設置'],
    url: 'https://familyplay.nomoneydaddy.app',
    gradient: 'from-violet-600 via-purple-500 to-pink-400',
    icon_bg: 'bg-purple-500/20',
  },
  {
    id: 3,
    icon: '🎰',
    title: 'BingoKing',
    description: '台灣彩券的智能輔助決策系統',
    features: ['號碼預測分析', '歷史數據統計', '智能推薦'],
    url: 'https://bingoking.nomoneydaddy.app',
    gradient: 'from-amber-600 via-orange-500 to-red-400',
    icon_bg: 'bg-orange-500/20',
  },
]

export default function ProjectCarousel() {
  return (
    <div className="space-y-3">
      {PROJECTS.map((proj) => (
        <div
          key={proj.id}
          className="group relative p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 hover:border-slate-600"
        >
          {/* 漸層背景 */}
          <div className={`absolute inset-0 bg-gradient-to-r ${proj.gradient} opacity-5 rounded-lg`} />

          <div className="relative">
            {/* 上方：Icon 和標題 */}
            <div className="flex items-start justify-between mb-2 gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-10 h-10 rounded-lg ${proj.icon_bg} flex items-center justify-center text-xl backdrop-blur flex-shrink-0 mt-0.5`}>
                  {proj.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                  <p className="text-xs text-slate-400 leading-tight">{proj.description}</p>
                </div>
              </div>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-lg font-semibold text-xs text-white bg-gradient-to-r ${proj.gradient} hover:shadow-lg transition-all duration-300 whitespace-nowrap flex-shrink-0`}
              >
                試用 →
              </a>
            </div>

            {/* 功能 Badge */}
            <div className="flex flex-wrap gap-1.5">
              {proj.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-slate-700/40 rounded-full border border-slate-600/30"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
