'use client'

import { useState } from 'react'

const PROJECTS = [
  {
    id: 1,
    icon: '🛍️',
    title: 'iWantPo',
    tagline: 'Shopee 分潤人員必備',
    description: '自動化社群行銷工具',
    problem: '繁瑣的文案創作和社群管理',
    solution: '一鍵生成、智能推廣、數據追蹤',
    features: ['自動生成貼文', '文案管理系統', '智能推廣'],
    url: 'https://iwantpo.nomoneydaddy.app',
    gradient_bg: 'from-blue-600/20 to-cyan-500/20',
    gradient_border: 'from-blue-500 to-cyan-400',
    gradient_button: 'from-blue-500 to-blue-600',
    icon_bg: 'from-blue-600 to-blue-400',
    accent_color: 'bg-blue-500/20 border-blue-500/50',
  },
  {
    id: 2,
    icon: '👨‍👩‍👧‍👦',
    title: 'FamilyPlay',
    tagline: '忙碌父母的好幫手',
    description: '親子互動遊戲平台',
    problem: '沒有時間高質量陪伴孩子',
    solution: '快速開始、即時互動、零門檻',
    features: ['30秒快速開始', '即時互動遊戲', '無設置成本'],
    url: 'https://familyplay.nomoneydaddy.app',
    gradient_bg: 'from-violet-600/20 to-pink-500/20',
    gradient_border: 'from-violet-500 to-pink-400',
    gradient_button: 'from-violet-500 to-pink-500',
    icon_bg: 'from-violet-600 to-pink-400',
    accent_color: 'bg-violet-500/20 border-violet-500/50',
  },
  {
    id: 3,
    icon: '🎰',
    title: 'BingoKing',
    tagline: '台灣彩券投資者的軍師',
    description: '智能輔助決策系統',
    problem: '缺乏數據支持的決策',
    solution: '預測分析、歷史數據、智能推薦',
    features: ['號碼預測分析', '數據統計追蹤', '智能決策建議'],
    url: 'https://bingoking.nomoneydaddy.app',
    gradient_bg: 'from-amber-600/20 to-orange-500/20',
    gradient_border: 'from-amber-500 to-orange-400',
    gradient_button: 'from-amber-500 to-orange-500',
    icon_bg: 'from-amber-600 to-orange-400',
    accent_color: 'bg-amber-500/20 border-amber-500/50',
  },
]

export default function ProjectCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {PROJECTS.map((proj) => (
        <div
          key={proj.id}
          className="group relative p-5 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-300 hover:border-slate-600 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredId(proj.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* 背景漸層 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient_bg} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

          <div className="relative">
            {/* 上方：Icon 和快速信息 */}
            <div className="flex items-start gap-4 mb-3">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${proj.icon_bg} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                {proj.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h3 className="text-xl font-black text-white">{proj.title}</h3>
                  <span className="text-xs font-semibold text-slate-400">#{proj.id}</span>
                </div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">{proj.tagline}</p>
                <p className="text-sm text-slate-300">{proj.description}</p>
              </div>
            </div>

            {/* 問題-解決方案 */}
            {hoveredId === proj.id && (
              <div className="mb-3 p-3 bg-slate-900/60 border border-slate-700/50 rounded-lg space-y-2 animate-in fade-in duration-200">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">問題</p>
                  <p className="text-sm text-slate-300">{proj.problem}</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">解決方案</p>
                  <p className="text-sm text-slate-300">{proj.solution}</p>
                </div>
              </div>
            )}

            {/* 功能標籤 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.features.map((feature, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 text-xs font-semibold text-slate-300 ${proj.accent_color} rounded-lg border transition-all duration-300 group-hover:text-white group-hover:bg-opacity-100`}
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA 按鈕 */}
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full px-4 py-3 rounded-xl font-bold text-white text-center bg-gradient-to-r ${proj.gradient_button} hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 group-hover:scale-100 active:scale-95`}
            >
              立即試用 →
            </a>
          </div>
        </div>
      ))}

      {/* 底部信息 */}
      <div className="pt-2 border-t border-slate-800/50">
        <p className="text-xs text-slate-500 text-center">💡 將滑鼠懸停在卡片上查看詳細對比</p>
      </div>
    </div>
  )
}
