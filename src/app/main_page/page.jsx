'use client'

import { useEffect, useRef, useState } from 'react'
import { certificates } from '../../data/certificates'
import { socials } from '../../data/socials'
import {
  SafeImage,
  usePortfolioState,
} from '../back_end/portfolio_back_end'

// Import modularized components
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Certificates from '../../components/Certificates/Certificates'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import LineWaves from '../../components/LineWaves/LineWaves'
import Toolbox from '../../components/Toolbox/Toolbox'

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close contact modal"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-stone-950 p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl transition hover:border-emerald-400 hover:text-emerald-400"
        >
          &#10005;
        </button>
        <h2 className="text-3xl font-semibold text-emerald-400">Contact Me</h2>
        <p className="mt-3 text-stone-300">
          Reach out for a project, collaboration, or quick conversation.
        </p>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-500"
            placeholder="Your name"
            aria-label="Your name"
          />
          <input
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-500"
            placeholder="Email address"
            type="email"
            aria-label="Email address"
          />
          <textarea
            className="min-h-40 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-500 md:col-span-2"
            placeholder="Message"
            aria-label="Message"
          />
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function MainPage() {
  const {
    isLightTheme,
    toggleTheme,
    visibleProjects,
    selectedCertificate,
    selectedProject,
    isContactModalOpen,
    openCertificate,
    closeCertificate,
    openProject,
    closeProject,
    openContactModal,
    closeContactModal,
    nextProject,
    previousProject,
    certificateAngle,
  } = usePortfolioState({
    initialLightTheme: false,
    themeStorageKey: 'main-page-light-theme',
    autoRotateMs: null,
  })

  const [certificateOffset, setCertificateOffset] = useState(0)
  const [isGrabbingCertificates, setIsGrabbingCertificates] = useState(false)
  const certificateRadius = 600
  const certificateCardWidth = 480
  const certificateCardHeight = 380
  const [isAutoSpinPaused, setIsAutoSpinPaused] = useState(false)
  const [spinDirection, setSpinDirection] = useState('normal')
  const certificateOffsetRef = useRef(0)
  const certificateRotationRef = useRef(null)
  const dragStateRef = useRef({
    isDragging: false,
    lastClientX: 0,
    totalDeltaX: 0,
    lastDeltaX: 0,
    cleanup: null,
  })
  const suppressCertificateClickRef = useRef(false)

  const handleCertificatePointerDown = (event) => {
    if (dragStateRef.current.cleanup) {
      dragStateRef.current.cleanup()
    }

    dragStateRef.current.isDragging = true
    dragStateRef.current.lastClientX = event.clientX
    dragStateRef.current.totalDeltaX = 0
    setIsGrabbingCertificates(true)
    setIsAutoSpinPaused(true)

    const handlePointerMove = (moveEvent) => {
      if (!dragStateRef.current.isDragging) {
        return
      }

      const deltaX = moveEvent.clientX - dragStateRef.current.lastClientX
      dragStateRef.current.lastClientX = moveEvent.clientX
      dragStateRef.current.totalDeltaX += Math.abs(deltaX)
      dragStateRef.current.lastDeltaX = deltaX
      certificateOffsetRef.current += deltaX * 0.25

      if (certificateRotationRef.current) {
        certificateRotationRef.current.style.transform = `rotateY(${certificateOffsetRef.current}deg)`
      }
    }

    const handlePointerEnd = () => {
      dragStateRef.current.isDragging = false
      setIsGrabbingCertificates(false)
      setIsAutoSpinPaused(false)
      setCertificateOffset(certificateOffsetRef.current)
      
      if (dragStateRef.current.lastDeltaX > 0) {
        setSpinDirection('normal')
      } else if (dragStateRef.current.lastDeltaX < 0) {
        setSpinDirection('reverse')
      }

      if (dragStateRef.current.totalDeltaX > 6) {
        suppressCertificateClickRef.current = true
        window.setTimeout(() => {
          suppressCertificateClickRef.current = false
        }, 120)
      }

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerEnd)
      window.removeEventListener('pointercancel', handlePointerEnd)
      dragStateRef.current.cleanup = null
    }

    dragStateRef.current.cleanup = handlePointerEnd
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerEnd)
    window.addEventListener('pointercancel', handlePointerEnd)
  }

  const adjustCertificateOffset = (delta) => {
    certificateOffsetRef.current += delta

    if (certificateRotationRef.current) {
      certificateRotationRef.current.style.transform = `rotateY(${certificateOffsetRef.current}deg)`
    }

    setCertificateOffset(certificateOffsetRef.current)
    
    if (delta > 0) {
      setSpinDirection('normal')
    } else if (delta < 0) {
      setSpinDirection('reverse')
    }
  }

  useEffect(() => {
    const dragRef = dragStateRef

    return () => {
      if (dragRef.current.cleanup) {
        dragRef.current.cleanup()
      }
    }
  }, [])

  useEffect(() => {
    certificateOffsetRef.current = certificateOffset

    if (certificateRotationRef.current) {
      certificateRotationRef.current.style.transform = `rotateY(${certificateOffset}deg)`
    }
  }, [certificateOffset])

  return (
    <main
      className={`relative min-h-screen transition-colors duration-300 ${
        !isLightTheme
          ? 'bg-[radial-gradient(circle_at_top,#151515,#070707_48%,#000000)] text-stone-100'
          : 'bg-[radial-gradient(circle_at_top,#fff6d6,#f6efe2_45%,#ebe6db)] text-stone-900'
      }`}
    >
      {/* Page-wide fixed LineWaves background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.2}
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
          enableMouseInteraction={false}
          mouseInfluence={0}
        />
      </div>

      <div className="relative z-10">
        <Navbar
          isLightTheme={isLightTheme}
          toggleTheme={toggleTheme}
          openContactModal={openContactModal}
        />

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 space-y-24">
          <Hero openContactModal={openContactModal} />

          <About />

          <Toolbox />

          <Certificates
            adjustCertificateOffset={adjustCertificateOffset}
            certificateAngle={certificateAngle}
            handleCertificatePointerDown={handleCertificatePointerDown}
            isGrabbingCertificates={isGrabbingCertificates}
            certificateRotationRef={certificateRotationRef}
            certificateCardHeight={certificateCardHeight}
            certificateCardWidth={certificateCardWidth}
            certificateOffset={certificateOffset}
            isAutoSpinPaused={isAutoSpinPaused}
            spinDirection={spinDirection}
            certificates={certificates}
            certificateRadius={certificateRadius}
            suppressCertificateClickRef={suppressCertificateClickRef}
            openCertificate={openCertificate}
          />

          <Projects
            visibleProjects={visibleProjects}
            openProject={openProject}
            previousProject={previousProject}
            nextProject={nextProject}
          />

          <Contact openContactModal={openContactModal} socials={socials} />

          <Footer />
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {selectedCertificate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close certificate"
            onClick={closeCertificate}
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 p-4 shadow-2xl">
            <button
              type="button"
              onClick={closeCertificate}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl transition-all hover:border-emerald-400 hover:text-emerald-400 hover:scale-110 active:scale-95"
            >
              &#10005;
            </button>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
              <SafeImage
                src={selectedCertificate.src}
                alt={selectedCertificate.title}
                label={selectedCertificate.title}
              />
            </div>
          </div>
        </div>
      ) : null}

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close project view"
            onClick={closeProject}
          />
          <div className="relative z-10 grid w-[95vw] max-w-[1400px] min-h-[650px] gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 p-10 shadow-2xl lg:grid-cols-[1.3fr_1fr]">
            <button
              type="button"
              onClick={closeProject}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl transition-all hover:border-emerald-400 hover:text-emerald-400 hover:scale-110 active:scale-95"
            >
              &#10005;
            </button>

            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-[1.5rem] bg-white/5">
              <SafeImage
                src={selectedProject.src}
                alt={selectedProject.title}
                label={selectedProject.title}
                className="object-contain p-6"
              />
            </div>

            <div className="flex flex-col justify-center max-h-[75vh] overflow-y-auto pr-4 py-4">
              <h2 className="text-4xl font-semibold">{selectedProject.title}</h2>
              <p className="mt-4 leading-8 text-stone-300 text-lg">{selectedProject.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <li
                    key={`${selectedProject.title}-${tag}`}
                    className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {selectedProject.linkUrl ? (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                    Project link
                  </p>
                  <a
                    href={selectedProject.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-lg font-semibold text-emerald-400 transition-all hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  >
                    {selectedProject.linkLabel || 'Open project'}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}
