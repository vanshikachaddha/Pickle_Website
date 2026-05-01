'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Create your account',
    description:
      'Sign up in seconds with Google or email. Choose your avatar and set your skill level so we can match you appropriately.',
  },
  {
    number: '02',
    title: 'Find a match',
    description:
      'Join a casual lobby or enter ranked queue. Our smart matchmaking pairs you with players at your level within 30 seconds.',
  },
  {
    number: '03',
    title: 'Play and improve',
    description:
      'After every game, review your shot heatmap and see where you can level up. Track your ELO and share your highlights.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-lg"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-lime-600 mb-4">
            Get Started
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
            Up and running in minutes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
          {steps.map(({ number, title, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative py-10 md:py-0 border-t-2 border-zinc-200 md:border-t-0 md:border-l-2 first:border-t-2 md:first:border-l-0 pl-0 md:pl-10 first:pl-0"
            >
              <span className="text-6xl font-bold text-zinc-100 select-none leading-none block mb-6">
                {number}
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{title}</h3>
              <p className="text-zinc-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
