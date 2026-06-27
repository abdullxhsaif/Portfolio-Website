import './App.css'
import Hero from './Hero'
import ActionLinks from './Actionlinks'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Socials from './Socials'
import Footer from './Footer'

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#0B0B0F] relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-700/15 blur-[140px]" />
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-800/10 blur-[120px]" />
        <div className="absolute top-1/2 left-[10%] w-[300px] h-[300px] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-8">
        <div className="animate-fade-up delay-100">
          <Hero />
        </div>
        <div className="animate-fade-up delay-200">
          <ActionLinks />
        </div>
        <div className="animate-fade-up delay-300">
          <Projects />
        </div>
        <div className="animate-fade-up delay-400">
          <Testimonials />
        </div>
        <div className="animate-fade-up delay-500">
          <Newsletter />
        </div>
        <div className="animate-fade-up delay-600">
          <Socials />
        </div>
        <div className="animate-fade-up delay-700">
          <Footer />
        </div>
      </div>
    </div>
  )
}
