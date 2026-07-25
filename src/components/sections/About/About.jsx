'use client'

import { SafeImage } from '../../../app/back_end/portfolio_back_end'
import BorderGlow from '../../ui/BorderGlow'
import SpotlightCard from '../../ui/SpotlightCard'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <SpotlightCard
        spotlightColor="rgba(0, 229, 255, 0.18)"
        className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-2xl shadow-black/15 lg:p-12 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] hover:-translate-y-1"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          About me
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl text-white">
          Hi, I&apos;m Daryll Dave R. Masapa - also known as Mira
        </h2>
        <p className="mt-3 text-lg text-stone-300">
          BSIS - 2nd Year - Aspiring Web Developer, Data Analyst and Information
          Systems Student
        </p>
        <p className="mt-6 max-w-4xl leading-8 text-stone-300">
          6 months of experience in HTML, CSS, JavaScript, Java, Python, and C++.
          Throughout my college journey, I successfully completed a variety of
          projects that enhanced my skills in technology, design, and
          problem-solving. These include fully functional applications,
          interactive prototypes, and research-based outputs.
        </p>
      </SpotlightCard>
    </section>
  )
}