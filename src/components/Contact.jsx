import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // In a later iteration we can hook this to backend
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will reach out shortly.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Get a quote</h2>
          <p className="mt-4 text-gray-600">Tell us about your vehicle, its condition, and the results you want. We'll recommend the perfect package.</p>
          <div className="mt-8 rounded-2xl border border-gray-200 p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Name" name="name" value={form.name} onChange={onChange} required />
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email" type="email" name="email" value={form.email} onChange={onChange} required />
              </div>
              <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Phone" name="phone" value={form.phone} onChange={onChange} />
              <textarea className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell us about your car (make/model, year, color) and goals" rows="5" name="message" value={form.message} onChange={onChange} />
              <button type="submit" className="w-full rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-gray-800 transition-colors">Request quote</button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
        <div className="md:pl-10">
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Why choose us</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• Fully insured and highly rated</li>
              <li>• Premium, pH-balanced chemicals</li>
              <li>• Paint-safe methods only</li>
              <li>• Mobile service available</li>
              <li>• Satisfaction guaranteed</li>
            </ul>
          </div>
          <div className="mt-6 rounded-2xl bg-gray-900 text-white p-6">
            <p className="text-sm opacity-80">Serving Greater Metro area</p>
            <p className="mt-2 font-semibold">Open Mon–Sat · 8am–6pm</p>
            <a href="tel:+1234567890" className="mt-4 inline-block rounded-md bg-white text-gray-900 px-4 py-2 font-semibold">Call (123) 456-7890</a>
          </div>
        </div>
      </div>
    </section>
  )
}
