import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../data/services'
import Reveal from './ui/Reveal'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isGreenAccent = index % 2 === 1

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-900/[0.06]">
        <div
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            isGreenAccent
              ? 'bg-gradient-to-br from-brand-green-light/70 to-transparent'
              : 'bg-gradient-to-br from-brand-blue-light/70 to-transparent'
          }`}
        />

        <div className="relative">
          <div
            className={`inline-flex rounded-xl p-3 ${
              isGreenAccent ? 'bg-brand-green-light text-brand-green' : 'bg-brand-blue-light text-brand-blue'
            }`}
          >
            <service.icon size={24} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-brand-dark">{service.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>

          <div
            className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${
              isGreenAccent ? 'text-brand-green' : 'text-brand-blue'
            }`}
          >
            En savoir plus
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
