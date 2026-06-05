// ── Navigation ──────────────────────────────────────────
export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/galerie", label: "Galerie" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Conseils" },
  { href: "/contact", label: "Contact" },
];

// ── Services / Prestations ───────────────────────────────
export const SERVICES = [
  {
    id: "visage",
    label: "Visage",
    subtitle: "Précision & délicatesse",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 15c1 1 5 1 6 0"/></svg>`,
    items: [
      { name: "Inter-sourcils", price: "20 €" },
      { name: "Lèvre supérieure", price: "25 €" },
      { name: "Menton", price: "30 €" },
      { name: "Visage complet", price: "60 €" },
    ],
  },
  {
    id: "jambes",
    label: "Jambes",
    subtitle: "Lisses, du genou au pied",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 3h5l-1 8-1 10H9l1-10z"/><path d="M14 3l1 8-2 10"/></svg>`,
    items: [
      { name: "Demi-jambes", price: "70 €" },
      { name: "Cuisses", price: "80 €" },
      { name: "Jambes complètes", price: "120 €" },
      { name: "Pieds", price: "20 €" },
    ],
  },
  {
    id: "bras",
    label: "Bras",
    subtitle: "De l'épaule au bout des doigts",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 3v7a4 4 0 0 0 4 4h2l4 4 2-2-4-4V6"/><circle cx="18" cy="5" r="1.5"/></svg>`,
    items: [
      { name: "Aisselles", price: "30 €" },
      { name: "Mains", price: "20 €" },
      { name: "Avant-bras & mains", price: "55 €" },
      { name: "Bras (partie supérieure)", price: "50 €" },
      { name: "Bras entiers", price: "75 €" },
    ],
  },
  {
    id: "corps",
    label: "Corps",
    subtitle: "Confort & intimité respectés",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="5" r="2.4"/><path d="M12 8v8M8 11h8M9 21l3-5 3 5"/></svg>`,
    items: [
      { name: "Aréoles", price: "25 €" },
      { name: "Ligne du ventre", price: "25 €" },
      { name: "Sillon inter-fessier", price: "30 €" },
      { name: "Maillot classique", price: "35 €" },
      { name: "Maillot échancré ou intégral", price: "55 €" },
    ],
  },
];

// Flat list for booking dropdown
export const ALL_SERVICES_FLAT = SERVICES.flatMap((cat) =>
  cat.items.map((item) => ({ category: cat.label, ...item }))
);

// ── Blog posts ───────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: "preparer-peau",
    category: "Préparation",
    title: "Bien préparer sa peau avant une séance",
    excerpt: "Rasage, soleil, hydratation : les bons réflexes pour une séance efficace.",
  },
  {
    id: "idees-recues",
    category: "Mythes",
    title: "5 idées reçues sur l'épilation laser",
    excerpt: "Douleur, efficacité, peaux mates… on démêle le vrai du faux.",
  },
  {
    id: "laser-ete",
    category: "Saison",
    title: "Peut-on faire du laser en été ?",
    excerpt: "Soleil et laser : nos recommandations pour ne pas prendre de risque.",
  },
  {
    id: "apres-laser",
    category: "Soin",
    title: "Prendre soin de sa peau après le laser",
    excerpt: "Les gestes apaisants pour une récupération tout en douceur.",
  },
  {
    id: "maillot-finition",
    category: "Zones",
    title: "Maillot : bien choisir sa finition",
    excerpt: "Classique, échancré ou intégral : comment décider sereinement.",
  },
  {
    id: "laser-masculin",
    category: "Hommes",
    title: "L'épilation laser au masculin",
    excerpt: "Dos, torse, nuque : le laser n'est plus réservé à ces dames.",
  },
];

// ── Time slots for booking ───────────────────────────────
export const ALL_SLOTS = [
  "09:00","09:45","10:30","11:15","12:00",
  "14:00","14:45","15:30","16:15","17:00","17:45",
];

// ── French months ────────────────────────────────────────
export const MOIS = [
  "Janvier","Février","Mars","Avril","Mai","Juin",
  "Juillet","Août","Septembre","Octobre","Novembre","Décembre",
];

export function fmtLong(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}
