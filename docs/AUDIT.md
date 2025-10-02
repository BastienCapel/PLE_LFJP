# Audit du code et recommandations DX

## Résumé exécutif

L'application initiale regroupait HTML, styles et scripts dans un fichier unique (`INDEX.HTML`). Cette approche compliquait la maintenance, le partage des responsabilités et l'évolution future du contenu. Le refactoring réalisé isole désormais la structure (`index.html`), la présentation (`assets/css/main.css`) et la logique (`assets/js/*.js`). Cette segmentation clarifie le périmètre de chaque fichier, facilite la revue de code et prépare l'introduction d'outils d'automatisation.

## Points forts existants

- Contenu métier complet et structuré par discipline.
- Utilisation d'une modale unique pour centraliser l'affichage des informations détaillées.
- Styles cohérents offrant une expérience utilisateur agréable sur desktop et mobile.

## Problèmes identifiés (état initial)

| Domaine | Constat | Impact DX |
| --- | --- | --- |
| Organisation du code | HTML, CSS et JS imbriqués dans un seul fichier. | Difficulté à naviguer dans le code, risques de conflits lors des revues, impossibilité de réutiliser les styles/scripts. |
| Accessibilité | Cartes cliquables implémentées via des `<div>` avec gestion d'événements inline (`onclick`). | Navigation clavier limitée, absence de focus visible, interactions impossibles sans souris. |
| Maintenabilité des données | Les textes disciplinaires sont intégrés directement dans le script. | Mise à jour fastidieuse, pas de contrôle de cohérence, difficulté à réutiliser le contenu ailleurs (PDF, ENT). |
| Outillage | Aucun linting ni pipeline de test/documentation. | Risque de régressions et de divergences de style de code. |

## Morcellement et optimisations réalisés

1. **Séparation des responsabilités**
   - `index.html` : structure sémantique et points d'ancrage pour les composants.
   - `assets/css/main.css` : design system basique (variables CSS, styles responsive, gestion du focus clavier).
   - `assets/js/modalData.js` : source de vérité unique pour les contenus disciplinaires.
   - `assets/js/modal.js` : logique d'ouverture/fermeture, gestion du focus, événements globaux.
2. **Accessibilité accrue**
   - Remplacement des `<div>` interactifs par des `<button>` nativement accessibles.
   - Gestion du focus lors de l'ouverture/fermeture de la modale, prise en charge de la touche Échap et des clics sur l'arrière-plan.
3. **Documentation**
   - Ajout d'un `README.md` décrivant l'architecture et les pistes d'amélioration.

## Recommandations pour aller plus loin

### Structuration des données
- Externaliser les contenus dans un format structuré (`data/ple.json` ou `ple.yaml`) et générer le HTML via un script (Node.js, Eleventy, Astro) pour éviter les erreurs de copie.
- Ajouter un système de typage léger (TypeScript ou Zod) afin de valider la présence des champs attendus.

### Industrialisation
- Intégrer des linters (Stylelint, ESLint) via `npm` et configurer un job CI (GitHub Actions) exécutant :
  - `npm run lint` pour les vérifications CSS/JS.
  - `npx html-validate` pour contrôler la sémantique HTML.
- Mettre en place un déploiement continu (GitHub Pages, Netlify) afin de simplifier la publication.

### Expérience contributeur
- Ajouter des scripts `npm` (ex. `npm run dev`) lançant un serveur statique avec rechargement automatique (Vite, Parcel, `live-server`).
- Fournir des snippets ou composants réutilisables pour les futurs ajouts de disciplines (pattern `discipline-card` + contenu Markdown).

### Accessibilité & UX
- Intégrer des tests automatiques (axe-core, Pa11y) dans la CI.
- Gérer le focus trap dans la modale et proposer une navigation intra-modale via un sommaire.
- Prévoir une version imprimable / export PDF du PLE pour diffusion hors ligne.

En appliquant ces recommandations, la base de code pourra évoluer vers un véritable design system léger, améliorer la collaboration entre enseignants et offrir un meilleur confort de contribution (DX).
