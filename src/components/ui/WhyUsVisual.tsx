import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Zap } from 'lucide-react'

export default function WhyUsVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-[2.5rem] bg-brand-dark" />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 300 375" fill="none">
        <circle cx="60" cy="70" r="90" stroke="#168CC8" strokeWidth="1" />
        <circle cx="240" cy="300" r="120" stroke="#00B45A" strokeWidth="1" />
        <circle cx="220" cy="60" r="40" stroke="#168CC8" strokeWidth="1" />
      </svg>

      <motion.div
        className="absolute left-8 top-10 rounded-2xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/10"
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Zap className="text-brand-green" size={26} />
        <p className="mt-3 max-w-[9rem] text-xs font-semibold leading-snug text-white">
          Livraison rapide et itérative
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-8 rounded-2xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/10"
        animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <ShieldCheck className="text-brand-blue" size={26} />
        <p className="mt-3 max-w-[9rem] text-xs font-semibold leading-snug text-white">
          Solutions fiables et sécurisées
        </p>
      </motion.div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-xl shadow-black/20">
          <span className="font-heading text-2xl font-bold">RD</span>
        </div>
      </div>
    </div>
  )
}
