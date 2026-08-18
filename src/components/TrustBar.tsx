import { CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal'
import { trustValues } from '../data/about'

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-brand-blue-light/40 py-10" aria-label="Nos valeurs">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-brand-dark/70">
            Innovation <span className="text-brand-blue">•</span> Technologie{' '}
            <span className="text-brand-green">•</span> Performance{' '}
            <span className="text-brand-blue">•</span> Accompagnement
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustValues.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 shadow-sm shadow-slate-900/[0.03]">
                <CheckCircle2 className="shrink-0 text-brand-green" size={20} />
                <span className="text-sm font-semibold text-brand-dark">{item.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
