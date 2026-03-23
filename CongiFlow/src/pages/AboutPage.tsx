import HeroHeader from '../components/HeroHeader'

const pillars = [
  'Shared components for branding, navigation, and loading states',
  'Page-level routing separated from reusable UI modules',
  'Tailwind-first responsive styling across all major breakpoints'
]

function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <HeroHeader
        eyebrow="About the setup"
        title="Structured for iteration, not for one-off pages."
        description="The codebase separates route concerns, shared design elements, and future feature modules so the app can grow without flattening into one large `src` folder."
        primaryCtaLabel="See customers"
        primaryCtaTo="/customers"
      />
      <section className="grid gap-4 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6">
            <p className="text-base leading-7 text-slate-200">{pillar}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default AboutPage
