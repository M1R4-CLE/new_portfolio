'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { certificates } from './data'
import { projects } from '../../data/projects'

export function SafeImage({ src, alt, label, fill = true, width, height, className = '', ...props }) {
  const resolvedAlt = alt || label || ''

  if (fill) {
    return <Image src={src} alt={resolvedAlt} className={className} fill {...props} />
  }

  return <Image src={src} alt={resolvedAlt} className={className} width={width || 0} height={height || 0} {...props} />
}

const ICONS = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12 .5C5.73.5.75 5.59.75 12.05c0 5.16 3.29 9.53 7.86 11.08.58.11.79-.26.79-.58 0-.29-.01-1.06-.02-2.08-3.2.71-3.88-1.57-3.88-1.57-.52-1.34-1.27-1.7-1.27-1.7-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.03 1.8 2.7 1.28 3.36.98.1-.76.4-1.28.73-1.57-2.56-.3-5.25-1.31-5.25-5.83 0-1.29.45-2.35 1.2-3.18-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.22 1.22a10.83 10.83 0 0 1 5.86 0c2.23-1.54 3.21-1.22 3.21-1.22.64 1.63.24 2.83.12 3.13.75.83 1.2 1.89 1.2 3.18 0 4.54-2.69 5.53-5.26 5.82.41.36.78 1.08.78 2.17 0 1.57-.01 2.84-.01 3.23 0 .32.2.7.79.58 4.56-1.56 7.85-5.92 7.85-11.08C23.25 5.59 18.27.5 12 .5Z"/></svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M13.5 22v-8.1h2.72l.4-3.16H13.5V8.72c0-.91.25-1.53 1.54-1.53h1.64V4.36c-.28-.04-1.24-.13-2.36-.13-2.33 0-3.92 1.42-3.92 4.03v2.48H8v3.16h2.4V22h3.1Z"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM4.98 8.48h3.9V22h-3.9V8.48Zm5.97 0h3.74v1.85h.05c.52-.98 1.78-2.02 3.66-2.02 3.92 0 4.65 2.58 4.65 5.93V22h-3.9v-7.04c0-1.68-.03-3.83-2.34-3.83-2.34 0-2.7 1.83-2.7 3.71V22h-3.9V8.48Z"/></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.5A4 4 0 0 0 3.5 7.5v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9ZM12 7.1A4.9 4.9 0 1 1 12 16.9 4.9 4.9 0 0 1 12 7.1Zm0 1.5a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.15-2.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>
  )
}

export function SocialIcon({ icon, className = '' }) {
  const node = ICONS[icon] || null
  return <span className={className}>{node}</span>
}

export function usePortfolioState({
  initialLightTheme = false,
  themeStorageKey = 'portfolio-light-theme',
  autoRotateMs = 2500,
} = {}) {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return initialLightTheme
    }

    const stored = window.localStorage.getItem(themeStorageKey)
    return stored != null ? stored === 'true' : initialLightTheme
  })
  const [activeCertificate, setActiveCertificate] = useState(0)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [projectIndex, setProjectIndex] = useState(0)



  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(themeStorageKey, String(isLightTheme))
  }, [isLightTheme, themeStorageKey])

  useEffect(() => {
    if (!projects.length) return undefined
    if (!autoRotateMs) return undefined

    const timer = window.setInterval(() => {
      setProjectIndex((current) => (current + 1) % projects.length)
    }, autoRotateMs)

    return () => window.clearInterval(timer)
  }, [autoRotateMs])

  const visibleProjects = useMemo(() => {
    if (!projects.length) return []
    const start = projectIndex % projects.length
    return [...projects.slice(start), ...projects.slice(0, start)]
  }, [projectIndex])

  const certificateAngle = certificates.length ? 360 / certificates.length : 0

  const toggleTheme = () => setIsLightTheme((current) => !current)
  const openCertificate = (certificate) => setSelectedCertificate(certificate)
  const closeCertificate = () => setSelectedCertificate(null)
  const openProject = (project) => setSelectedProject(project)
  const closeProject = () => setSelectedProject(null)
  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)
  const nextProject = () => setProjectIndex((current) => (current + 1) % projects.length)
  const previousProject = () => setProjectIndex((current) => (current - 1 + projects.length) % projects.length)

  return {
    isLightTheme,
    toggleTheme,
    activeCertificate,
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
  }
}



