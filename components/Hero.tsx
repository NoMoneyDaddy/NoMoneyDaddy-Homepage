'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="section-container relative z-10 text-center animate-slideUp">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to{' '}
          <span className="gradient-text">NoMoneyDaddy</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Innovative solutions for the modern world. Explore our projects and
          discover what we&apos;re building.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="btn-primary inline-flex items-center justify-center"
          >
            Explore Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-400">2+</p>
            <p className="text-gray-400">Active Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">10k+</p>
            <p className="text-gray-400">Total Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">100%</p>
            <p className="text-gray-400">Passion Driven</p>
          </div>
        </div>
      </div>
    </section>
  )
}
