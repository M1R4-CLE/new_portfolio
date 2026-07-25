'use client'

import { useState } from 'react'
import Carousel3D from '../../ui/Carousel3D/Carousel3D'
import AllCertificatesModal from './AllCertificatesModal'

export default function Certificates({
  adjustCertificateOffset,
  certificateAngle,
  handleCertificatePointerDown,
  isGrabbingCertificates,
  certificateRotationRef,
  certificateCardHeight,
  certificateCardWidth,
  certificateOffset,
  isAutoSpinPaused,
  spinDirection,
  certificates,
  certificateRadius,
  suppressCertificateClickRef,
  openCertificate,
}) {
  const [isAllModalOpen, setIsAllModalOpen] = useState(false)

  return (
    <section id="achievements" className="mt-10 mb-10 scroll-mt-24">
      <div className="mb-6 flex items-center">
        <h2 className="text-3xl font-semibold">Certificates</h2>
      </div>

      <div
        className="relative h-[47rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-xl"
        onPointerDown={handleCertificatePointerDown}
      >
        <div className="absolute inset-x-0 bottom-12 mx-auto h-32 w-[84%] rounded-full bg-black/30 blur-3xl" />
        <Carousel3D
          isGrabbingCertificates={isGrabbingCertificates}
          certificateRotationRef={certificateRotationRef}
          certificateCardHeight={certificateCardHeight}
          certificateCardWidth={certificateCardWidth}
          certificateOffset={certificateOffset}
          isAutoSpinPaused={isAutoSpinPaused}
          spinDirection={spinDirection}
          certificates={certificates}
          certificateAngle={certificateAngle}
          certificateRadius={certificateRadius}
          suppressCertificateClickRef={suppressCertificateClickRef}
          openCertificate={openCertificate}
        />
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <button 
            onClick={() => setIsAllModalOpen(true)}
            className="rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-8 py-3 font-medium text-white shadow-lg transition hover:bg-white/10 hover:border-emerald-400 hover:text-emerald-400"
          >
            View More
          </button>
        </div>
      </div>

      <AllCertificatesModal 
        isOpen={isAllModalOpen} 
        onClose={() => setIsAllModalOpen(false)} 
      />
    </section>
  )
}
