export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center gap-5 pt-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
          SAIF ECOSYSTEM
        </span>
      </div>
      <h1
        className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        An Ecosystem That{' '}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Evolves With You.
        </span>
      </h1>
      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm">
      </p>
    </div>
  )
}
