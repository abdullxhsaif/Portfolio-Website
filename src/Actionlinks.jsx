const links = [
  {
    title: 'Join Community',
    subtitle: 'Scale your personal brand',
    href: 'https://www.patreon.com/cw/saifcommunity',
    glow: 'hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]',
  },
  {
    title: 'Explore Library',
    subtitle: 'Self development eBooks',
    href: 'https://whop.com/joined/saif-library-a7cd',
    glow: 'hover:shadow-[0_0_24px_rgba(96,165,250,0.20)]',
  },
]

export default function ActionLinks() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`
            group flex items-center justify-between w-full
            px-6 py-5 rounded-2xl
            bg-white/5 backdrop-blur-md
            border border-white/10
            hover:bg-white/[0.08] hover:border-white/20
            hover:scale-[1.02]
            ${link.glow}
            transition-all duration-200 cursor-pointer no-underline
          `}
        >
          {/* Left: text */}
          <div className="flex flex-col gap-0.5">
            <span className="text-white font-semibold text-base sm:text-lg tracking-tight">
              {link.title}
            </span>
            <span className="text-gray-500 text-sm">{link.subtitle}</span>
          </div>

          {/* Right: arrow */}
          <div className="ml-4 flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}