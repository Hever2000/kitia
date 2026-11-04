import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import { PRICING_PLANS } from '../data'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="precios" ref={ref} className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent">
              Precios
            </span>
            <h2 className="font-display text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
              Empezá chico.
              <br />
              <span className="text-text-secondary">Escalá cuando quieras.</span>
            </h2>
            <p className="mt-5 text-sm text-text-secondary md:text-base">
              Sin contratos eternos ni costos ocultos. Elegí el plan que acompaña el volumen
              de tu operación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-border bg-surface p-1"
          >
            <button
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                billing === 'monthly'
                  ? 'bg-accent text-bg'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBilling('annual')}
              aria-pressed={billing === 'annual'}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                billing === 'annual'
                  ? 'bg-accent text-bg'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              Anual
              <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] text-accent">
                −25%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => {
            const price = billing === 'annual' ? plan.priceAnnual : plan.priceMonthly
            const isCustom = plan.priceMonthly === null

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`relative flex flex-col rounded-3xl border p-7 md:p-8 ${
                  plan.highlight
                    ? 'border-accent/40 bg-linear-to-b from-accent/[0.09] to-surface/30 shadow-[0_30px_80px_-40px_rgba(200,247,81,0.35)] lg:-translate-y-2'
                    : 'border-border bg-surface/25'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bg">
                    Más elegido
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-medium text-text">{plan.name}</h3>
                  {plan.name === 'Growth' && (
                    <span className="text-[11px] uppercase tracking-wider text-accent">
                      Para escalar
                    </span>
                  )}
                </div>

                <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-text-secondary">
                  {plan.desc}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="font-display text-5xl font-semibold tracking-tight text-text">
                    {isCustom ? 'Custom' : `$${price}`}
                  </span>
                  <span className="pb-1.5 text-xs text-text-secondary">
                    {isCustom
                      ? 'según alcance'
                      : price === 0
                        ? 'para siempre'
                        : billing === 'annual'
                          ? 'por mes · anual'
                          : 'por mes'}
                  </span>
                </div>

                <a
                  href="#contacto"
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-accent text-bg hover:bg-accent-light'
                      : 'border border-border text-text hover:border-accent/40 hover:text-accent'
                  }`}
                >
                  {plan.cta}
                </a>

                <div className="my-7 h-px bg-border" />

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-accent">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13px] leading-relaxed text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-[11px] text-text-secondary/70"
        >
          Precios en USD. Los planes pagos incluyen 14 días de prueba sin tarjeta.
          Cancelás cuando querés.
        </motion.p>
      </div>
    </section>
  )
}
