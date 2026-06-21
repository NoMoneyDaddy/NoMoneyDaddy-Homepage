'use client'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'iWantPo',
      description: 'A comprehensive Shopee community platform for buyers and sellers to connect, share experiences, and grow together.',
      longDescription: 'iWantPo is a modern community-driven platform built on top of Shopee ecosystem. It enables users to discover products, share reviews, and build meaningful connections.',
      url: 'https://iwantpo.nomoneydadddy.app/',
      github: 'https://github.com/NoMoneyDaddy/threadsposhopee',
      features: ['Community Forum', 'Product Reviews', 'Seller Network', 'Real-time Chat'],
      icon: '🛍️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'FamilyPlay',
      description: 'An interactive family gaming and entertainment platform that brings families together through fun, engaging activities.',
      longDescription: 'FamilyPlay creates memorable moments for families with interactive games, challenges, and shared experiences designed for all ages.',
      url: 'https://familyplay.nomoneydaddy.app/',
      github: 'https://github.com/NoMoneyDaddy/familyplay',
      features: ['Multiplayer Games', 'Family Challenges', 'Leaderboards', 'Rewards System'],
      icon: '👨‍👩‍👧‍👦',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions designed to solve real-world problems and
            improve user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-hover group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-slate-800 rounded-2xl p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{project.icon}</div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
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

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.longDescription}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-3 font-semibold">
                    Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-slate-700/50 text-sm text-blue-300"
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
                    Visit Live
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
