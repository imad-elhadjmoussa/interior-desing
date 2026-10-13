import { motion } from 'framer-motion'
import aboutImage from '../../assets/about.jpg'
import { aboutContent, aboutServices } from '../../data/about'

export function About() {
  return (
    <section className="bg-brand-off-white text-brand-charcoal" id="about">
      <div className="grid lg:grid-cols-2">
        <motion.div
          className="relative min-h-[26rem] overflow-hidden bg-brand-charcoal sm:min-h-[36rem] lg:min-h-[44rem]"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <img
            alt="Contemporary interior detail"
            className="h-full w-full object-cover object-[68%] grayscale-[15%] transition-transform duration-700 hover:scale-105"
            src={aboutImage}
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <p className="mb-5 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" /> {aboutContent.eyebrow}
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-brand-espresso sm:text-6xl">
            {aboutContent.title.before}
            <span className="text-brand-accent">{aboutContent.title.highlight}</span>
            {aboutContent.title.after}
          </h2>

          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl font-body text-base leading-8 text-brand-warm-gray sm:text-lg">
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 flex max-w-xl flex-wrap gap-x-6 gap-y-3 font-body text-sm font-medium text-brand-espresso sm:text-base">
            {aboutServices.map((service) => (
              <li className="flex items-center gap-2" key={service}>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}