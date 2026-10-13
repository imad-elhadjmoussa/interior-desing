import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'

const MotionLink = motion(Link)

const VISIBLE_COUNT = 4

function formatIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}

export function Projects() {
  const { projects, loading, error } = useProjects()
  const visibleProjects = projects.slice(0, VISIBLE_COUNT)


  return (
    <section className="bg-brand-charcoal text-brand-off-white" id="project">
      <div className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <motion.div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="mb-5 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.26em] text-brand-accent">
              <span className="h-px w-10 bg-brand-accent" /> Selected work
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl">
              Built around the way <span className="text-brand-accent">life feels.</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-7 text-white/60">
            A selection of spaces where our approach to material, proportion, and atmosphere comes to life.
          </p>
        </motion.div>
      </div>

      {loading ? (
        <div className="grid gap-px bg-white/15 sm:grid-cols-2">
          {Array.from({ length: VISIBLE_COUNT }).map((_, index) => (
            <div
              className="aspect-[4/5] min-h-[28rem] animate-pulse bg-brand-charcoal sm:min-h-0"
              key={index}
            >
              <div className="h-full w-full bg-white/5" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="px-6 py-16 text-center font-body text-sm text-white/60 sm:px-10">
          We couldn't load projects right now. Please try again shortly.
        </div>
      ) : visibleProjects.length === 0 ? (
        <div className="px-6 py-16 text-center font-body text-sm text-white/60 sm:px-10">
          No projects to show yet — check back soon.
        </div>
      ) : (
        <div className="grid gap-px bg-white/15 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <MotionLink
              className="group relative block aspect-[4/5] min-h-[28rem] overflow-hidden bg-brand-charcoal sm:min-h-0"
              to={`/projects/${project.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              key={project.id}
            >
              <motion.img
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.08 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/15 to-brand-charcoal/5 transition-colors duration-500 group-hover:from-brand-charcoal/95" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
                <div className="mb-5 flex items-center justify-between font-body text-xs uppercase tracking-[0.18em] text-white/65">
                  <span>{formatIndex(index)} / {project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">{project.title}</h3>
                    <p className="mt-3 max-w-md font-body text-sm leading-6 text-white/70">{project.description}</p>
                  </div>
                  <span className="flex size-11 shrink-0 translate-y-1 items-center justify-center border border-white/50 text-white transition-all duration-300 group-hover:border-brand-accent group-hover:text-brand-accent" aria-hidden="true">
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      )}

      <motion.div
        className="flex justify-center px-6 py-12 sm:px-10 lg:py-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <a
          className="group inline-flex items-center gap-4 border-b border-brand-accent pb-3 font-body text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/70"
          href="/projects"
        >
          View all projects
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  )
}