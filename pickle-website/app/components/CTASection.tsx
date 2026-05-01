'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="play" className="bg-zinc-900 py-40 px-6 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-400/10 blur-3xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase text-lime-400 mb-6"
        >
          Ready to Rally?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Your first match
          <br />
          is waiting.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto"
        >
          Free to play. No downloads. Just open a tab and serve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group flex items-center gap-2 bg-lime-500 text-zinc-900 font-semibold text-base px-10 py-4 rounded-full hover:bg-lime-400 transition-all duration-200 shadow-xl shadow-lime-900/20"
          >
            Play Free Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#"
            className="text-zinc-400 font-medium text-base px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all duration-200"
          >
            Download the app
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-zinc-600"
        >
          Available on iOS, Android, and Web
        </motion.p>
      </div>
    </section>
  )
}
