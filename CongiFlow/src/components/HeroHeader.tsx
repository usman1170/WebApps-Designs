import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

type HeroHeaderProps = {
  eyebrow: string
  title: string
  description: string
  primaryCtaLabel?: string
  primaryCtaTo?: string
}

function HeroHeader({
  eyebrow,
  title,
  description,
  primaryCtaLabel = 'Explore pricing',
  primaryCtaTo = '/pricing'
}: HeroHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 backdrop-blur sm:px-8 sm:py-16 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-100">
            <Sparkles size={14} />
            {eyebrow}
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold leading-none text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to={primaryCtaTo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01]"
            >
              {primaryCtaLabel}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/customers"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/5"
            >
              View customers
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ['Launch speed', 'Deploy reusable flows and page sections in days, not weeks.'],
            ['Signal clarity', 'Keep navigation, messaging, and product value aligned across every page.'],
            ['Responsive by default', 'Layouts adapt cleanly from compact mobile screens to wide desktop canvases.']
          ].map(([heading, copy]) => (
            <div key={heading} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
              <p className="text-sm font-bold text-white">{heading}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroHeader
