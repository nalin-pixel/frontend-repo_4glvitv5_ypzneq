const tiers = [
  {
    name: 'Express',
    price: '$99',
    features: ['Foam bath & safe wash', 'Wheels & tires', 'Interior quick vacuum', 'Windows & mirrors'],
  },
  {
    name: 'Signature',
    price: '$249',
    features: ['Decon wash & clay', 'Machine polish gloss boost', 'Interior deep clean', '6-month sealant'],
    popular: true,
  },
  {
    name: 'Elite',
    price: 'Custom',
    features: ['Multi-stage correction', '2–5 year ceramic coating', 'Interior restoration', 'Engine bay detail'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Packages</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Transparent pricing. Tailored results. Every service includes careful prep and premium protection.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.popular ? 'border-gray-900 ring-2 ring-gray-900' : 'border-gray-200'} bg-white p-8` }>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-gray-900 text-white px-3 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-4xl font-black text-gray-900">{tier.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center justify-center w-full rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-gray-800 transition-colors">Book this</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
