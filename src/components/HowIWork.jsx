import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { STEPS } from '../data'

export default function HowIWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="como-funciona" ref={ref} className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent"
        >
          Cómo funciona
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl"
        >
          De cero a IA en producción.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 max-w-lg text-sm text-text-secondary md:text-base"
        >
          Sin proyectos de meses ni equipos de implementación. Cuatro pasos y tu bot está
          atendiendo clientes reales.
        </motion.p>

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-accent/20 md:block" />

          <div className="space-y-12 md:space-y-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative items-start md:grid md:grid-cols-12 md:gap-8"
              >
                <div className="hidden items-start justify-center md:col-span-1 md:flex">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-accent/30 bg-bg">
                    <span className="font-display text-xs font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="mb-2 md:col-span-4 md:mb-0">
                  <span className="mr-3 font-display text-xs text-accent md:hidden">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-text md:text-3xl">
                    {step.title}
                  </h3>
                </div>

                <div className="md:col-span-7">
                  <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
