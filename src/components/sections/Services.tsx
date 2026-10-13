import { motion } from 'framer-motion'
import exteriorImage from '../../assets/services/exterior_service.jpg'
import furnitureImage from '../../assets/services/furniture_service.jpg'
import interiorImage from '../../assets/services/interior_service.jpg'

const services = [
  {
    number: '01',
    title: 'Interior architecture',
    description: 'We shape the structure, flow, and proportion of spaces from the first plan to the final detail.',
    image: interiorImage,
    imageAlt: 'Interior architecture project',
  },
  {
    number: '02',
    title: 'Interior design',
    description: 'We compose material, color, furniture, and light into interiors with a distinct sense of place.',
    image: furnitureImage,
    imageAlt: 'Interior furniture design project',
  },
  {
    number: '03',
    title: 'Turnkey delivery',
    description: 'We coordinate every moving part to bring the approved vision to life with clarity and precision.',
    image: exteriorImage,
    imageAlt: 'Exterior design project',
  },
]

export function Services() {
  return (
    <section className="bg-brand-off-white text-brand-charcoal" id="services">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
            <span className="h-px w-10 bg-brand-accent" /> What we do
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-brand-espresso sm:text-6xl">
            From the first line to the final <span className="text-brand-accent">layer.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t border-brand-warm-gray/30 pt-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              className="group overflow-hidden border border-brand-warm-gray/30 transition-colors duration-300 hover:border-brand-accent/60"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              key={service.number}
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-charcoal">
                <img
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service.image}
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-body text-xs tracking-[0.2em] text-brand-accent">{service.number}</span>
                  <span className="flex size-9 items-center justify-center border border-brand-warm-gray/40 font-body text-lg leading-none text-brand-warm-gray transition-colors duration-300 group-hover:border-brand-accent group-hover:text-brand-accent" aria-hidden="true">
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">-&gt;</span>
                  </span>
                </div>
                <h3 className="mt-16 font-display text-2xl font-medium text-brand-espresso sm:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-sm font-body text-base leading-7 text-brand-warm-gray">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
