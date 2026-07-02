'use client'

import { SafeImage } from '../../app/back_end/portfolio_back_end'

export default function Carousel3D({
  isGrabbingCertificates,
  certificateRotationRef,
  certificateCardHeight,
  certificateCardWidth,
  certificateOffset,
  isAutoSpinPaused,
  spinDirection,
  certificates,
  certificateAngle,
  certificateRadius,
  suppressCertificateClickRef,
  openCertificate,
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-10 [perspective:1400px] md:px-14">
      <div
        ref={certificateRotationRef}
        className={`relative touch-none [transform-style:preserve-3d] ${
          isGrabbingCertificates ? 'cursor-grabbing transition-none' : 'cursor-grab transition-transform duration-700 ease-out'
        }`}
        style={{
          height: `${certificateCardHeight}px`,
          width: `${certificateCardWidth}px`,
          transform: `rotateY(${certificateOffset}deg)`,
        }}
      >
        <div
          className="relative [transform-style:preserve-3d]"
          style={{
            height: `${certificateCardHeight}px`,
            width: `${certificateCardWidth}px`,
            animation: 'certificateSpin 24s linear infinite',
            animationDirection: spinDirection,
            animationPlayState: isAutoSpinPaused ? 'paused' : 'running',
          }}
        >
          {certificates.map((certificate, index) => (
            <button
              key={certificate.title}
              type="button"
              onClick={() => {
                if (suppressCertificateClickRef.current) {
                  return
                }
                openCertificate(certificate)
              }}
              className="absolute left-0 top-0 select-none overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] outline-none transition hover:scale-[1.02]"
              style={{
                height: `${certificateCardHeight}px`,
                width: `${certificateCardWidth}px`,
                transform: `rotateY(${index * certificateAngle}deg) translateZ(${certificateRadius}px)`,
              }}
            >
              <div className="relative h-full w-full">
                <SafeImage
                  src={certificate.src}
                  alt={certificate.title}
                  label={certificate.title}
                  draggable={false}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
