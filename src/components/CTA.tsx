import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  cx: (i * 37) % 100,
  cy: (i * 53) % 100,
  r: 1 + (i % 3),
  delay: (i % 5) * 0.4,
}))

export default function CTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-green py-20 sm:py-24">
      <svg className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none" aria-hidden="true">
        {particles.map((p) => (
          <motion.circle
            key={p.id}
            cx={`${p.cx}%`}
            cy={`${p.cy}%`}
            r={p.r}
            fill="#ffffff"
            animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Vous avez un projet digital ?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Discutons de votre idée et construisons ensemble une solution adaptée à vos besoins.
          </p>
          <Button href="#contact" size="lg" variant="white" className="mt-2">
            Démarrer une conversation
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
