import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { contactData } from '../../data/contact'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-brand-off-white text-brand-charcoal" id="contact">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" /> Start a conversation
          </p>
          <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-brand-espresso sm:text-6xl">
            Let&apos;s make a space worth <span className="text-brand-accent">remembering.</span>
          </h2>
          <p className="mt-8 max-w-md font-body text-base leading-8 text-brand-warm-gray sm:text-lg">
            Tell us a little about your project and our studio will be in touch to explore what is possible.
          </p>

          <div className="mt-12 grid gap-7 border-t border-brand-warm-gray/30 pt-7 font-body text-sm">
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-accent" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-brand-warm-gray">Email</p>
                <a className="text-brand-espresso transition-colors hover:text-brand-accent" href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-accent" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-brand-warm-gray">Phone</p>
                <a className="text-brand-espresso transition-colors hover:text-brand-accent" href={contactData.phoneHref}>{contactData.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-accent" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-brand-warm-gray">Studio</p>
                <a className="leading-6 text-brand-espresso transition-colors hover:text-brand-accent" href={contactData.mapUrl} rel="noreferrer" target="_blank">{contactData.address[0]}<br />{contactData.address[1]}</a>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t border-brand-warm-gray/30 pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-warm-gray">Follow</p>
              <a aria-label="Instagram" className="text-brand-charcoal transition-colors hover:text-brand-accent" href={contactData.social.instagram} rel="noreferrer" target="_blank"><FaInstagram className="size-5" /></a>
              <a aria-label="WhatsApp" className="text-brand-charcoal transition-colors hover:text-brand-accent" href={contactData.social.whatsapp} rel="noreferrer" target="_blank"><FaWhatsapp className="size-5" /></a>
              <a aria-label="Facebook" className="text-brand-charcoal transition-colors hover:text-brand-accent" href={contactData.social.facebook} rel="noreferrer" target="_blank"><FaFacebookF className="size-5" /></a>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="grid gap-5 border border-brand-warm-gray/30 bg-white/55 p-6 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Full name" placeholder="Your name" required />
            <Input label="Email address" type="email" placeholder="you@company.com" required />
          </div>
          <Input label="Project type" placeholder="Residential, hospitality, workplace..." required />
          <label className="grid gap-2 font-body text-sm font-medium text-brand-charcoal" htmlFor="project-message">
            <span>Tell us about your project</span>
            <textarea
              className="min-h-36 resize-y border border-brand-warm-gray/40 bg-brand-off-white px-4 py-3 text-base font-normal text-brand-charcoal outline-none transition-shadow placeholder:text-brand-warm-gray focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/15"
              id="project-message"
              placeholder="A few details about the space, location, and timeline..."
              required
            />
          </label>
          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit">{submitted ? 'Inquiry received' : 'Send inquiry'} <span className="ml-2" aria-hidden="true">-&gt;</span></Button>
            {submitted ? <p className="font-body text-sm text-brand-accent">Thank you. We&apos;ll be in touch soon.</p> : null}
          </div>
        </motion.form>

        <motion.div
          className="overflow-hidden border border-brand-warm-gray/30 bg-brand-charcoal lg:col-span-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flex flex-col justify-between gap-4 border-b border-white/15 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Find the studio</p>
              <p className="mt-2 font-body text-sm text-white/65">{contactData.address.join(', ')}</p>
            </div>
            <a
              className="w-fit font-body text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/70"
              href={contactData.mapUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="inline-flex items-center gap-2">Open in Google Maps <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" /></span>
            </a>
          </div>
          <iframe
            className="h-72 w-full grayscale-[20%] sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={contactData.mapEmbedUrl}
            title="Map showing the interior design studio location"
          />
        </motion.div>
      </div>
    </section>
  )
}
