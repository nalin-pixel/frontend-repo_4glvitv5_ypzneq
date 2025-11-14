import { Sparkles, Droplets, Shield, VacuumCleaner } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Paint Correction',
    desc: 'Remove swirls, haze, and light scratches for deep gloss and clarity.'
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    desc: 'Long-lasting protection with intense hydrophobic beading and shine.'
  },
  {
    icon: VacuumCleaner,
    title: 'Interior Restoration',
    desc: 'Deep clean and protect leather, fabric, and trim to factory-fresh.'
  },
  {
    icon: Droplets,
    title: 'Premium Wash',
    desc: 'Two-bucket wash, foam bath, and safe drying with plush microfiber.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Every package is built on careful techniques, premium products, and an obsession with detail.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <Icon className="h-8 w-8 text-gray-900" />
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
