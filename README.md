# RIM Digital — Site vitrine

Site corporate pour **RIM Digital**, startup technologique mauritanienne spécialisée dans la
transformation digitale, le développement logiciel et le conseil IT.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide React

## Démarrage

```bash
npm install
npm run dev
```

```bash
npm run build   # build de production dans dist/
npm run lint    # oxlint
npm run preview # prévisualiser le build
```

## Structure

```text
src/
├── components/       # sections de la page (Navbar, Hero, Services, ...)
│   └── ui/           # composants réutilisables (Button, Reveal, Logo, ...)
├── pages/
│   └── Home.tsx       # assemble toutes les sections
├── data/              # contenu du site (services, projets, technologies...)
│                       # centralisé ici pour faciliter un futur branchement CMS/API
├── hooks/
└── assets/
```

## Notes

- Prototype front-end uniquement : aucun backend n'est connecté. Le formulaire de contact
  simule un envoi réussi côté client (voir `src/components/Contact.tsx`).
- Les coordonnées affichées (email, téléphone, adresse) sont des placeholders à remplacer par
  les vraies informations de l'entreprise avant mise en production.
- Le contenu (services, technologies, projets, étapes du processus...) est centralisé dans
  `src/data/` pour rester facile à faire évoluer ou à brancher sur une future API/CMS.
