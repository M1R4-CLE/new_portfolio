'use client'

import BorderGlow from '../BorderGlow'

export default function About() {
  return (
    <BorderGlow
      className="mt-10"
      glowColor="40 80 80"
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
    >
      <section className="rounded-[2rem] p-8">
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
      </section>
    </BorderGlow>
  )
}