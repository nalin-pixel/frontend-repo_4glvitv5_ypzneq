import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0c]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(244,63,94,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(59,130,246,0.2),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl text-white">
          <p className="uppercase tracking-widest text-sm text-gray-300/80">Premium Auto Detailing</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Elevate your vehicle with a showroom finish
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Ceramic coatings, paint correction, interior restoration, and mobile washes. Meticulous care for every mile.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="pointer-events-auto inline-flex items-center rounded-md bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-100 transition-colors">View packages</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-gray-800 transition-colors">Request a quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
