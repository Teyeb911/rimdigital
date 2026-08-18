import {
  Code2,
  Workflow,
  LayoutDashboard,
  Cloud,
  BarChart3,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'developpement-logiciel',
    icon: Code2,
    title: 'Développement logiciel',
    description:
      "Conception et développement d'applications web et mobiles modernes, performantes et évolutives.",
  },
  {
    id: 'transformation-digitale',
    icon: Workflow,
    title: 'Transformation digitale',
    description:
      "Accompagnement des organisations dans la digitalisation et l'amélioration de leurs processus.",
  },
  {
    id: 'solutions-erp',
    icon: LayoutDashboard,
    title: 'Solutions ERP',
    description:
      'Intégration, personnalisation et développement de solutions ERP adaptées aux besoins métiers.',
  },
  {
    id: 'cloud-infrastructure',
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Déploiement, architecture et accompagnement vers des infrastructures cloud modernes.',
  },
  {
    id: 'data-intelligence',
    icon: BarChart3,
    title: 'Data & Intelligence',
    description:
      'Valorisation des données et développement de solutions intelligentes pour faciliter la prise de décision.',
  },
  {
    id: 'conseil-it',
    icon: Lightbulb,
    title: 'Conseil IT',
    description:
      'Conseil technologique et accompagnement dans la conception de vos projets numériques.',
  },
]
