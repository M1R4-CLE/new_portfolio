import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SafeImage } from '../../../app/back_end/portfolio_back_end'
import { useLenis } from 'lenis/react'

const ALL_CERTIFICATES = [
  "/certificates_images/View More/Coursera OVSENVEQ68A7-1.png",
  "/certificates_images/View More/Coursera U9G5TP7U65CD-1.png",
  "/certificates_images/View More/Coursera UOIKEUXL11ON-1.png",
  "/certificates_images/View More/Coursera XWL3Z1WBDILU-1.png",
  "/certificates_images/View More/Coursera Z7722I3BQ8FQ-1.png",
  "/certificates_images/View More/Daryll Dave R Masapa _BCC Mindanao 2024 Cert original-1.png",
  "/certificates_images/View More/Masapa Coursera PVKMZA06QHE6-1.png",
  "/certificates_images/View More/Masapa.jpg",
  "/certificates_images/View More/MASAPA.png",
  "/certificates_images/View More/MasapaDaryll-16181-A121-IT101-1-ComputerProgrammingConcepts1-1.png",
  "/certificates_images/View More/MasapaDaryllDaveR-18163-1.png",
  "/certificates_images/View More/MasapaDaryllDaveR-21549-1.png",
  "/certificates_images/View More/30_C++ Certificate-1.png",
  "/certificates_images/View More/49574ec7-378d-4a94-b2a9-eb7eb675fa0e-1.png",
  "/certificates_images/View More/462581145_1262972181567657_2012665223761546684_n.jpg",
  "/certificates_images/View More/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260530-32-j2z0i-1.png",
  "/certificates_images/View More/Cert292221111267-1.png",
  "/certificates_images/View More/Coursera 5SBYXT8X0ZDR-1.png",
  "/certificates_images/View More/Coursera DT6Z3RWXQB4H-1.png",
  "/certificates_images/View More/Coursera FX23HZJKOZO3-1.png",
  "/certificates_images/View More/Coursera JRBN74CTF1GD-1.png",
  "/certificates_images/View More/Coursera MNXO0ORJHMAE-1.png"
]

function CertificateCard({ certPath, idx }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-900/10 bg-white dark:border-white/10 dark:bg-white/5 transition-all hover:scale-[1.02] hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]">
      
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-stone-800/50 animate-pulse">
          <div className="h-12 w-12 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 animate-spin" />
        </div>
      )}

      <SafeImage
        src={certPath}
        alt={`Certificate ${idx + 1}`}
        label={`Certificate ${idx + 1}`}
        onLoad={() => setIsLoading(false)}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
      />
      
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <a 
          href={certPath} 
          target="_blank" 
          rel="noreferrer"
          className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
        >
          View Full
        </a>
      </div>
    </div>
  )
}

export default function AllCertificatesModal({ isOpen, onClose }) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    if (isOpen) {
      lenis.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis.start()
      document.body.style.overflow = ''
    }
    return () => {
      lenis.start()
      document.body.style.overflow = ''
    }
  }, [isOpen, lenis])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          onClick={onClose}
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative flex h-[85vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-stone-900/10 bg-white dark:border-white/10 dark:bg-[#120F17] shadow-2xl shadow-emerald-500/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-900/10 bg-stone-50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-md">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white">All Certificates</h2>
              <p className="text-sm text-stone-600 dark:text-stone-400">A complete collection of my achievements and certifications.</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/10 dark:bg-white/10 text-stone-600 dark:text-stone-400 transition hover:bg-stone-900/20 dark:hover:bg-white/20 hover:text-stone-900 dark:hover:text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Grid Content */}
          <div 
            ref={wrapperRef}
            className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
            data-lenis-prevent="true"
          >
            <div ref={contentRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ALL_CERTIFICATES.map((certPath, idx) => (
                <CertificateCard key={idx} certPath={certPath} idx={idx} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
