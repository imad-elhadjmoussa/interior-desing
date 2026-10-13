import { motion } from 'framer-motion'
import { steps } from '../../data/process'



export function Process() {
  return (
    <section className="bg-brand-charcoal text-brand-off-white" id="process">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" /> The way we work
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl">
            A thoughtful process for <span className="text-brand-accent">lasting spaces.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              className="group border-b border-white/15 py-8 sm:px-6 sm:py-9 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={step.number}
            >
              <div className="flex items-center justify-between">
                <span className="font-body text-xs tracking-[0.2em] text-brand-accent">{step.number}</span>
                <span className="h-px w-10 bg-white/25 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-accent" />
              </div>
              <h3 className="mt-16 font-display text-2xl font-medium text-white sm:text-3xl">{step.title}</h3>
              <p className="mt-4 max-w-xs font-body text-sm leading-6 text-white/55">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
