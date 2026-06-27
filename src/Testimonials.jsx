function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

const testimonials = [
  {
    quote: "Saif's content completely changed how I think about money. Went from zero savings to investing consistently within 3 months.",
    name: "Ahmed K.",
    role: "Community Member",
    gradient: "from-purple-500 to-blue-500",
    initials: "AK",
  },
  {
    quote: "The Saif Library is packed with value. Every book recommendation has been spot on. Easily worth 10x the price.",
    name: "Sara M.",
    role: "Library Member",
    gradient: "from-blue-500 to-cyan-500",
    initials: "SM",
  },
  {
    quote: "I have followed a lot of finance creators. Saif is the only one who actually explains the systems behind wealth, not just tips.",
    name: "Omar R.",
    role: "Patreon Supporter",
    gradient: "from-violet-500 to-purple-500",
    initials: "OR",
  },
]

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
        <span className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">What People Say</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
      </div>
      <div className="flex flex-col gap-3">
        {testimonials.map((t) => (
          <div key={t.name} className="w-full rounded-2xl p-4 bg-white/[0.03] border border-white/[0.08] flex flex-col gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xs font-bold">{t.initials}</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
