'use client'

import { projects } from '@/config/projects'
import { ArrowIcon } from './ArrowIcon'
import { getExternalLinkProps } from '@/lib/links'

export default function CTA() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 hidden sm:block" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 hidden sm:block" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 標題區 */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-slideUp px-2 sm:px-0">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              ✨ 現在就開始
            </span>
            <h2 className="heading-safe text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              準備試試看嗎？
            </h2>
            <p className="heading-safe text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              探索我們的實用工具，立即解決您的實際問題。
            </p>
          </div>

          {/* 專案卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl">{project.icon}</div>
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap">
                    立即試用
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-2 sm:mb-4">{project.description}</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">{project.longDescription}</p>

                <a
                  href={project.url}
                  {...getExternalLinkProps(project.url)}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300 text-sm py-1"
                >
                  開始免費試用
                  <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* 價值主張 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white mb-8 sm:mb-10 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">✓</p>
                <p className="text-base sm:text-lg font-semibold mb-1">輕量設計</p>
                <p className="text-xs sm:text-sm text-blue-100">簡潔的介面，易於上手</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">⚡</p>
                <p className="text-base sm:text-lg font-semibold mb-1">快速載入</p>
                <p className="text-xs sm:text-sm text-blue-100">最小化性能開銷，快速反應</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">♾️</p>
                <p className="text-base sm:text-lg font-semibold mb-1">持續改進</p>
                <p className="text-xs sm:text-sm text-blue-100">根據使用者反饋持續優化</p>
              </div>
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="text-center px-2">
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">了解更多，立即開始體驗</p>
            <div className="inline-flex items-center gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm text-gray-600">實用工具，為您節省時間</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
