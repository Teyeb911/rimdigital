import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Button from './ui/Button'
import TechVisual from './ui/TechVisual'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-blue-light blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-green-light blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue-light px-4 py-2 text-sm font-semibold text-brand-blue">
            <Sparkles size={16} />
            Solutions digitales & innovation technologique
          </span>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-brand-dark sm:text-5xl lg:text-[3.4rem]">
            Transformons vos idées en{' '}
            <span className="text-gradient">solutions digitales</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            RIM Digital accompagne les entreprises et institutions dans leur transformation digitale
            grâce à des solutions technologiques modernes, fiables et adaptées à leurs besoins.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#services" size="lg">
              Découvrir nos services
            </Button>
            <Button href="#contact" size="lg" variant="secondary">
              Parlons de votre projet
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <TechVisual />
        </motion.div>
      </div>
    </section>
  )
}
