'use client'

import { motion } from 'framer-motion'

export default function GamePreview() {
  return (
    <section id="preview" className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-lime-600 mb-4">
            The Game
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
            See Pickle in action.
          </h2>
          <p className="text-xl text-zinc-500 mt-4 max-w-xl mx-auto">
            A top-down perspective that puts you right in the kitchen.
          </p>
        </motion.div>

        {/* Court mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -top-10 blur-3xl bg-lime-400/20 rounded-full"
          />

          <div className="relative bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-900/30 p-8 md:p-16">
            {/* HUD overlay */}
            <div className="flex justify-between items-start mb-8 text-xs text-zinc-400 font-mono">
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-lg">11</span>
                <span>YOU</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                <span className="text-lime-400 font-semibold tracking-wider">GAME 2 · SERVE</span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-white font-bold text-lg">9</span>
                <span>OPP</span>
              </div>
            </div>

            {/* Court SVG */}
            <div className="flex justify-center">
              <CourtSVG />
            </div>

            {/* Controls hint */}
            <div className="flex justify-center gap-6 mt-8 text-xs text-zinc-600 font-mono">
              <span className="border border-zinc-700 rounded px-2 py-1">↑↓ Move</span>
              <span className="border border-zinc-700 rounded px-2 py-1">SPACE Hit</span>
              <span className="border border-zinc-700 rounded px-2 py-1">SHIFT Lob</span>
            </div>
          </div>
        </motion.div>

        {/* Feature highlights below mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto text-center">
          {[
            { label: 'Courts', value: '12 unique' },
            { label: 'Game Modes', value: 'Singles & Doubles' },
            { label: 'Skill Levels', value: 'Beginner → Pro' },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="py-6 border-t border-zinc-100"
            >
              <p className="text-zinc-400 text-sm">{label}</p>
              <p className="text-zinc-900 font-semibold mt-1">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CourtSVG() {
  return (
    <svg
      viewBox="0 0 500 280"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-lg"
    >
      {/* Court surface */}
      <rect width="500" height="280" rx="6" fill="#1C6AA8" />

      {/* Outer boundary */}
      <rect x="20" y="20" width="460" height="240" fill="none" stroke="white" strokeWidth="2.5" />

      {/* Non-volley zone (kitchen) lines */}
      <line x1="20" y1="90" x2="480" y2="90" stroke="white" strokeWidth="2" />
      <line x1="20" y1="190" x2="480" y2="190" stroke="white" strokeWidth="2" />

      {/* Center line (service boxes) */}
      <line x1="250" y1="90" x2="250" y2="190" stroke="white" strokeWidth="2" />

      {/* Net */}
      <rect x="18" y="136" width="464" height="8" fill="#111827" />
      <line x1="20" y1="140" x2="480" y2="140" stroke="white" strokeWidth="2.5" strokeDasharray="6 4" />
      <rect x="14" y="130" width="8" height="20" rx="2" fill="#6B7280" />
      <rect x="478" y="130" width="8" height="20" rx="2" fill="#6B7280" />

      {/* Player paddle (bottom) */}
      <g transform="translate(250, 235)">
        <ellipse cx="0" cy="0" rx="14" ry="20" fill="#84CC16" />
        <rect x="-3" y="18" width="6" height="14" rx="3" fill="#4B5563" />
      </g>

      {/* Opponent paddle (top) */}
      <g transform="translate(310, 45) rotate(180)">
        <ellipse cx="0" cy="0" rx="14" ry="20" fill="#F97316" />
        <rect x="-3" y="18" width="6" height="14" rx="3" fill="#4B5563" />
      </g>

      {/* Ball */}
      <motion.circle
        cx="280"
        cy="155"
        r="8"
        fill="#FEF08A"
        stroke="#EAB308"
        strokeWidth="1.5"
      />

      {/* Motion trail */}
      <circle cx="268" cy="163" r="5" fill="#FEF08A" opacity="0.4" />
      <circle cx="258" cy="170" r="3" fill="#FEF08A" opacity="0.2" />
    </svg>
  )
}
