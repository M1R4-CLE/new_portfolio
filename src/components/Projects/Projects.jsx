'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects({
  visibleProjects,
  openProject,
  previousProject,
  nextProject,
}) {
  const [direction, setDirection] = useState(1)
  const [localIndex, setLocalIndex] = useState(0)

  const handleNext = () => {
    setDirection(1)
    setLocalIndex(prev => prev + 1)
    nextProject()
  }

  const handlePrev = () => {
    setDirection(-1)
    setLocalIndex(prev => prev - 1)
    previousProject()
  }

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
      }
    },
  }

  return (
    <section id="projects" className="mt-10 scroll-mt-32 overflow-hidden">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full border border-white/15 px-4 py-2 text-2xl leading-none transition hover:border-emerald-400 hover:text-emerald-400 z-10"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-white/15 px-4 py-2 text-2xl leading-none transition hover:border-emerald-400 hover:text-emerald-400 z-10"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="relative min-h-[500px] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-6 w-full h-full relative" style={{ perspective: '1000px' }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {visibleProjects.slice(0, 3).map((project, i) => (
              <motion.div
                key={`${project.title}-${project.linkUrl || 'local'}-${localIndex + i}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="w-full lg:w-[calc(33.333%-16px)] flex-shrink-0"
                layout
              >
                <ProjectCard
                  project={project}
                  onClick={() => openProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
