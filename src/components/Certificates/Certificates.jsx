'use client'

import Carousel3D from '../Carousel3D/Carousel3D'

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
  certificates,
  certificateRadius,
  suppressCertificateClickRef,
  openCertificate,
}) {
  return (
    <section id="achievements" className="mt-10 mb-10 scroll-mt-32">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Certificates</h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => adjustCertificateOffset(certificateAngle)}
            className="rounded-full border border-white/15 px-4 py-2 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => adjustCertificateOffset(-certificateAngle)}
            className="rounded-full border border-white/15 px-4 py-2 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Next
          </button>
        </div>
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
          certificates={certificates}
          certificateAngle={certificateAngle}
          certificateRadius={certificateRadius}
          suppressCertificateClickRef={suppressCertificateClickRef}
          openCertificate={openCertificate}
        />
      </div>
    </section>
  )
}
