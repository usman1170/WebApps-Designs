import Brand from './Brand'

function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Brand />
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          CongiFlow is a modular React and Tailwind starter for product marketing sites, customer stories, and scalable feature pages.
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
