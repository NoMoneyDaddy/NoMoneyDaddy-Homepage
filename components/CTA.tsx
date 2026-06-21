'use client'

import { projects } from '@/config/projects'

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
              準備改變您的生活嗎？
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              加入已經在使用 iWantPo 和 FamilyPlay 的用戶，解決您的實際問題。
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
                  target={project.url === '#' ? undefined : '_blank'}
                  rel={project.url === '#' ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300"
                >
                  開始免費試用
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* 價值主張 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">✓</p>
                <p className="text-lg font-semibold mb-1">完全免費</p>
                <p className="text-blue-100">30 天免費試用，無需信用卡</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">⚡</p>
                <p className="text-lg font-semibold mb-1">立即開始</p>
                <p className="text-blue-100">30秒快速設置，無需複雜配置</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">♾️</p>
                <p className="text-lg font-semibold mb-1">持續更新</p>
                <p className="text-blue-100">每月新功能，根據反饋改進</p>
              </div>
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">還在猶豫？看看其他用戶怎麼說</p>
            <div className="inline-flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 / 5.0</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">來自 100+ 用戶的評價</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
