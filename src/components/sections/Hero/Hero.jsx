'use client'

import { SafeImage } from '../../../app/back_end/portfolio_back_end'
import { motion } from 'framer-motion'
import SpotlightCard from '../../ui/SpotlightCard'
import BorderGlow from '../../ui/BorderGlow'
import { useState, useEffect } from 'react'

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
        }
      }, 20); // Fast typing speed
      return () => clearInterval(intervalId);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-[0.1em] h-[1em] bg-emerald-400 ml-1 animate-pulse align-middle" style={{ animationDuration: '0.8s' }}></span>
    </span>
  );
}

export default function Hero({ openContactModal }) {
  return (
    <section className="grid gap-16 lg:grid-cols-2 items-center min-h-[85vh]">
      {/* Left Column: Typography and Call to Actions */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          daryll masapa • web developer
        </div>

        <h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl lg:text-[5rem] lg:leading-[1.1]">
          The Project of<br />
          <span className="text-stone-400">Daryll Masapa.</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-stone-400">
          <TypewriterText 
            delay={500}
            text="Throughout my college journey, I successfully completed a variety of projects that enhanced my skills in technology, design, and problem-solving. These include fully functional applications, interactive prototypes, and research-based outputs." 
          />
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]"
          >
            See Featured Works &rarr;
          </a>
          <button
            type="button"
            onClick={openContactModal}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:text-emerald-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Column: Profile Content without the outer box */}
      <div className="w-full max-w-md mx-auto lg:ml-auto">
        <div className="mx-auto mb-8 h-48 w-48 overflow-hidden rounded-3xl bg-black/20">
          <div className="relative h-full w-full">
            <SafeImage
              src="/pfp/NEW PFP.png"
              alt="Profile Picture"
              label="Profile"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-emerald-400">Quick Info</h3>
            <dl className="space-y-3">
              <div className="rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-sm p-4 flex items-center gap-4">
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

              <div className="rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-sm p-4">
                <dt className="text-sm uppercase tracking-[0.25em] text-stone-400">
                  Experience
                </dt>
                <dd className="mt-1 flex items-end justify-between gap-3">
                  <strong className="text-xl text-stone-100">6 months</strong>
                  <span className="text-sm text-stone-400">Web / UI / Apps</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-sm p-4">
            <strong className="block text-sm uppercase tracking-[0.25em] text-emerald-400">
              Skills
            </strong>
            <p className="mt-2 text-stone-300">
              HTML · CSS · JS · React · Figma · UX Design
            </p>
          </div>

          <a
            href="/cv.pdf"
            download="Daryll_Dave_R._Masapa_CV.pdf"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-400 hover:text-black"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
