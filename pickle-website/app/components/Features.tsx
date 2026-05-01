'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Trophy } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Real-Time Multiplayer',
    description:
      'Challenge players around the world in sub-100ms matches. Our servers keep the game fluid and responsive no matter where you are.',
  },
  {
    icon: Globe,
    title: 'Physics You Can Feel',
    description:
      'Every spin, dink, and drive is simulated with a true-to-life physics engine tuned by real pickleball pros. Muscle memory transfers.',
  },
  {
    icon: Trophy,
    title: 'Global Leaderboards',
    description:
      'Earn rating points, unlock new courts, and climb the worldwide rankings. Weekly tournaments keep the competition fresh.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-zinc-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-lime-600 mb-4">
            Built for the Game
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
            Everything you need to play.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-10 border border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-lime-50 flex items-center justify-center mb-6 group-hover:bg-lime-100 transition-colors duration-200">
                <Icon className="w-6 h-6 text-lime-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{title}</h3>
              <p className="text-zinc-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
