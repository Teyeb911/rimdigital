import Logo from './ui/Logo'
import { LinkedinIcon, FacebookIcon, XIcon } from './ui/SocialIcons'
import { contactInfo } from '../data/contact'

const footerColumns = [
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '#a-propos' },
      { label: 'Nos valeurs', href: '#a-propos' },
      { label: 'Nos projets', href: '#projets' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Développement logiciel', href: '#services' },
      { label: 'Transformation digitale', href: '#services' },
      { label: 'ERP', href: '#services' },
      { label: 'Cloud & Data', href: '#services' },
      { label: 'Conseil IT', href: '#services' },
    ],
  },
]

const socialLinks = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/rim-digital' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: XIcon, label: 'X (Twitter)', href: '#' },
]

export default function Footer() {
  const emailInfo = contactInfo.find((info) => info.label === 'Email')
  const phoneInfo = contactInfo.find((info) => info.label === 'Téléphone')
  const locationInfo = contactInfo.find((info) => info.label === 'Localisation')

  return (
    <footer className="bg-brand-dark pt-20">
      <div className="container-page grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Solutions digitales pour construire l'avenir.
          </p>
          <div className="mt-2 flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{column.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-brand-green">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            {emailInfo && (
              <li>
                <a href={emailInfo.href} className="transition-colors hover:text-brand-green">
                  {emailInfo.value}
                </a>
              </li>
            )}
            {phoneInfo && (
              <li>
                <a href={phoneInfo.href} className="transition-colors hover:text-brand-green">
                  {phoneInfo.value}
                </a>
              </li>
            )}
            {locationInfo && <li>{locationInfo.value}</li>}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© 2026 RIM Digital. Tous droits réservés.</p>
          <p>Conçu et développé avec soin en Mauritanie.</p>
        </div>
      </div>
    </footer>
  )
}
