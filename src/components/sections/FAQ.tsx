import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const questions = [
  {
    question: 'What kind of projects do you work on?',
    answer: 'We design residential, hospitality, workplace, and retail interiors. Every project is shaped around its architecture, context, and the people who will use it.',
  },
  {
    question: 'Can you manage the full project delivery?',
    answer: 'Yes. Our turnkey service can carry a project from concept and detailed design through procurement, coordination, and final installation.',
  },
  {
    question: 'Where do you work?',
    answer: 'Our studio is based in Riyadh and we work with clients across Saudi Arabia and the wider region.',
  },
  {
    question: 'How early should we get in touch?',
    answer: 'The earlier the better. Contact us while you are defining the brief so we can help establish the right scope, timeline, and design direction.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-brand-off-white text-brand-charcoal" id="faq">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" /> Good to know
          </p>
          <h2 className="max-w-md font-display text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-brand-espresso sm:text-6xl">
            Questions, answered with <span className="text-brand-accent">clarity.</span>
          </h2>
          <p className="mt-7 max-w-sm font-body text-base leading-7 text-brand-warm-gray">
            Still curious about our approach or your project? We would be happy to continue the conversation.
          </p>
          <a className="mt-8 inline-flex items-center gap-4 border-b border-brand-accent pb-3 font-body text-sm font-semibold text-brand-espresso transition-colors hover:text-brand-accent" href="#contact">
            Ask us directly <span className="text-lg" aria-hidden="true">-&gt;</span>
          </a>
        </motion.div>

        <motion.div
          className="border-t border-brand-warm-gray/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.1, staggerChildren: 0.1 } },
          }}
        >
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                className="border-b border-brand-warm-gray/30"
                key={item.question}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-medium text-brand-espresso transition-colors hover:text-brand-accent sm:py-7 sm:text-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex size-9 shrink-0 items-center justify-center border border-brand-warm-gray/40 font-body text-2xl font-normal leading-none text-brand-accent"
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 font-body text-base leading-7 text-brand-warm-gray">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
