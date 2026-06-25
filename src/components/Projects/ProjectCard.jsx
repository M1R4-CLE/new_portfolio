'use client'

import { SafeImage } from '../../app/back_end/portfolio_back_end'
import SpotlightCard from '../SpotlightCard'
import BorderGlow from '../BorderGlow'

export default function ProjectCard({ project, onClick }) {
  return (
    <BorderGlow
      className="h-full"
      glowColor="40 80 80"
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
    >
      <SpotlightCard
        onClick={onClick}
        spotlightColor="rgba(0, 229, 255, 0.18)"
        className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/8 p-4 text-left shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-emerald-400/50 focus:outline-none"
      >
        <figure className="relative h-56 overflow-hidden rounded-[1.25rem] bg-black/15 p-4">
          <SafeImage
            src={project.src}
            alt={project.title}
            label={project.title}
            className="object-contain p-2"
          />
        </figure>

        <div className="flex flex-1 flex-col pt-5">
          <h3 className="min-h-[4rem] text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 min-h-[8.5rem] leading-7 text-stone-300">
            {project.description}
          </p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <li
                key={`${project.title}-${tag}`}
                className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </BorderGlow>
  )
}
