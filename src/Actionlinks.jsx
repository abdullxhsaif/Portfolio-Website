const links = [
  {
    title: 'Join Community',
    subtitle: 'Learn how money works',
    href: import.meta.env.VITE_PATREON_URL || 'https://www.patreon.com/cw/saifcommunity',
    glow: 'hover:shadow-[0_0_28px_rgba(139,92,246,0.3)]',
    badge: 'Community',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },
  {
    title: 'Explore Library',
    subtitle: 'Self development eBooks',
    href: import.meta.env.VITE_WHOP_URL || 'https://whop.com/joined/saif-library-a7cd',
    glow: 'hover:shadow-[0_0_28px_rgba(96,165,250,0.25)]',
    badge: 'Library',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
  },
]

export default function ActionLinks() {
  return (
    <div className="flex flex-col gap-3 w-full">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center justify-between w-full
            px-5 py-4 rounded-2xl
            bg-white/[0.04] backdrop-blur-md
            border border-white/10
            hover:bg-white/[0.08] hover:border-white/20
            hover:scale-[1.015]
            ${link.glow}
            transition-all duration-200 cursor-pointer no-underline
          `}
        >
          {/* Left: icon + text */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200 flex-shrink-0">
              {link.icon}
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-base tracking-tight">
                  {link.title}
                </span>
                <span className={`hidden sm:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full border ${link.badgeColor}`}>
                  {link.badge}
                </span>
              </div>
              <span className="text-gray-500 text-sm">{link.subtitle}</span>
            </div>
          </div>

          {/* Right: arrow */}
          <div className="ml-3 flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 flex-shrink-0 transition-all duration-200">
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
