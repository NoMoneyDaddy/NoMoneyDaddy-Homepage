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
    <section className="py-12 relative">
      <div className="section-container">
        {/* 輪播容器 */}
        <div
          className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-lg"
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
                  <p className="text-white text-sm md:text-lg font-medium mb-2">廣告位置 {slide.id}</p>
                  <p className="text-white/80 text-xs md:text-sm">Google AdSense 廣告將在此展示</p>
                </div>
                {/* Google AdSense 位置 */}
                <script
                  async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2955827057895484"
                  crossOrigin="anonymous"
                ></script>
              </div>
            ))}
          </div>

          {/* 上一個按鈕 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 下一個按鈕 */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 指示點 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 自動播放指示 */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isAutoPlay ? '⏸ 暫停' : '▶ 繼續'} 自動播放
          </button>
        </div>
      </div>
    </section>
  )
}
