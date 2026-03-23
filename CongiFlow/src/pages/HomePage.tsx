import HeroHeader from '../components/HeroHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const metrics = [
  { label: 'Faster launches', value: '3x' },
  { label: 'Reusable sections', value: '24+' },
  { label: 'Team handoff', value: 'Zero friction' }
]

function HomePage() {
  const isVisible = useScrollReveal(60)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className={isVisible ? 'translate-y-0 opacity-100 transition duration-700' : 'translate-y-6 opacity-0'}>
        <HeroHeader
          eyebrow="Web app foundation"
          title="A modular Vite starter for high-clarity product sites."
          description="This scaffold gives you a clean page system, shared UI building blocks, route-level organization, and responsive Tailwind styling that scales with the product."
          primaryCtaLabel="Read the structure"
          primaryCtaTo="/about"
        />
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((item) => (
          <article key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-4 font-display text-3xl font-bold text-white">{item.value}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HomePage
