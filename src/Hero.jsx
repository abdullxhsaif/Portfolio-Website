import { useState, useEffect } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const roles = ['Builder', 'Creator', 'Entrepreneur']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setRoleIndex(i => (i + 1) % roles.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? 60 : 90)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <div className="flex flex-col items-center text-center gap-6 pt-4">
      {/* Avatar */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-0.5">
          <div className="w-full h-full rounded-full bg-[#0B0B0F] flex items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent">
              S
            </span>
          </div>
        </div>
        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0B0B0F]" />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Saif Ecosystem
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
          Digital{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
          An Ecosystem That Evolves With You.
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm">
        Scale your presence. Build authority. Turn attention into opportunity with focused systems.
      </p>

      {/* Stats */}
      <div className="flex items-center gap-6 pt-1">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">1K+</span>
          <span className="text-xs text-gray-500 mt-0.5">Community</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">10+</span>
          <span className="text-xs text-gray-500 mt-0.5">Projects</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-white">3+</span>
          <span className="text-xs text-gray-500 mt-0.5">Years</span>
        </div>
      </div>
    </div>
  )
}
