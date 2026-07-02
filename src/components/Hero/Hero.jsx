'use client'

import { SafeImage } from '../../app/back_end/portfolio_back_end'
import { motion } from 'framer-motion'
import SpotlightCard from '../SpotlightCard'
import BorderGlow from '../BorderGlow'

export default function Hero({ openContactModal }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] items-stretch"
    >
      <BorderGlow
        className="h-full p-[2px] transition-transform duration-300 hover:-translate-y-1"
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={32}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
      >
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.18)"
          className="h-full rounded-[calc(2rem-2px)] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/15 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
        >
        <div className="mx-auto mb-6 h-56 w-56 overflow-hidden rounded-[2rem] bg-black/20">
          <div className="relative h-full w-full">
            <SafeImage
              src="/pfp/NEW PFP.png"
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
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shrink-0">
                  <img src="https://mcm.edu.ph/wp-content/uploads/2022/06/Logo-Final_noname_1.png" alt="MCM" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-stone-100">Mapua Malayan Colleges Mindanao</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Second Year BS Information System</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] text-stone-300">Currently Studying</span>
                  </div>
                </div>
                <div className="text-purple-400 opacity-80 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/15 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                <dt className="text-sm uppercase tracking-[0.25em] text-stone-400">
                  Experience
                </dt>
                <dd className="mt-1 flex items-end justify-between gap-3">
                  <strong className="text-xl">6 months</strong>
                  <span className="text-sm text-stone-400">Web / UI / Apps</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/15 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.1)]">
            <strong className="block text-sm uppercase tracking-[0.25em] text-emerald-400">
              Skills
            </strong>
            <p className="mt-2 leading-7 text-stone-300">
              HTML · CSS · JS · React · Figma · UX Design
            </p>
          </div>

          <a
            href="/cv.pdf"
            download="Daryll_Dave_R._Masapa_CV.pdf"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-400 hover:text-black"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
        </SpotlightCard>
      </BorderGlow>

      <BorderGlow
        className="h-full p-[2px] transition-transform duration-300 hover:-translate-y-1"
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={32}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
      >
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.18)"
          className="h-full rounded-[calc(2rem-2px)] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/15 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
        >
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
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]"
          >
            See Featured Works
          </a>
          <button
            type="button"
            onClick={openContactModal}
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition-all hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 active:scale-95 hover:bg-emerald-400/10"
          >
            Contact Me
          </button>
        </div>
        </SpotlightCard>
      </BorderGlow>
    </motion.section>
  )
}
