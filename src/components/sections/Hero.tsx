import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '../../assets/hero.jpg'

export function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 800], [0, 120])

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-charcoal text-brand-off-white" id="home">
      <motion.img
        alt="Warm, contemporary Al Ramad Al Thahabi interior"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ y: imageY }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        src={heroImage}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,13,8,0.78)_0%,rgba(22,13,8,0.42)_48%,rgba(22,13,8,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,9,5,0.5)_0%,transparent_30%,rgba(15,9,5,0.42)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-92px)] items-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-28">
        <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { delayChildren: 0.45, staggerChildren: 0.14 } } }}
          >
            <motion.h1
              className="max-w-3xl font-display text-2xl  leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-[3.75rem]"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            >
              We Shape Spaces<br />You Experience Them.
            </motion.h1>
          </motion.div>
          <motion.p
            className="max-w-36 translate-y-2 text-left font-body text-xs leading-4 text-white/80 sm:translate-y-3 sm:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Timeless Design. <br />
            Thoughtful Details. <br />
            Exceptional Spaces.
          </motion.p>
        </div>
      </div>

      
    </section>
  )
}
