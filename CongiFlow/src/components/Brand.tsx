import { Link } from 'react-router-dom'

function Brand() {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-lg font-extrabold text-sky-200 shadow-glow">
        C
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-[0.24em] text-slate-100 sm:text-xl">
        CongiFlow
      </span>
    </Link>
  )
}

export default Brand
