'use client'

import { useState, useEffect } from 'react'

export default function AdSenseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: '精選推薦',
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      icon: '⭐',
    },
    {
      id: 2,
      title: '合作夥伴',
      gradient: 'from-violet-600 via-purple-500 to-pink-400',
      icon: '🤝',
    },
    {
      id: 3,
      title: '優質內容',
      gradient: 'from-amber-600 via-orange-500 to-red-400',
      icon: '✨',
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <div
      className="relative w-full h-96 rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50" />

      {/* 幻燈片 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* 漸層背景 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-5`} />

            {/* 內容 */}
            <div className="relative h-full p-8 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">{slide.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-3 text-center">{slide.title}</h3>
              <p className="text-slate-300 text-center text-sm mb-6 max-w-xs">
                與優質內容與合作夥伴分享價值
              </p>

              {/* AdSense 佔位符 */}
              <div className="w-full max-w-xs h-32 rounded-lg bg-slate-700/30 border border-slate-600/30 flex items-center justify-center">
                <p className="text-slate-400 text-xs text-center">Google AdSense 廣告</p>
              </div>

              <p className="text-slate-500 text-xs mt-4">支持網站營運 ❤️</p>
            </div>
          </div>
        ))}
      </div>

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
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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
