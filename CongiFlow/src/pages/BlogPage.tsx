const posts = [
  {
    title: 'Designing route-aware page systems',
    summary: 'Keep page composition clean by treating route files as orchestration and shared components as pure building blocks.'
  },
  {
    title: 'Tailwind patterns that scale',
    summary: 'Use clear spacing, responsive breakpoints, and composable utility groups instead of one-off overrides.'
  },
  {
    title: 'Why feature folders stay empty at first',
    summary: 'Reserve feature slices for domain logic when it appears instead of preloading complexity into every screen.'
  }
]

function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-200">Journal</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Build notes for the scaffold.</h1>
      </div>
      <section className="grid gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="font-display text-2xl font-bold text-white">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{post.summary}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default BlogPage
