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
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    icon: '👨‍👩‍👧‍👦',
    title: 'FamilyPlay',
    description: '忙碌父母的親子互動遊戲平台',
    features: '30秒快速開始、即時互動遊戲、無需複雜設置',
    url: 'https://familyplay.nomoneydaddy.app',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    icon: '🎰',
    title: 'BingoKing',
    description: '台灣彩券的智能輔助決策系統',
    features: '號碼預測分析、歷史數據統計、智能推薦',
    url: 'https://bingoking.nomoneydaddy.app',
    color: 'from-orange-500 to-red-500',
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

  const project = PROJECTS[currentSlide]

  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-96">
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* 項目卡片 */}
          {PROJECTS.map((proj, index) => (
            <div
              key={proj.id}
              className={`absolute inset-0 bg-gradient-to-br ${proj.color} transition-opacity duration-500 p-8 md:p-12 flex flex-col justify-between ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* 上方內容 */}
              <div className="text-white">
                <div className="text-6xl md:text-7xl mb-4">{proj.icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{proj.title}</h2>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                  {proj.description}
                </p>
                <p className="text-sm md:text-base text-white/80">
                  {proj.features}
                </p>
              </div>

              {/* 下方按鈕 */}
              <div>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  立即試用 →
                </a>
              </div>
            </div>
          ))}

          {/* 導航按鈕 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 指示點 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-3">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
