const tiers = [
  {
    name: 'Starter',
    price: '$0',
    summary: 'Use the base scaffold, routing setup, and reusable section patterns.'
  },
  {
    name: 'Growth',
    price: '$49',
    summary: 'Expand into feature slices, customer stories, and richer page composition.'
  },
  {
    name: 'Scale',
    price: '$149',
    summary: 'Support multiple campaigns, larger teams, and more specialized content flows.'
  }
]

function PricingPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-200">Pricing</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Simple tiers for a scalable front-end foundation.</h1>
      </div>
      <section className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{tier.name}</p>
            <p className="mt-4 font-display text-4xl font-bold text-white">{tier.price}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{tier.summary}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default PricingPage
