import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { FAQS } from '../data'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-5 text-left md:py-6"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-display text-sm font-medium text-text transition-colors duration-300 group-hover:text-accent md:text-base">
          {item.q}
        </span>
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="flex-shrink-0 text-text-secondary/50 transition-colors duration-300 group-hover:text-accent"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-text-secondary md:pb-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent">
          FAQ
        </span>
        <h2 className="mb-4 font-display text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
          Preguntas frecuentes
        </h2>
        <p className="mb-12 text-sm text-text-secondary md:text-base">
          Todo lo que necesitás saber antes de automatizar tus conversaciones.
        </p>

        <div>
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
