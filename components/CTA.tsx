'use client'

export default function CTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="section-container relative z-10 text-center animate-slideUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Explore?
        </h2>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of users enjoying our innovative platforms and become
          part of our growing community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://iwantpo.nomoneydadddy.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start with iWantPo
          </a>
          <a href="https://familyplay.nomoneydaddy.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start with FamilyPlay
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <p className="text-2xl font-bold text-blue-400 mb-2">100%</p>
            <p className="text-gray-400">Free to Use</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <p className="text-2xl font-bold text-cyan-400 mb-2">24/7</p>
            <p className="text-gray-400">Always Available</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <p className="text-2xl font-bold text-blue-400 mb-2">∞</p>
            <p className="text-gray-400">Unlimited Possibilities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
