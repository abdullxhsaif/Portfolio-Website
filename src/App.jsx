import './App.css'
import Hero from './Hero'
import ActionLinks from './Actionlinks'
import Socials from './Socials'
import Footer from './Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-16">
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-800/15 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-10">
        <Hero />
        <ActionLinks />
        <Socials />
        <Footer />
      </div>
    </div>
  )
}