import { useState } from 'react'

const NEWSLETTER_URL = import.meta.env.VITE_NEWSLETTER_URL || '#'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setStatus('loading')
    if (NEWSLETTER_URL && NEWSLETTER_URL !== '#') {
      window.open(`${NEWSLETTER_URL}?email=${encodeURIComponent(email)}`, '_blank')
      setStatus('success')
    } else {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
    }
  }

  return (
    <div className="w-full rounded-2xl p-5 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">✉️</span>
            <h3 className="text-white font-bold text-base tracking-tight">Stay in the Loop</h3>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Weekly insights on wealth-building, mindset, and systems that work. No spam ever.
          </p>
        </div>
        {status === 'success' ? (
          <div className="flex items-center gap-2 py-2">
            <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 text-sm font-medium">You are in! Check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:from-purple-500 hover:to-blue-500 hover:scale-102 active:scale-98 transition-all duration-200 disabled:opacity-60 flex-shrink-0"
            >
              {status === 'loading' ? 'Joining' : 'Subscribe'}
            </button>
          </form>
        )}
        <p className="text-gray-700 text-xs">Join 1,000+ readers. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}
