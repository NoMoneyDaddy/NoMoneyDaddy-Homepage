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
    gradient_button: 'from-blue-500 to-blue-600',
    icon_bg: 'from-blue-600 to-blue-400',
  },
  {
    id: 2,
    icon: '👨‍👩‍👧‍👦',
    title: 'FamilyPlay',
    description: '忙碌父母的親子互動遊戲平台',
    features: ['30秒快速開始', '即時互動遊戲', '無需複雜設置'],
    url: 'https://familyplay.nomoneydaddy.app',
    gradient: 'from-violet-600 via-purple-500 to-pink-400',
    gradient_button: 'from-violet-500 to-pink-500',
    icon_bg: 'from-violet-600 to-pink-400',
  },
  {
    id: 3,
    icon: '🎰',
    title: 'BingoKing',
    description: '台灣彩券的智能輔助決策系統',
    features: ['號碼預測分析', '歷史數據統計', '智能推薦'],
    url: 'https://bingoking.nomoneydaddy.app',
    gradient: 'from-amber-600 via-orange-500 to-red-400',
    gradient_button: 'from-amber-500 to-red-500',
    icon_bg: 'from-amber-600 to-orange-400',
  },
]

export default function ProjectCarousel() {
  return (
    <div className="space-y-4">
      {PROJECTS.map((proj) => (
        <div
          key={proj.id}
          className="group relative p-5 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-300 hover:border-slate-600 overflow-hidden"
        >
          {/* 漸層背景 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-[0.03] rounded-2xl`} />

          <div className="relative">
            {/* 上方：Icon 和標題 */}
            <div className="flex items-start gap-4 mb-3">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${proj.icon_bg} flex items-center justify-center text-3xl backdrop-blur flex-shrink-0 shadow-lg`}>
                {proj.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-0.5">{proj.title}</h3>
                <p className="text-sm text-slate-300 leading-snug">{proj.description}</p>
              </div>
            </div>

            {/* 功能 Badge */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/60 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* 按鈕 */}
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block w-full px-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${proj.gradient_button} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center`}
            >
              立即試用 →
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
