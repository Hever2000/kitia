import { motion } from 'framer-motion'

import { CHANNELS } from '../data'

export default function TrustSection() {
  const duplicated = [...CHANNELS, ...CHANNELS]

  return (
    <section className="border-y border-border py-14">
      <p className="mb-8 text-center text-[11px] uppercase tracking-[0.22em] text-text-secondary/70">
        Integraciones nativas con las herramientas que ya usás
      </p>

      <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
        <motion.div
          className="flex w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicated.map((channel, i) => (
            <span
              key={`${channel}-${i}`}
              className="mr-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-2 text-sm text-text-secondary select-none"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              {channel}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
