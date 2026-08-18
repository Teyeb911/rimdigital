import { motion, useReducedMotion } from 'framer-motion'
import { Cloud, Code2, Database, Smartphone } from 'lucide-react'

const floatingCards = [
  { label: 'Digital Transformation', top: '4%', left: '-6%', delay: 0 },
  { label: 'Software Development', top: '58%', left: '-10%', delay: 0.6 },
  { label: 'Cloud & Data', top: '10%', left: '68%', delay: 0.3 },
  { label: 'IT Consulting', top: '72%', left: '58%', delay: 0.9 },
]

const nodes = [
  { cx: 160, cy: 90, r: 7, color: '#168CC8' },
  { cx: 260, cy: 60, r: 5, color: '#00B45A' },
  { cx: 300, cy: 160, r: 6, color: '#168CC8' },
  { cx: 220, cy: 220, r: 5, color: '#00B45A' },
  { cx: 110, cy: 200, r: 6, color: '#00B45A' },
  { cx: 90, cy: 130, r: 4, color: '#168CC8' },
]

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 3],
]

export default function TechVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg" aria-hidden="true">
      <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-blue-light via-white to-brand-green-light sm:inset-8" />
      <div className="absolute inset-4 rounded-[2.5rem] border border-brand-blue/10 sm:inset-8" />

      <svg viewBox="0 0 360 300" className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] sm:inset-8 sm:h-[calc(100%-4rem)] sm:w-[calc(100%-4rem)]">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#168CC8"
            strokeOpacity={0.18}
            strokeWidth={1.5}
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.color} fillOpacity={0.85} />
        ))}
      </svg>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="grid h-28 w-28 place-items-center rounded-3xl bg-white shadow-lg shadow-brand-blue/10 ring-1 ring-slate-100 sm:h-32 sm:w-32">
          <div className="grid grid-cols-2 gap-3">
            <Code2 className="text-brand-blue" size={22} />
            <Cloud className="text-brand-green" size={22} />
            <Database className="text-brand-green" size={22} />
            <Smartphone className="text-brand-blue" size={22} />
          </div>
        </div>
      </motion.div>

      {floatingCards.map((card, i) => (
        <motion.div
          key={card.label}
          className="absolute hidden rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 text-xs font-semibold text-brand-dark shadow-md shadow-slate-900/5 sm:block"
          style={{ top: card.top, left: card.left }}
          animate={shouldReduceMotion ? undefined : { y: [0, i % 2 === 0 ? -12 : 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-green" />
          {card.label}
        </motion.div>
      ))}
    </div>
  )
}
