import { useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { InputField, SelectField, TextareaField } from './ui/FormField'
import { contactInfo, subjects } from '../data/contact'

type Status = 'idle' | 'sending' | 'success'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    // Prototype only: no backend is connected yet. This simulates a
    // successful submission so the flow can be wired to a real API later.
    window.setTimeout(() => {
      setStatus('success')
      formRef.current?.reset()
      window.setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">Contact</span>
            <h2 className="text-3xl font-bold leading-[1.15] text-brand-dark sm:text-4xl">
              Parlons de votre projet.
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Vous avez une idée, un besoin de digitalisation ou un projet technologique ? Notre équipe
              est prête à échanger avec vous.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {contactInfo.map((info) => (
              <li key={info.label}>
                <a
                  href={info.href ?? undefined}
                  className={`flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition-colors ${
                    info.href ? 'hover:border-brand-blue/30 hover:bg-brand-blue-light' : ''
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                    <info.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                      {info.label}
                    </span>
                    <span className="block text-sm font-semibold text-brand-dark">{info.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.04] sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField label="Nom" htmlFor="nom" type="text" placeholder="Votre nom complet" required />
              <InputField label="Email" htmlFor="email" type="email" placeholder="vous@exemple.com" required />
              <InputField label="Téléphone" htmlFor="telephone" type="tel" placeholder="+222 00 00 00 00" />
              <InputField label="Entreprise" htmlFor="entreprise" type="text" placeholder="Nom de votre organisation" />
              <div className="sm:col-span-2">
                <SelectField
                  label="Sujet"
                  htmlFor="sujet"
                  options={subjects}
                  placeholder="Sélectionnez un sujet"
                  required
                  defaultValue=""
                />
              </div>
              <div className="sm:col-span-2">
                <TextareaField
                  label="Message"
                  htmlFor="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              icon={status !== 'sending'}
              disabled={status === 'sending'}
              className="mt-6 w-full sm:w-auto"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Envoi en cours...
                </>
              ) : (
                'Envoyer le message'
              )}
            </Button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 flex items-center gap-3 rounded-xl bg-brand-green-light px-4 py-3.5 text-sm font-semibold text-brand-green"
                >
                  <CheckCircle2 size={20} className="shrink-0" />
                  Votre message a bien été envoyé. Notre équipe vous répondra rapidement.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
