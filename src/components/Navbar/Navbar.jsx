'use client'

import { motion } from 'framer-motion'
import { Sun, Moon, Asterisk } from 'lucide-react'

const Github = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const Linkedin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
import { useState } from 'react'
import { useLenis } from 'lenis/react'

export default function Navbar({ isLightTheme, toggleTheme, openContactModal }) {
  const [activeSection, setActiveSection] = useState('Home')
  const lenis = useLenis()

  const navLinks = [
    { name: 'Home', action: () => lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', action: openContactModal },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-[#151515]/80 px-4 py-2.5 shadow-2xl backdrop-blur-xl"
    >
      <nav className="flex items-center justify-between">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-400">
            <Asterisk size={20} />
          </div>
          <span className="font-bold tracking-wide text-white">MIRA</span>
        </div>

        {/* Center: Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href || '#'}
              onClick={(e) => {
                e.preventDefault()
                if (link.action) {
                  link.action()
                } else if (link.href) {
                  const el = document.querySelector(link.href)
                  if (el) {
                    if (lenis) {
                      // Let's remove the manual offset entirely so Lenis 
                      // can natively use the scroll-mt-32 class you already have!
                      lenis.scrollTo(el)
                    } else {
                      el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }
                setActiveSection(link.name)
              }}
              className={`relative text-sm font-medium transition-colors hover:text-white ${
                activeSection === link.name ? 'text-white' : 'text-stone-400'
              }`}
            >
              {link.name}
              {activeSection === link.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2.5 left-0 h-[2px] w-full bg-emerald-400"
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="text-stone-400 transition hover:text-emerald-400"
            aria-label="Toggle theme"
          >
            {isLightTheme ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="#" className="text-stone-400 transition hover:text-emerald-400">
            <Github size={20} />
          </a>
          <a href="#" className="text-stone-400 transition hover:text-emerald-400">
            <Linkedin size={20} />
          </a>
          <button className="ml-2 rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-emerald-300 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]">
            Resume
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
