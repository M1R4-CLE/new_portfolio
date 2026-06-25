'use client'

export default function Navbar({ isLightTheme, toggleTheme, openContactModal }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
          Mira
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-5">
          <a href="#about" className="transition hover:text-emerald-400">
            About
          </a>
          <a href="#achievements" className="transition hover:text-emerald-400">
            Certificates
          </a>
          <a href="#projects" className="transition hover:text-emerald-400">
            Projects
          </a>
          <button
            type="button"
            onClick={openContactModal}
            className="transition hover:text-emerald-400"
          >
            Contact
          </button>
          <button
            type="button"
            aria-pressed={isLightTheme}
            title="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full border border-emerald-400/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
          >
            Theme
          </button>
        </div>
      </nav>
    </header>
  )
}
