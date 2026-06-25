'use client'

import { SafeImage } from '../../app/back_end/portfolio_back_end'

export default function Hero({ openContactModal }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <article className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/15 backdrop-blur-xl">
        <div className="mx-auto mb-6 h-56 w-56 overflow-hidden rounded-[2rem] bg-black/20">
          <div className="relative h-full w-full">
            <SafeImage
              src="/pfp/MASAPA draft pfp copy.png"
              alt="Profile Picture"
              label="Profile"
              priority
            />
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-emerald-400">Quick Info</h3>
            <dl className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <dt className="text-sm uppercase tracking-[0.25em] text-stone-400">
                  Experience
                </dt>
                <dd className="mt-1 flex items-end justify-between gap-3">
                  <strong className="text-xl">6 months</strong>
                  <span className="text-sm text-stone-400">Web / UI / Apps</span>
                </dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <dt className="text-sm uppercase tracking-[0.25em] text-stone-400">
                  Featured
                </dt>
                <dd className="mt-1 flex items-end justify-between gap-3">
                  <strong className="text-xl">3 Projects</strong>
                  <span className="text-sm text-stone-400">Team &amp; Solo</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
            <strong className="block text-sm uppercase tracking-[0.25em] text-emerald-400">
              Skills
            </strong>
            <p className="mt-2 leading-7 text-stone-300">
              HTML · CSS · JS · React · Figma · UX Design
            </p>
          </div>
        </div>
      </article>

      <article className="rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-2xl shadow-black/15 backdrop-blur-xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em] text-stone-400">
          <span>Daryll Masapa</span>
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          <span>Web Developer • Designer • Programmer</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          The Project of
          <br />
          Daryll Masapa
        </h1>

        <div className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
          <p>
            Throughout my college journey, I successfully completed a variety of
            projects that enhanced my skills in technology, design, and
            problem-solving. These include fully functional applications,
            interactive prototypes, and research-based outputs.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
          >
            See Featured Works
          </a>
          <button
            type="button"
            onClick={openContactModal}
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Contact Me
          </button>
        </div>
      </article>
    </section>
  )
}
