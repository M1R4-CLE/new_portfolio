'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import SpotlightCard from '../SpotlightCard'
import BorderGlow from '../BorderGlow'

const SkillBadge = ({ name, icon }) => (
  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition-all hover:bg-white/10 hover:scale-105">
    <div className="flex h-5 w-5 items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-semibold text-stone-300">[{name}]</span>
  </div>
)

const Category = ({ title, skills }) => (
  <div className="mt-8">
    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wide text-emerald-400">
      <Check size={16} className="text-emerald-400" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  </div>
)

export default function Toolbox() {
  const [hasStarted, setHasStarted] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const terminalLines = [
    { text: "PS C:\\Users\\M1r4cle> npm run skills", color: "text-stone-300" },
    { text: "Compiling...", color: "text-stone-400" },
    { text: "✓ Dependencies installed.", color: "text-emerald-400" },
    { text: "✓ Build successful.", color: "text-emerald-400" },
    { text: "Loading developer profile...", color: "text-stone-400", mt: true },
    { text: "✓ Portfolio ready.", color: "text-emerald-400" },
    { text: "✓ Ready.", color: "text-emerald-400" },
    { text: "Available Technologies", color: "text-white font-semibold", mt: true }
  ]

  useEffect(() => {
    if (!hasStarted) return
    if (textIndex >= terminalLines.length) {
      setIsFinished(true)
      return
    }

    const currentLine = terminalLines[textIndex]
    
    if (charIndex < currentLine.text.length) {
      const timer = setTimeout(() => {
        setCharIndex(c => c + 1)
      }, textIndex === 0 ? 40 : 15) // Type first line slower, others faster
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setTextIndex(t => t + 1)
        setCharIndex(0)
      }, textIndex === 0 ? 400 : 150) // Pause longer after the first command
      return () => clearTimeout(timer)
    }
  }, [hasStarted, textIndex, charIndex])

  const programming = [
    { name: 'C++', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-full w-full object-contain" /> },
    { name: 'C#', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="h-full w-full object-contain" /> },
    { name: 'Java', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="h-full w-full object-contain" /> },
    { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-full w-full object-contain rounded" /> },
    { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-full w-full object-contain rounded" /> },
    { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-full w-full object-contain" /> },
    { name: 'Kotlin', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="h-full w-full object-contain" /> },
    { name: 'Flutter', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="h-full w-full object-contain" /> },
  ]

  const frontend = [
    { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-full w-full object-contain" /> },
    { name: 'Next.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-full w-full object-contain invert" /> },
    { name: 'Tailwind CSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="h-full w-full object-contain" /> },
  ]

  const backend = [
    { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-full w-full object-contain" /> },
    { name: 'Firebase', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" className="h-full w-full object-contain" /> },
    { name: 'MySQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="h-full w-full object-contain" /> },
    { name: 'Supabase', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" className="h-full w-full object-contain" /> },
  ]

  const devTools = [
    { name: 'GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-full w-full object-contain invert" /> },
    { name: 'Visual Studio', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" className="h-full w-full object-contain" /> },
    { name: 'VS Code', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="h-full w-full object-contain" /> },
    { name: 'Android Studio', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" className="h-full w-full object-contain" /> },
    { name: 'Arduino IDE', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" alt="Arduino IDE" className="h-full w-full object-contain" /> },
    { name: 'Cursor', icon: <img src="/cursor.png" alt="Cursor" className="h-full w-full object-contain mix-blend-screen" /> },
    { name: 'Ollama', icon: <img src="/ollama.png" alt="Ollama" className="h-full w-full object-contain invert" /> },
    { name: 'Antigravity', icon: <img src="/antigravity.png" alt="Antigravity" className="h-full w-full object-contain mix-blend-screen" /> }
  ]

  return (
    <motion.section
      id="skills"
      className="scroll-mt-32"
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      <SpotlightCard
        spotlightColor="rgba(0, 229, 255, 0.18)"
        className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-2xl shadow-black/15 lg:p-12 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] hover:-translate-y-1"
      >
      <div className="mb-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-stone-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Developer Skills
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
          Developer Toolbox
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-stone-400">
          A collection of the languages, frameworks, databases, and tools I use to
          transform ideas into real-world software.
        </p>
      </div>

      <div className="mb-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/15">
        <div className="flex items-center justify-between border-b border-white/10 bg-black/40 pr-2 pl-4 py-1.5">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span className="text-xs font-medium text-stone-300">Windows PowerShell</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="flex h-7 w-10 items-center justify-center rounded text-stone-400 transition-colors hover:bg-white/10">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"><line x1="0" y1="5" x2="10" y2="5" strokeWidth="1"/></svg>
            </button>
            <button className="flex h-7 w-10 items-center justify-center rounded text-stone-400 transition-colors hover:bg-white/10">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"><rect x="1" y="1" width="8" height="8" strokeWidth="1"/></svg>
            </button>
            <button className="flex h-7 w-10 items-center justify-center rounded text-stone-400 transition-colors hover:bg-red-500 hover:text-white">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"><path d="M1 1L9 9M9 1L1 9" strokeWidth="1"/></svg>
            </button>
          </div>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed sm:text-base min-h-[240px]">
          {terminalLines.map((line, i) => {
            if (i > textIndex) return null
            const isCurrentLine = i === textIndex
            const displayedText = isCurrentLine ? line.text.slice(0, charIndex) : line.text
            
            return (
              <p key={i} className={`${line.color} ${line.mt ? 'mt-2' : ''}`}>
                {displayedText}
                {isCurrentLine && !isFinished && <span className="animate-pulse">_</span>}
              </p>
            )
          })}
          {isFinished && (
            <p className="animate-pulse font-semibold text-white">_</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Category title="Programming Languages" skills={programming} />
            <Category title="Frontend" skills={frontend} />
            <Category title="Backend & Database" skills={backend} />
            <Category title="Development Tools" skills={devTools} />
          </motion.div>
        )}
      </AnimatePresence>
      </SpotlightCard>
    </motion.section>
  )
}
