import { NAV_LINKS } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <a href="#" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <img src="/images/logo-kitia.svg" alt="" className="h-7 w-auto" />
              <span className="text-text">KITIA</span>
            </a>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-text-secondary/70">
              Chatbots con IA para equipos que no quieren perder ni una conversación.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-text-secondary transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hola@kitia.ai"
              className="text-xs text-text-secondary transition-colors hover:text-text"
            >
              Contacto
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <span className="text-[11px] uppercase tracking-wider text-text-secondary/50">
            © {new Date().getFullYear()} Kitia
          </span>
          <a
            href="mailto:hola@kitia.ai"
            className="text-[11px] uppercase tracking-wider text-text-secondary/60 transition-colors hover:text-text-secondary"
          >
            hola@kitia.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
