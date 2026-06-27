export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center gap-2 pb-2 pt-2">
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <p className="text-gray-600 text-xs tracking-wide">
        © {year} Saif Ecosystem — All rights reserved.
      </p>
      <p className="text-gray-700 text-xs">
        Built with 🔥 to evolve with you.
      </p>
    </div>
  )
}
