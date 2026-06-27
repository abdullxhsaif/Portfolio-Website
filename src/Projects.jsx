const projects = [
  {
    title: 'Saif Ecosystem',
    description: 'A personal link hub to scale presence, build authority, and turn attention into opportunity.',
    tags: ['React', 'Vite', 'Tailwind'],
    href: 'https://saif-ecosystem.vercel.app',
    status: 'Live',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    glow: 'hover:shadow-[0_0_24px_rgba(139,92,246,0.2)]',
    icon: '🌐',
  },
  {
    title: 'Saif Community',
    description: 'An exclusive community focused on financial education and building real-world wealth systems.',
    tags: ['Community', 'Finance', 'Growth'],
    href: 'https://www.patreon.com/cw/saifcommunity',
    status: 'Active',
    statusColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    glow: 'hover:shadow-[0_0_24px_rgba(96,165,250,0.2)]',
    icon: '🏛️',
  },
  {
    title: 'Saif Library',
    description: 'A curated collection of self-development eBooks to accelerate your personal and financial growth.',
    tags: ['eBooks', 'Education', 'Self-Dev'],
    href: 'https://whop.com/joined/saif-library-a7cd',
    status: 'Active',
    statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    glow: 'hover:shadow-[0_0_24px_rgba(96,165,250,0.2)]',
    icon: '📚',
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col gap-3 w-full animate-fade-up delay-400">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
        <p className="text-xs font-medium tracking-widest text-gray-600 uppercase">Featured Work</p>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      <div className="flex flex-col gap-2.5">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex flex-col gap-3 w-full p-4 rounded-2xl
              bg-white/[0.03] border border-white/8
              hover:bg-white/[0.06] hover:border-white/15
              ${p.glow}
              transition-all duration-200 no-underline
            `}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{p.icon}</span>
                <span className="text-white font-semibold text-sm tracking-tight">{p.title}</span>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${p.statusColor}`}>
                {p.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>

            {/* Tags */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5 flex-wrap">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-gray-600 px-2 py-0.5 rounded-md bg-white/5 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all duration-200"
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
    </div>
  )
}
