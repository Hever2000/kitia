import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { BEFORE_ITEMS, AFTER_ITEMS } from '../data'

function List({ items, variant, isInView, delay = 0 }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: variant === 'before' ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.1 }}
          className="flex items-start gap-3"
        >
          {variant === 'before' ? (
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-text-secondary/30">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-text-secondary/40">
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </span>
          ) : (
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          )}
          <span className={`text-sm leading-relaxed md:text-base ${
            variant === 'before' ? 'text-text-secondary' : 'text-text'
          }`}>
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent">
            El antes y el después
          </span>
          <h2 className="font-display text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
            Sin Kitia vs.{' '}
            <span className="text-accent">Con Kitia</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm text-text-secondary md:text-base">
            De una bandeja desbordada y respuestas tarde a una operación que responde sola,
            mide todo y escala cuando hace falta.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="mb-6 font-display text-sm font-medium uppercase tracking-widest text-text-secondary/60">
              Sin Kitia
            </h3>
            <List items={BEFORE_ITEMS} variant="before" isInView={isInView} delay={0.2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-6 md:p-8"
          >
            <h3 className="mb-6 font-display text-sm font-medium uppercase tracking-widest text-accent">
              Con Kitia
            </h3>
            <List items={AFTER_ITEMS} variant="after" isInView={isInView} delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
