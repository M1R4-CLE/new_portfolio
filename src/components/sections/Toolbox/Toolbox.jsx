'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import SpotlightCard from '../../ui/SpotlightCard'
import BorderGlow from '../../ui/BorderGlow'
import { SafeImage } from '../../../app/back_end/portfolio_back_end'

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
    { name: 'Cursor', icon: <img src="https://cdn.simpleicons.org/cursor/white" alt="Cursor" className="h-full w-full object-contain" /> },
    { name: 'Ollama', icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">
        <title>Ollama</title>
        <ellipse cx="12" cy="13" rx="7.5" ry="9" fill="white" />
        <path fill="black" d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z" />
      </svg>
    ) },
    { name: 'Antigravity', icon: <img src="https://antigravity.google/assets/image/antigravity-logo.png" alt="Antigravity" className="h-full w-full object-contain" /> }
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
