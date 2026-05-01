'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-zinc-900">
            pickle
            <span className="text-lime-500">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#features" className="hover:text-zinc-900 transition-colors duration-200">Features</a>
          <a href="#preview" className="hover:text-zinc-900 transition-colors duration-200">The Game</a>
          <a href="#how-it-works" className="hover:text-zinc-900 transition-colors duration-200">How It Works</a>
        </div>

        <a
          href="#play"
          className="bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-colors duration-200"
        >
          Play Free
        </a>
      </div>
    </motion.nav>
  )
}
