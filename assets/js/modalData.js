export const modalData = {
  hg: {
    title: "Histoire-Géographie",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <h4>Nombre de notes</h4>
        <p>≥ 3 notes (QP, analyse de documents, transposition en croquis).</p>
        <h4>Types et coefficients</h4>
        <ul>
          <li><strong>Diagnostiques</strong> : coef 0</li>
          <li><strong>Tests / DM</strong> : coef 0,5 à 1</li>
          <li><strong>Sommatifs type bac</strong> : coef 2 (1 à 1,5 si sujets adaptés)</li>
          <li><strong>Travaux de groupe</strong> : coef 0,5 à 1</li>
          <li><strong>Oral</strong> : coef 1 à 2</li>
        </ul>
        <h4>Seuil de significativité</h4>
        <p>Moins de 2 travaux certificatifs : moyenne non significative. Absence injustifiée ou fraude : 0.</p>
      </div>
      <div class="section">
        <h3>Terminale — Contrôle continu</h3>
        <h4>Nombre de notes</h4>
        <p>≥ 3 notes (QP/AD/PG).</p>
        <h4>Types et coefficients</h4>
        <ul>
          <li><strong>DM / travail en classe</strong> : coef 1</li>
          <li><strong>DS (QP/AD/PG)</strong> : coef 2</li>
          <li><strong>Oral</strong> : coef 1 à 2</li>
        </ul>
      </div>
    `,
  },
  emc: {
    title: "Éducation morale et civique",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <h4>Nombre de notes</h4>
        <p>≥ 1 note certificative.</p>
        <h4>Types</h4>
        <ul>
          <li>Travaux écrits sur corpus, synthèse</li>
          <li>Recherche et présentation de projet</li>
          <li>Débat évalué</li>
          <li>Prestation orale individuelle</li>
        </ul>
        <h4>Coefficients</h4>
        <ul>
          <li>Diagnostiques : 0</li>
          <li>Productions individuelles : 1 à 2</li>
          <li>Travaux de groupe : 0,5 à 1</li>
          <li>Certificatives : 2</li>
        </ul>
      </div>
      <div class="section">
        <h3>Terminale — Contrôle continu</h3>
        <p>≥ 2 notes. Dossiers documentaires, exposés et débats. Écrits et oraux coef 1 (jusqu'à 2 selon le travail).</p>
      </div>
    `,
  },
  es: {
    title: "Enseignement scientifique (SVT)",
    content: `
      <div class="section">
        <h3>Première et Terminale — Contrôle continu</h3>
        <h4>Nombre de notes</h4>
        <p>2 notes par trimestre dont 1 certificative.</p>
        <h4>Type et coefficient</h4>
        <ul>
          <li>Devoirs sur table : étude de docs + raisonnement scientifique — coef 1</li>
        </ul>
        <h4>Critères</h4>
        <ul>
          <li>Maîtrise et mobilisation des connaissances</li>
          <li>Démarche scientifique construite à partir d'un corpus</li>
        </ul>
      </div>
    `,
  },
  anglais: {
    title: "Anglais",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 2 notes couvrant CO, CE, EO, EE.</p>
        <ul>
          <li>CO : compte‑rendu FR ≤ 1'30 — coef 2</li>
          <li>CE : lecture + questions — coef 2</li>
          <li>EO : présentations variées — coef 2</li>
          <li>EE : récit, article, email, contenu digital — coef 2</li>
          <li>Éval « type bac » au T2 — coef 3</li>
        </ul>
        <p>Grilles CECRL. Niveau attendu fin 1re : <strong>B2</strong>.</p>
      </div>
      <div class="section">
        <h3>Terminale — Contrôle continu</h3>
        <ul>
          <li>Évals fin de chapitre EO/EE — coef 2</li>
          <li>Évals « type bac » CO/CE/EO/EE — coef 3</li>
          <li>Tests vocab/DM — coef 1</li>
        </ul>
        <p>Niveau attendu fin Tle : <strong>B2+/C1</strong> (C2 en AMC). Grilles officielles.</p>
      </div>
    `,
  },
  espagnol: {
    title: "Espagnol",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 3 compétences évaluées par trimestre.</p>
        <ul>
          <li>CO : compte‑rendu FR ≤ 1'30 — coef 2</li>
          <li>CE : lecture + Q/Synthèse/CR — coef 2</li>
          <li>EO : présentations — coef 1</li>
          <li>EE : récit/article/email/argumentation — coef 2</li>
          <li>Test vocab/gram — coef 0,5</li>
        </ul>
        <p>Grilles CECRL. Niveau attendu fin 1re : <strong>B1</strong>.</p>
      </div>
      <div class="section">
        <h3>Terminale — Contrôle continu</h3>
        <ul>
          <li>2 notes type bac</li>
          <li>1 test de connaissances et EO</li>
        </ul>
        <p>Type bac : coef 2. EO : coef 1. Test : coef 0,5.</p>
      </div>
    `,
  },
  hggsp: {
    title: "Spécialité HGGSP",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 3 notes. Dissertation et étude critique de docs. Préparation au Grand Oral.</p>
        <ul>
          <li>Diagnostiques : 0</li>
          <li>Tests / DM : 0,5 à 1</li>
          <li>Sommatifs type bac : 2 (1 à 1,5 si adaptés)</li>
          <li>Travaux de groupe : 0,5 à 1</li>
          <li>Oral : 1 à 2</li>
        </ul>
        <p>Seuil : &lt; 2 certificatifs ⇒ moyenne non significative.</p>
      </div>
    `,
  },
  ses: {
    title: "Spécialité SES",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 3 notes sur EC ou dissertation.</p>
        <ul>
          <li>EC1 — coef 1 (~10 jours)</li>
          <li>EC2 — coef 1 (~15 jours)</li>
          <li>Épreuve complète 2h — coef 2</li>
          <li>DM / Exposés — coef 1 ou 0,5</li>
        </ul>
        <p>Seuil : &lt; 2 certificatifs ⇒ moyenne non significative. Moyenne annuelle certificative si non poursuivie en Tle.</p>
      </div>
    `,
  },
  phch: {
    title: "Spécialité Physique‑Chimie",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 3 notes dont 2 certificatives.</p>
        <ul>
          <li>DS notés /20 — <strong>coef 2</strong> (certificatifs)</li>
          <li>Résolution de problème en groupe — /10 — coef 1</li>
          <li>QCM Pronote hors classe — /10 — coef 1</li>
          <li>Activités expérimentales ou documentaires — coef 1</li>
        </ul>
        <h4>Compétences</h4>
        <ul>
          <li>S'approprier, Analyser‑Raisonner, Réaliser, Valider, Communiquer</li>
        </ul>
      </div>
    `,
  },
  svt: {
    title: "Spécialité SVT",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 3 notes dont 2 certificatives.</p>
        <ul>
          <li>DS : texte argumenté + raisonnement scientifique — coef 2</li>
          <li>DM et/ou oraux — coef 1</li>
          <li>TP — coef 1</li>
        </ul>
        <h4>Critères</h4>
        <ul>
          <li>Maîtrise des connaissances et mobilisation</li>
          <li>Démarche scientifique à partir d'un corpus</li>
        </ul>
      </div>
    `,
  },
  llce: {
    title: "Spécialité LLCE — AMC",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <p>≥ 3 notes.</p>
        <ul>
          <li>EO (présentations variées) — coef 2</li>
          <li>EE — coef 2</li>
          <li>CE — coef 2</li>
          <li>Dès T2 : évaluations « type bac » synthèse et traduction — coef 2</li>
        </ul>
        <p>Évaluations selon grilles officielles.</p>
      </div>
    `,
  },
  maths: {
    title: "Spécialité Mathématiques",
    content: `
      <div class="section">
        <h3>Première — Contrôle continu</h3>
        <h4>Nombre de notes</h4>
        <p>Au moins 3 notes.</p>
        <h4>Types d'évaluations et coefficients</h4>
        <ul>
          <li><strong>Devoirs sur table</strong> : problèmes et exercices « type bac » — coef 1</li>
          <li><strong>QCM et questions de cours</strong> — coef 0,5</li>
        </ul>
        <h4>Critères d'évaluation</h4>
        <ul>
          <li>Mise en œuvre d'automatismes et applications directes du cours</li>
          <li>6 compétences : Chercher, Modéliser, Représenter, Raisonner, Calculer, Communiquer</li>
        </ul>
        <h4>Correcteur tiers</h4>
        <p>Non applicable.</p>
      </div>
    `,
  },
};
