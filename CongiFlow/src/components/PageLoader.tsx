function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
        <span className="h-3 w-3 animate-pulse rounded-full bg-sky-300" />
        <span className="font-display text-sm font-bold uppercase tracking-[0.28em] text-slate-200">
          Loading
        </span>
      </div>
    </div>
  )
}

export default PageLoader
