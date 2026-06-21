'use client'

import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    id: 1,
    icon: '🛍️',
    title: 'iWantPo',
    description: 'Shopee 分潤人員的自動化社群行銷工具',
    features: '一鍵生成吸引人的貼文、分潤文案管理、智能推廣',
    url: 'https://iwantpo.nomoneydaddy.app',
    gradient: 'from-blue-600 via-blue-500 to-cyan-400',
    icon_bg: 'bg-blue-500/20',
  },
  {
    id: 2,
    icon: '👨‍👩‍👧‍👦',
    title: 'FamilyPlay',
    description: '忙碌父母的親子互動遊戲平台',
    features: '30秒快速開始、即時互動遊戲、無需複雜設置',
    url: 'https://familyplay.nomoneydaddy.app',
    gradient: 'from-violet-600 via-purple-500 to-pink-400',
    icon_bg: 'bg-purple-500/20',
  },
  {
    id: 3,
    icon: '🎰',
    title: 'BingoKing',
    description: '台灣彩券的智能輔助決策系統',
    features: '號碼預測分析、歷史數據統計、智能推薦',
    url: 'https://bingoking.nomoneydaddy.app',
    gradient: 'from-amber-600 via-orange-500 to-red-400',
    icon_bg: 'bg-orange-500/20',
  },
]

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECTS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PROJECTS.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
    setIsAutoPlay(false)
  }

  return (
    <div
      className="relative w-full h-96 rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 卡片背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50" />

      {/* 項目卡片 */}
      {PROJECTS.map((proj, index) => (
        <div
          key={proj.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* 漸層背景 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-5`} />

          {/* 內容 */}
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
            {/* 上方 */}
            <div>
              <div className={`w-14 h-14 rounded-lg ${proj.icon_bg} flex items-center justify-center text-3xl mb-4 backdrop-blur`}>
                {proj.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{proj.description}</p>
            </div>

            {/* 中間功能 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.features.split('、').map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-700/40 rounded-full border border-slate-600/30"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* 下方按鈕 */}
            <div>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${proj.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn`}
              >
                立即試用
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* 導航按鈕 */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示點 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
