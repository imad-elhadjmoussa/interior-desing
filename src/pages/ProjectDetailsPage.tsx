import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useProjects } from '../hooks/useProjects'

export function ProjectDetailsPage() {
  const { projectId } = useParams()
  const { projects, loading, error } = useProjects()
  const project = projects.find((item) => item.id === projectId)

  console.log(project)
  console.log("HIIII " + projectId)

  if (loading) {
    return (
      <main className="min-h-screen bg-brand-off-white text-brand-charcoal">
        <div className="mx-auto max-w-[1440px] animate-pulse px-6 pt-12 sm:px-10 lg:px-16 lg:pt-20">
          <div className="mb-12 flex justify-end">
            <div className="h-4 w-28 bg-brand-charcoal/10" />
          </div>
          <div className="h-4 w-40 bg-brand-charcoal/10" />
          <div className="mt-5 h-16 w-3/4 bg-brand-charcoal/10 sm:h-24" />
          <div className="mt-8 h-4 w-56 bg-brand-charcoal/10" />
          <div className="mt-16 grid gap-3 pb-20 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="aspect-[4/3] bg-brand-charcoal/10" key={index} />
            ))}
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-brand-off-white text-brand-charcoal">
        <div className="mx-auto max-w-[1440px] px-6 py-32 text-center sm:px-10 lg:px-16">
          <h1 className="font-display text-4xl font-medium sm:text-5xl">Something went wrong</h1>
          <p className="mt-4 font-body text-sm text-brand-warm-gray">We couldn't load this project right now. Please try again shortly.</p>
          <Link className="mt-8 inline-flex items-center gap-2 border-b border-brand-accent pb-2 font-body text-sm text-brand-accent" to="/projects">
            <ArrowLeft className="size-4" aria-hidden="true" strokeWidth={1.5} /> Back to projects
          </Link>
        </div>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-brand-off-white text-brand-charcoal">
        <div className="mx-auto max-w-[1440px] px-6 py-32 text-center sm:px-10 lg:px-16">
          <h1 className="font-display text-5xl font-medium">Project not found</h1>
          <Link className="mt-8 inline-flex items-center gap-2 border-b border-brand-accent pb-2 font-body text-sm text-brand-accent" to="/projects">
            Back to projects <ArrowLeft className="size-4" aria-hidden="true" strokeWidth={1.5} />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-brand-off-white text-brand-charcoal">
      <header className="mx-auto max-w-[1440px] px-6 pb-0 pt-12 sm:px-10 lg:px-16 lg:pb-0 lg:pt-20">
        <div className="mb-12 flex justify-end">
          <Link className="inline-flex items-center gap-3 font-body text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/70" to="/projects">
            <ArrowLeft className="size-4" aria-hidden="true" strokeWidth={1.5} /> All projects
          </Link>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 font-body text-xs uppercase tracking-[0.24em] text-brand-accent">{project.category}</p>
          <h1 className="max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-7xl lg:text-[6rem]">{project.title}</h1>

        </motion.div>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 pb-0 pt-0 sm:px-10 lg:px-16 lg:pb-0" aria-label={`${project.title} project images`}>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
          </div>
          <span className="hidden font-body text-xs uppercase tracking-[0.18em] text-brand-warm-gray sm:block">
            Completed {project.year}
          </span>
        </div>
        {project.gallery.length === 0 ? (
          <p className="border border-brand-charcoal/10 px-6 py-16 text-center font-body text-sm text-brand-warm-gray">
            No gallery images have been added for this project yet.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <motion.figure
                className="group relative aspect-[4/3] overflow-hidden bg-brand-espresso"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                key={image}
              >
                <img
                  alt={`${project.title} detail view ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  src={image}
                />
                <figcaption className="absolute bottom-4 left-4 font-body text-xs uppercase tracking-[0.18em] text-white/75">
                  0{index + 1} / {project.category}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-16 lg:pb-32 lg:pt-20">
        <p className="font-body text-xs uppercase tracking-[0.24em] text-brand-accent">Project perspective</p>
        <div>
          <p className=" max-w-2xl font-body text-base leading-8 text-brand-warm-gray sm:text-lg">
            {project.description} Every decision is made to support a sense of ease, character, and lasting connection to the space.
          </p>

        </div>
      </section>
    </main>
  )
}