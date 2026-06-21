'use client'

import { projects } from '@/config/projects'
import { getExternalLinkProps } from '@/lib/links'
import { ANIMATION } from '@/lib/constants'

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-gray-50">
      <div className="section-container relative z-10">
        {/* 標題 */}
        <div className="text-center mb-16 animate-slideUp">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            ✨ 我們的作品
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            為現實問題<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 設計的解決方案</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            每一個應用都專注於解決特定用戶群的實際痛點
          </p>
        </div>

        {/* 項目卡片 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * ANIMATION.staggerDelay}s` }}
            >
              {/* 漸變背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* 卡片內容 */}
              <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-gray-100 group-hover:border-blue-200 group-hover:shadow-2xl transition-all duration-300">
                {/* 頂部 */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl">{project.icon}</div>
                  <a
                    href={project.url}
                    {...getExternalLinkProps(project.url)}
                    aria-label={`前往 ${project.title} 網站`}
                    className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* 標題和描述 */}
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">{project.description}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.longDescription}</p>

                {/* 特色 */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">🎯 核心特色</h4>
                  <div className="space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 按鈕 */}
                <a
                  href={project.url}
                  {...getExternalLinkProps(project.url)}
                  className="block w-full btn-primary text-center group/btn hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span>立即試用</span>
                  <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
