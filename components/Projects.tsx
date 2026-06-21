'use client'

import { projects } from '@/config/projects'

export default function Projects() {

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            我的 <span className="gradient-text">網頁作品</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            創新的解決方案，解決現實問題，提升用戶體驗。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-hover group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white rounded-2xl p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{project.icon}</div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.longDescription}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3 font-semibold">
                    Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-blue-50 text-sm text-blue-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center"
                  >
                    查看 Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
