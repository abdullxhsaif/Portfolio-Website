import { useState, useEffect } from 'react'

const roles = ['Builder', 'Creator', 'Entrepreneur', 'Investor']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 90)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 55)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <div className="w-full flex flex-col items-center text-center gap-6 pt-4">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Saif Ecosystem</span>
      </div>

      {/* Main headline */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
          <span className="text-white">Digital </span>
          <span className="text-gradient">{typedText}</span>
          <span className="text-purple-400 animate-pulse">|</span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-400 leading-snug">
          An Ecosystem That<br className="sm:hidden" /> Evolves With You.
        </p>
      </div>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
        Scale your presence. Build authority. Turn attention into opportunity with focused systems.
      </p>

      {/* Stats row */}
      <div className="flex items-center gap-6">
        {[
          { value: '1K+', label: 'Community' },
          { value: '10+', label: 'Projects' },
          { value: '3+', label: 'Years' },
        ].map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-0.5">
            <span className="text-xl font-bold text-white">{s.value}</span>
            <span className="text-xs text-gray-600">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
