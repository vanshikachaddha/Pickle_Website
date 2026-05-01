'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6">
      {/* Background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-lime-400/20 blur-3xl"
      />

      {/* Pickleball SVG decoration */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <PickleballSVG />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-lime-600 bg-lime-50 border border-lime-200 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
          Now in Open Beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-zinc-900 leading-none mb-6"
        >
          Play
          <br />
          <span className="text-lime-500">Pickle.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          The virtual pickleball experience that feels real. Play online, sharpen your skills, and climb the global ranks — anytime, anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#play"
            className="group flex items-center gap-2 bg-lime-500 text-zinc-900 font-semibold text-base px-8 py-4 rounded-full hover:bg-lime-400 transition-all duration-200 shadow-lg shadow-lime-200"
          >
            Play for Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#preview"
            className="text-zinc-700 font-medium text-base px-8 py-4 rounded-full border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-200"
          >
            See the game
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex items-center justify-center gap-12 text-center"
        >
          {[
            { value: '50K+', label: 'Active Players' },
            { value: '2M+', label: 'Matches Played' },
            { value: '4.9', label: 'App Store Rating' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-zinc-900">{value}</p>
              <p className="text-sm text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs text-zinc-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-zinc-300 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function PickleballSVG() {
  return (
    <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="170" cy="170" r="160" fill="#F7FDE8" stroke="#84CC16" strokeWidth="3" />
      <circle cx="170" cy="170" r="130" fill="none" stroke="#84CC16" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.4" />
      {/* Holes pattern - simplified */}
      {[
        [120, 90], [170, 75], [220, 90], [250, 130], [260, 175],
        [250, 220], [220, 255], [170, 265], [120, 255], [90, 220],
        [80, 175], [90, 130],
        [145, 145], [195, 145], [145, 200], [195, 200], [170, 170],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="10" fill="white" stroke="#84CC16" strokeWidth="1.5" />
      ))}
    </svg>
  )
}
