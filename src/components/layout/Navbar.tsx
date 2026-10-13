import { useEffect, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../ui/BrandLogo'

const MotionLink = motion(Link)

function getNavigationLinks() {
  return [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'About', href: '/', section: 'about' },
    { label: 'Services', href: '/', section: 'services' },
    { label: 'Process', href: '/', section: 'process' },
    { label: 'Projects', href: "/", section: 'project' },
    { label: 'FAQ', href: '/', section: 'faq' },
  ]
}

type NavbarProps = {
  homeHref?: string
  projectsHref?: string
  contactHref?: string
  light?: boolean
}

export function Navbar({ homeHref = '/', contactHref = '/', light = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, section?: string) {
    if (!section) return

    event.preventDefault()
    const scrollToSection = () => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })

    if (pathname === '/') {
      scrollToSection()
    } else {
      navigate('/')
      window.setTimeout(scrollToSection, 0)
    }
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <MotionLink
        aria-label="Interior Design"
        to={homeHref}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <BrandLogo />
      </MotionLink>

      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
        {getNavigationLinks().map((link, index) => (
          <MotionLink
            className={`font-body text-sm transition-colors hover:text-brand-accent ${light ? 'text-brand-charcoal/70' : 'text-white/80'}`}
            to={link.href}
            onClick={(event) => handleSectionClick(event, link.section)}
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.08, duration: 0.6 }}
            key={link.label}
          >
            {link.label}
          </MotionLink>
        ))}
      </div>

      <MotionLink
        className="ml-auto hidden rounded-none border border-brand-accent bg-brand-accent px-5 py-3 font-body text-sm font-semibold text-brand-charcoal transition-colors hover:bg-brand-accent/80 lg:block"
        to={contactHref}
        onClick={(event) => handleSectionClick(event, 'contact')}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58, duration: 0.6 }}
      >
        Contact us
      </MotionLink>

      {/* Optimized hamburger: consistent tap target, active-state feedback, crisper 3-line -> X morph */}
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className={`relative z-50 flex size-11 shrink-0 items-center justify-center rounded-none border transition-colors active:scale-95 lg:hidden ${light && !menuOpen ? 'border-brand-charcoal/35 bg-brand-off-white/30' : 'border-white/35 bg-brand-charcoal/30'
          }`}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span className="relative flex h-4 w-5 flex-col items-center justify-between">
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            className={`absolute top-0 h-px w-5 ${light && !menuOpen ? 'bg-brand-charcoal' : 'bg-white'}`}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className={`absolute top-1/2 h-px w-5 -translate-y-1/2 ${light && !menuOpen ? 'bg-brand-charcoal' : 'bg-white'}`}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            className={`absolute bottom-0 h-px w-5 ${light && !menuOpen ? 'bg-brand-charcoal' : 'bg-white'}`}
            transition={{ duration: 0.25 }}
          />
        </span>
      </button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-10 flex h-dvh flex-col overflow-y-auto bg-brand-charcoal px-6 pb-8 pt-24 sm:px-10 sm:pt-28 lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              animate="visible"
              className="flex flex-1 flex-col justify-center gap-2.5 sm:gap-4"
              initial="hidden"
              variants={{
                hidden: {},
                visible: { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
              }}
            >
              {getNavigationLinks().map((link, index) => (
                <MotionLink
                  className="flex items-center justify-between border-b border-white/15 pb-3 font-display text-xl font-medium text-white transition-colors hover:text-brand-accent sm:pb-4 sm:text-2xl md:text-4xl"
                  to={link.href}
                  onClick={(event) => handleSectionClick(event, link.section)}
                  key={link.label}
                  variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span>{link.label}</span>
                  <span className="font-body text-lg text-brand-accent sm:text-xl" aria-hidden="true">0{index + 1}</span>
                </MotionLink>
              ))}
            </motion.div>
            <MotionLink
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 w-fit shrink-0 border border-brand-accent bg-brand-accent px-6 py-4 font-body text-sm font-semibold text-brand-charcoal transition-colors hover:bg-brand-accent/80"
              exit={{ opacity: 0, y: 12 }}
              to={contactHref}
              onClick={(event) => handleSectionClick(event, 'contact')}
              initial={{ opacity: 0, y: 12 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              Contact us <span className="ml-2" aria-hidden="true">-&gt;</span>
            </MotionLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}