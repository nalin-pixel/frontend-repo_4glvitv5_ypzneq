import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
        <footer className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Crimson Detail. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-gray-900">Services</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
