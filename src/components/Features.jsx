import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { FEATURES } from '../data'

const ICONS = {
  bolt: (
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
  ),
  channels: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </>
  ),
  analytics: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v3M12 10v8M17 6v12" />
    </>
  ),
  handoff: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="producto" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent"
          >
            Producto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl"
          >
            Un equipo de IA que
            <br />
            <span className="text-text-secondary">nunca deja de responder.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-lg text-sm text-text-secondary md:text-base"
          >
            Todo lo que necesitás para automatizar conversaciones sin perder el trato humano.
            Una plataforma, todos tus canales, tus reglas.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-7 transition-all duration-500 hover:border-accent/30 hover:bg-surface/60"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[feature.icon]}
                  </svg>
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-text-secondary/80">
                  {feature.tag}
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-xl font-medium text-text transition-colors duration-300 group-hover:text-accent md:text-2xl">
                {feature.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-text-secondary">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
