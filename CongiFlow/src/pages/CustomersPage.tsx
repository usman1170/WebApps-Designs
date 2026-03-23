const customers = [
  ['Northstar Labs', 'Scaled their docs and acquisition pages from one template system.'],
  ['FrameOps', 'Used modular content sections to tighten product launches across regions.'],
  ['Cinder Cloud', 'Moved from static landing pages to a reusable route-driven site architecture.']
]

function CustomersPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-200">Customers</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Teams using the same modular layout logic.</h1>
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {customers.map(([name, summary]) => (
          <article key={name} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6">
            <p className="font-display text-2xl font-bold text-white">{name}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default CustomersPage
