'use client'

import { projects } from '@/config/projects'

export default function CTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="section-container relative z-10 text-center animate-slideUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          試試看吧
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          立即開始體驗，解決您的生活和工作問題。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              試用 {project.title}
            </a>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-2xl font-bold text-blue-600 mb-2">免費試用</p>
            <p className="text-gray-600">30天完全免費體驗所有功能</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-2xl font-bold text-blue-600 mb-2">快速上手</p>
            <p className="text-gray-600">簡單直觀的介面，立即開始使用</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-2xl font-bold text-blue-600 mb-2">持續更新</p>
            <p className="text-gray-600">不斷改進，根據用戶回饋優化</p>
          </div>
        </div>
      </div>
    </section>
  )
}
