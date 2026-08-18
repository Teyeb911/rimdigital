import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Comment travaillons-nous ?"
          subtitle="Une démarche claire, pensée pour garantir des résultats concrets à chaque étape."
        />

        <div className="relative mt-16">
          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-brand-blue via-slate-200 to-brand-green" />
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.1}>
                  <div className="flex flex-col items-start">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-brand-blue-light text-brand-blue shadow-sm">
                      <step.icon size={26} />
                    </div>
                    <span className="mt-5 font-heading text-3xl font-extrabold text-slate-200">
                      {step.number}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-brand-dark">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:hidden">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative flex gap-5 pl-1">
                  {i < processSteps.length - 1 && (
                    <span
                      className="absolute left-8 top-16 h-[calc(100%-1rem)] w-px bg-slate-200"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
                    <step.icon size={26} />
                  </div>
                  <div className="pt-1">
                    <span className="font-heading text-sm font-extrabold text-brand-blue">
                      {step.number}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-brand-dark">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
