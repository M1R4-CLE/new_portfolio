'use client'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-stone-500">
      <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Daryll Masapa. All rights reserved.</p>
    </footer>
  )
}
