'use client'

export default function Features() {
  const features = [
    {
      title: 'User-Centric Design',
      description: 'Beautiful, intuitive interfaces built with user experience at the forefront.',
      icon: '✨',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your needs, handling thousands of users seamlessly.',
      icon: '⚡',
    },
    {
      title: 'Community Focused',
      description: 'We believe in the power of community and build platforms that bring people together.',
      icon: '🤝',
    },
    {
      title: 'Mobile First',
      description: 'Optimized for every device, from smartphones to desktops.',
      icon: '📱',
    },
    {
      title: 'Real-time Updates',
      description: 'Live notifications and instant updates keep users engaged.',
      icon: '🔔',
    },
    {
      title: 'Security & Privacy',
      description: 'Your data is protected with industry-standard security practices.',
      icon: '🔐',
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our projects are built with quality, innovation, and user satisfaction
            in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover group relative p-8 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
