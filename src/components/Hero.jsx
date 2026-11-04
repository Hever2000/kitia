import { motion } from 'framer-motion'

const MESSAGES = [
  { from: 'user', text: 'Hola, ¿hacen envíos a Córdoba?' },
  { from: 'bot', text: '¡Hola! Sí, llegamos a todo el país. ¿Me pasás tu código postal y te calculo el envío?' },
  { from: 'user', text: '5000' },
  { from: 'bot', text: 'Perfecto: envío a Córdoba por $4.500 y llega en 48 h. ¿Querés que te pase con un asesor para cerrar la compra?' },
]

function ChatWidget() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-accent/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
        className="relative rounded-3xl border border-border bg-surface/80 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        <div className="rounded-[20px] border border-white/[0.04] bg-bg/80">
          <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/images/logo-kitia.svg" alt="" className="h-8 w-8" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text">Kitia AI</p>
                <p className="text-[11px] text-text-secondary">En línea · responde en segundos</p>
              </div>
            </div>
            <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
              IA
            </span>
          </div>

          <div className="space-y-3 px-4 py-5">
            {MESSAGES.map((message, i) => (
              <motion.div
                key={message.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.22 }}
                className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    message.from === 'user'
                      ? 'rounded-br-md bg-accent text-bg'
                      : 'rounded-bl-md bg-white/[0.06] text-text'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              className="flex flex-wrap gap-2 pl-1"
            >
              {['Sí, por favor', 'Solo la cotización'].map((reply) => (
                <span
                  key={reply}
                  className="rounded-full border border-accent/25 px-3 py-1 text-[11px] text-accent"
                >
                  {reply}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              className="flex items-center gap-2 rounded-xl border border-accent/15 bg-accent/[0.04] px-3 py-2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-[11px] text-text-secondary">
                Transferido a <span className="text-text">Sofía</span> · agente humano
              </span>
            </motion.div>
          </div>

          <div className="flex items-center gap-2 border-t border-border px-4 py-3">
            <div className="flex-1 rounded-full border border-border bg-white/[0.03] px-3.5 py-2 text-[11px] text-text-secondary/70">
              Escribí un mensaje...
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-bg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute -right-3 top-24 hidden w-40 rounded-2xl border border-border bg-surface/95 p-3.5 shadow-xl shadow-black/40 backdrop-blur-md sm:block lg:-right-10"
      >
        <p className="text-[10px] uppercase tracking-wider text-text-secondary">Resuelto por IA</p>
        <div className="mt-1 flex items-end justify-between">
          <span className="font-display text-2xl font-semibold text-accent">68%</span>
          <svg width="38" height="18" viewBox="0 0 38 18" fill="none" className="text-accent">
            <path d="M1 15 9 11l6 3 7-8 6 3 8-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute -left-3 bottom-16 hidden w-44 rounded-2xl border border-border bg-surface/95 p-3.5 shadow-xl shadow-black/40 backdrop-blur-md sm:block lg:-left-8"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-[10px] uppercase tracking-wider text-text-secondary">Respuesta promedio</p>
        </div>
        <p className="mt-1 font-display text-2xl font-semibold text-text">
          2.4s <span className="text-xs font-normal text-text-secondary">antes: 4h</span>
        </p>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_40%,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-2/[0.06] blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.05] px-4 py-1.5 text-xs tracking-wide text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            IA conversacional para empresas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-7 font-display text-[42px] font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-[54px] xl:text-[62px]"
          >
            Tu atención al cliente,
            <br />
            en{' '}
            <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              piloto automático.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Kitia crea, entrena y despliega chatbots con IA que responden 24/7 en WhatsApp,
            web y Telegram. Capturá leads, resolvé consultas y derivá a tu equipo solo cuando
            hace falta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#precios"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_10px_40px_-10px_rgba(200,247,81,0.45)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-accent-light hover:shadow-[0_18px_50px_-12px_rgba(200,247,81,0.6)]"
            >
              Empezá gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-text/30 hover:text-text"
            >
              Ver cómo funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-secondary/80"
          >
            {['14 días gratis', 'Sin tarjeta', 'Setup en minutos'].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <ChatWidget />
      </div>
    </section>
  )
}
