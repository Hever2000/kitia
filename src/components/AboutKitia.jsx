import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { STATS, VALUES } from '../data'

export default function AboutKitia() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,247,81,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent">
              Sobre Kitia
            </span>
            <h2 className="mb-6 font-display text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
              IA que atiende como tu mejor agente.{' '}
              <span className="text-accent">Y nunca se cansa.</span>
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-text-secondary md:text-base">
              Kitia nació para que ninguna empresa pierda un cliente por una respuesta tarde.
              Combinamos IA conversacional con el criterio de tu equipo para automatizar lo
              repetitivo y escalar lo importante.
            </p>
            <p className="mb-10 text-sm leading-relaxed text-text-secondary md:text-base">
              Hoy trabajamos con equipos de soporte, ventas y operaciones que necesitan
              responder más rápido, en más canales y sin sumar headcount. Sin proyectos eternos:
              implementación real en días.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-display text-2xl font-semibold text-accent md:text-3xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-[11px] uppercase leading-tight tracking-wider text-text-secondary/70 md:text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {VALUES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="border-b border-border pb-6"
              >
                <h3 className="mb-2 font-display text-base font-medium text-text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
