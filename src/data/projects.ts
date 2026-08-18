import { Globe2, Boxes, LineChart, type LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  icon: LucideIcon
  category: string
  title: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'digital-platform',
    icon: Globe2,
    category: 'Plateforme web',
    title: 'Digital Platform',
    description: 'Plateforme web de gestion et de services numériques.',
    tags: ['React', 'Django', 'PostgreSQL'],
  },
  {
    id: 'business-management',
    icon: Boxes,
    category: 'Gestion & ERP',
    title: 'Business Management',
    description: "Solution de gestion permettant de centraliser les opérations d'une organisation.",
    tags: ['Spring Boot', 'React', 'Docker'],
  },
  {
    id: 'smart-data',
    icon: LineChart,
    category: 'Data & Analytics',
    title: 'Smart Data',
    description: 'Solution de collecte et visualisation des données pour faciliter la prise de décision.',
    tags: ['Python', 'AI / ML', 'Cloud'],
  },
]
