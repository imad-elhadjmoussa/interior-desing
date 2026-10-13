import { motion } from 'framer-motion'
import type { MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../ui/BrandLogo'
import { contactData } from '../../data/contact'

export function Footer() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const footerLinks = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'About', href: '/', section: 'about' },
    { label: 'Services', href: '/', section: 'services' },
    { label: 'Process', href: '/', section: 'the-space' },
    { label: 'Projects', href: '/projects' },
    { label: 'FAQ', href: '/', section: 'faq' },
    { label: 'Contact', href: '/', section: 'contact' },
  ]

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
  }

  return (
    <footer className="bg-brand-charcoal text-brand-off-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Link aria-label="Interior design company home" to="/">
              <BrandLogo />
            </Link>
            <p className="mt-6 max-w-sm font-body text-sm leading-7 text-white/55">
              Interior architecture shaped by material, light, and the character of each place.
            </p>
          </motion.div>

          <div>
            <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Explore</p>
            <nav className="grid gap-3 font-body text-sm text-white/70">
              {footerLinks.map((link) => (
                <Link className="w-fit transition-colors hover:text-brand-accent" to={link.href} key={link.label} onClick={(event) => handleSectionClick(event, link.section)}>{link.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Visit the studio</p>
            <div className="grid gap-3 font-body text-sm leading-6 text-white/70">
              <p>{contactData.address[0]}<br />{contactData.address[1]}</p>
              <a className="w-fit transition-colors hover:text-brand-accent" href={`mailto:${contactData.email}`}>{contactData.email}</a>
              <a className="w-fit transition-colors hover:text-brand-accent" href={contactData.phoneHref}>{contactData.phone}</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 font-body text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Interior Design. All rights reserved.</p>
          <Link className="flex items-center gap-2 transition-colors hover:text-brand-accent" to="/">
            Back to top <span className="text-base text-brand-accent" aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
