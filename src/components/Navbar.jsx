import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-gray-900 to-gray-700 grid place-items-center text-white font-bold">CD</div>
          <span className="text-gray-900 font-semibold tracking-tight">Crimson Detail</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#gallery" className="text-gray-700 hover:text-gray-900">Gallery</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">Book now</a>
        </nav>
        <button className="md:hidden h-10 w-10 grid place-items-center rounded-md hover:bg-black/5" aria-label="Open menu">
          <Menu className="h-5 w-5 text-gray-900" />
        </button>
      </div>
    </header>
  )
}
