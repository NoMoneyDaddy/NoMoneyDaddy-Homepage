'use client'

import { useState, useEffect } from 'react'

export default function AdSenseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    { id: 1, color: 'from-blue-500 to-blue-600' },
    { id: 2, color: 'from-purple-500 to-purple-600' },
    { id: 3, color: 'from-cyan-500 to-blue-500' },
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
    <section className="w-full py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-80">
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-700 shadow-2xl"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* 幻燈片 */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 bg-gradient-to-br ${slide.color} transition-opacity duration-500 flex items-center justify-center ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center">
                  <p className="text-white text-lg md:text-xl font-bold mb-4">廣告位置 {slide.id}</p>
                  <p className="text-white/80 text-sm md:text-base">Google AdSense 廣告在此展示</p>
                  <p className="text-white/60 text-xs mt-4">支持網站營運 ❤️</p>
                </div>
              </div>
            ))}
          </div>

          {/* 導航按鈕 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 指示點 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 自動播放指示 */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            {isAutoPlay ? '⏸ 暫停' : '▶ 繼續'} 自動播放
          </button>
        </div>
      </div>
    </section>
  )
}
