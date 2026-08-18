import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Users2, Globe, TrendingUp } from 'lucide-react'

const tiles = [
  { icon: Users2, label: 'Équipe pluridisciplinaire', accent: 'text-brand-blue', y: 0 },
  { icon: Code2, label: 'Développement sur mesure', accent: 'text-brand-green', y: 18 },
  { icon: Globe, label: 'Solutions évolutives', accent: 'text-brand-green', y: 0 },
  { icon: TrendingUp, label: 'Croissance digitale', accent: 'text-brand-blue', y: 18 },
]

export default function AboutVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-dark via-brand-blue to-brand-green opacity-95" />
      <div
        className="absolute -inset-6 rounded-[2.5rem] opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative grid grid-cols-2 gap-4 p-2">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.label}
            className="rounded-2xl bg-white p-5 shadow-lg shadow-brand-dark/10"
            style={{ marginTop: tile.y }}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: tile.y }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <tile.icon className={tile.accent} size={26} />
            <p className="mt-4 text-sm font-semibold leading-snug text-brand-dark">{tile.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
