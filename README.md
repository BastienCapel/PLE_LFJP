# Projet Local d'Évaluation – LFJP

Cette application statique présente les modalités d'évaluation du Projet Local d'Évaluation (PLE) 2025‑2026 du Lycée Français Jacques Prévert.

## Structure du projet

```
.
├── assets/
│   ├── css/main.css         # Styles globaux
│   └── js/
│       ├── modal.js         # Logique d'interface (ouverture/fermeture du modal)
│       └── modalData.js     # Contenus disciplinaires structurés
├── docs/AUDIT.md            # Analyse du code et pistes d'amélioration du DX
└── index.html               # Page principale
```

## Développement

Aucun prérequis n'est nécessaire : il suffit d'ouvrir `index.html` dans un navigateur moderne. Les scripts utilisent les modules ECMAScript natifs.

Pour modifier le contenu disciplinaire, éditez `assets/js/modalData.js`. Les composants d'interface peuvent être personnalisés via `assets/css/main.css`.

## Pistes d'amélioration

Des propositions plus détaillées sont disponibles dans [`docs/AUDIT.md`](docs/AUDIT.md). Parmi les pistes prioritaires :

- Automatiser la génération des contenus à partir d'une source structurée (CSV/JSON).
- Ajouter des tests d'accessibilité et des vérifications automatisées (HTMLHint, Stylelint).
- Mettre en place un pipeline de déploiement (GitHub Pages, Netlify) pour faciliter la publication.
