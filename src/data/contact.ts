import { Mail, Phone, MapPin, type LucideIcon } from 'lucide-react'
import { LinkedinIcon } from '../components/ui/SocialIcons'

export interface ContactInfo {
  icon: LucideIcon | typeof LinkedinIcon
  label: string
  value: string
  href?: string
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@rimdigital.mr',
    href: 'mailto:contact@rimdigital.mr',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+222 00 00 00 00',
    href: 'tel:+22200000000',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Nouakchott, Mauritanie',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/company/rim-digital',
    href: 'https://www.linkedin.com/company/rim-digital',
  },
]

export const subjects = [
  'Développement logiciel',
  'Transformation digitale',
  'Solutions ERP',
  'Cloud & Infrastructure',
  'Data & Intelligence',
  'Conseil IT',
  'Autre',
]
