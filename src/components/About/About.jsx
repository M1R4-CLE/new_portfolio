'use client'

import BorderGlow from '../BorderGlow'
import SpotlightCard from '../SpotlightCard'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      id="about"
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <BorderGlow
        className="mt-10 p-[2px] transition-transform duration-300 hover:-translate-y-1"
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
          className="rounded-[calc(2rem-2px)] p-8 lg:p-12 border border-transparent transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
        >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          About me
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
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
      </BorderGlow>
    </motion.div>
  )
}