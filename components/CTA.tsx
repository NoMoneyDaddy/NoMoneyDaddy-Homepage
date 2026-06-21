'use client'

import { projects } from '@/config/projects'
import { ArrowIcon } from './ArrowIcon'
import { StaticStars } from './StaticStars'
import { getExternalLinkProps } from '@/lib/links'

export default function CTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 標題區 */}
          <div className="text-center mb-12 animate-slideUp">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              ✨ 現在就開始
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              準備試試看嗎？
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              探索我們的實用工具，解決日常問題。
            </p>
          </div>

          {/* 專案卡片 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{project.icon}</div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    立即試用
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{project.description}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.longDescription}</p>

                <a
                  href={project.url}
                  {...getExternalLinkProps(project.url)}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300"
                >
                  開始免費試用
                  <ArrowIcon className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* 價值主張 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">✓</p>
                <p className="text-lg font-semibold mb-1">輕量設計</p>
                <p className="text-blue-100">簡潔的介面，易於上手</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">⚡</p>
                <p className="text-lg font-semibold mb-1">快速載入</p>
                <p className="text-blue-100">最小化性能開銷，快速反應</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">♾️</p>
                <p className="text-lg font-semibold mb-1">持續改進</p>
                <p className="text-blue-100">根據使用者反饋持續優化</p>
              </div>
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">了解更多，立即開始體驗</p>
            <div className="inline-flex items-center gap-4">
              <span className="text-sm text-gray-600">實用工具，為您節省時間</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
