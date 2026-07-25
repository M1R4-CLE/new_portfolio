import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from 'lenis/react'

export default function ResumeModal({ isOpen, onClose }) {
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

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#120F17] shadow-2xl shadow-emerald-500/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div>
                <h2 className="text-2xl font-bold text-white">Curriculum Vitae</h2>
                <p className="text-sm text-stone-400">My professional resume.</p>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="/Cv/MY CV.pdf" 
                  download
                  className="flex items-center gap-2 rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-stone-400 transition hover:bg-white/20 hover:text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-white/5 p-4 md:p-6 overflow-hidden">
              <iframe 
                src="/Cv/MY CV.pdf" 
                className="w-full h-full rounded-2xl border border-white/10 bg-stone-100"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
