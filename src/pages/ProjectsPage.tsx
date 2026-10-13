import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

const MotionLink = motion(Link)

function formatIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}

export function ProjectsPage() {
  const { projects, loading, error } = useProjects()

  return (
    <main className="min-h-screen  text-brand-off-white">
      <header className="mx-auto max-w-[1440px] px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <motion.p
          className="mb-5 flex items-center gap-3 font-body text-xs  font-semibold uppercase tracking-[0.26em] text-brand-accent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-10 bg-brand-accent" /> Selected work / Archive
        </motion.p>
        <motion.h1
          className="max-w-4xl font-display text-5xl text-brand-charcoal font-medium leading-[1.02] tracking-[-0.05em] sm:text-7xl lg:text-[6rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Every project has <span className="text-brand-accent">a point of view.</span>
        </motion.h1>
        <motion.p
          className="mt-8 max-w-xl font-body text-base leading-7 text-white/60 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Explore the spaces we have shaped through a balance of material, light, proportion, and place.
        </motion.p>
      </header>

      {loading ? (
        <section className="grid gap-px bg-white/15 sm:grid-cols-2" aria-label="Loading projects">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="aspect-[4/5] min-h-[28rem] animate-pulse bg-brand-charcoal" key={index}>
              <div className="h-full w-full bg-white/5" />
            </div>
          ))}
        </section>
      ) : error ? (
        <div className="px-6 py-24 text-center font-body text-sm text-white/60 sm:px-10">
          We couldn't load projects right now. Please try again shortly.
        </div>
      ) : projects.length === 0 ? (
        <div className="px-6 py-24 text-center font-body text-sm text-white/60 sm:px-10">
          No projects to show yet — check back soon.
        </div>
      ) : (
        <section className="grid gap-px bg-white/15 sm:grid-cols-2" aria-label="All projects">
          {projects.map((project, index) => (
            <MotionLink
              className="group relative aspect-[4/5] min-h-[28rem] overflow-hidden bg-brand-charcoal"
              to={`/projects/${project.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
              key={project.id}
            >
              <motion.img
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.08 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={project.image}
                loading={index < 4 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/15 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
                <div className="mb-5 flex justify-between font-body text-xs uppercase tracking-[0.18em] text-white/65">
                  <span>{formatIndex(index)} / {project.category}</span>
                  <span>Completed {project.year}</span>
                </div>
                <h2 className="font-display text-3xl font-medium sm:text-5xl">{project.title}</h2>
                <p className="mt-3 max-w-md font-body text-sm leading-6 text-white/70 line-clamp-3">{project.description}</p>
              </div>
            </MotionLink>
          ))}
        </section>
      )}
    </main>
  )
}