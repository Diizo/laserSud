import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Laser Sud — Institut d'épilation laser · Fos-sur-Mer",
};

const ZONES = [
  { id: "visage", label: "Visage",  href: "/prestations#visage" },
  { id: "jambes", label: "Jambes",  href: "/prestations#jambes" },
  { id: "bras",   label: "Bras",    href: "/prestations#bras" },
  { id: "corps",  label: "Corps",   href: "/prestations#corps" },
];

const WHY = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[26px] h-[26px]"><path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z"/></svg>,
    title: "Technologie dernier cri",
    text: "Un laser médical performant, adapté à tous les phototypes et à toutes les zones.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[26px] h-[26px]"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: "Résultats prouvés",
    text: "Des protocoles validés cliniquement, avec suivi personnalisé séance après séance.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[26px] h-[26px]"><path d="M12 21s-7-4.5-9.5-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>,
    title: "Équipe bienveillante",
    text: "Une équipe féminine à l'écoute, dans un cadre apaisant aux couleurs de la garrigue.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[26px] h-[26px]"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>,
    title: "Transparence totale",
    text: "Des tarifs clairs, un nombre de séances annoncé, aucune vente forcée.",
  },
];

const TESTIMONIALS = [
  { quote: "Résultat bluffant dès la 4ᵉ séance. L'équipe est adorable, je recommande les yeux fermés !", author: "Camille M." },
  { quote: "Enfin un institut où on prend vraiment le temps. Je me suis sentie bien accompagnée du début à la fin.", author: "Leïla T." },
  { quote: "Le matériel est top, les séances sont rapides et les effets sont là. Que du bonheur.", author: "Sophie D." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="relative min-h-[600px] grid">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Photo d'ambiance — cabine / institut" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(104,121,81,0.30)] to-[rgba(93,110,72,0.52)]" />
        <div className="relative z-10 self-center text-center text-cream px-8 py-[90px] max-w-[860px] mx-auto">
          <span className="eyebrow" style={{ color: "#f2d785" }}>Institut d&apos;épilation laser · Fos-sur-Mer</span>
          <h1 className="display h-xl mt-0 text-cream" style={{ textShadow: "0 2px 30px rgba(40,50,25,0.3)" }}>
            La douceur,<br />durablement.
          </h1>
          <p className="text-[1.12rem] font-light text-[rgba(255,255,255,0.92)] max-w-[56ch] mx-auto mt-[22px] mb-[34px]">
            Une épilation laser dernière génération, précise et confortable, dans un écrin de lumière. Dites adieu au rasoir — révélez une peau nette, naturellement.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/rendez-vous"
              className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] cursor-pointer transition-all duration-300 bg-gold text-ink hover:bg-gold-deep">
              Prendre rendez-vous
            </Link>
            <Link href="/prestations"
              className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-current rounded-[2px] cursor-pointer transition-all duration-300 text-cream hover:bg-cream hover:text-ink">
              Voir les prestations
            </Link>
          </div>
        </div>
      </header>

      {/* ── INTRO ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-[880px] mx-auto px-8 text-center">
          <div className="divider-sun"><span className="w-[30px] h-[30px] inline-block">·</span></div>
          <span className="eyebrow">Bienvenue chez Laser Sud</span>
          <h2 className="display h-lg">Le geste beauté qui change tout</h2>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-[22px]">
            Fini les rendez-vous à répétition et les irritations. Notre technologie laser cible le poil à la racine, séance après séance, pour un résultat durable sur toutes les zones du corps — dans le confort et le respect de votre peau.
          </p>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[42px]">
            <span className="eyebrow">Nos zones de traitement</span>
            <h2 className="display h-md">Choisissez votre zone</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ZONES.map((z) => (
              <Link key={z.id} href={z.href} className="arch">
                <ImagePlaceholder label={z.label} />
                <span className="absolute left-3 right-3 bottom-3.5 z-10 text-center bg-[rgba(93,110,72,0.55)] backdrop-blur-sm text-cream font-serif text-[1.35rem] tracking-[0.16em] uppercase py-2.5 px-2">
                  {z.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="py-24 bg-cream-2">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[54px]">
            <span className="eyebrow">Pourquoi Laser Sud</span>
            <h2 className="display h-lg">L&apos;exigence du résultat,<br />la douceur en plus</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {WHY.map((w) => (
              <div key={w.title}
                className="bg-white border border-line rounded-[4px] p-[34px_30px] transition-all duration-400 hover:-translate-y-[5px] hover:shadow">
                <div className="w-14 h-14 rounded-full grid place-items-center bg-cream-2 text-sage-mid mb-[22px]">
                  {w.icon}
                </div>
                <h3 className="font-serif font-medium text-[1.55rem] mb-2">{w.title}</h3>
                <p className="text-ink-soft">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-sage text-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[50px]">
            <span className="eyebrow" style={{ color: "#f2d785" }}>Elles témoignent</span>
            <h2 className="display h-lg text-cream">Ce qu&apos;elles en disent</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.author}
                className="bg-white/10 border border-white/20 rounded-[4px] p-8">
                <p className="font-serif text-[1.2rem] italic leading-relaxed text-cream/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-[12px] tracking-[0.2em] uppercase text-gold">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-sage-deep">
        <div className="max-w-[880px] mx-auto px-8 text-center">
          <h2 className="display h-md text-cream">Prête à franchir le pas ?</h2>
          <p className="text-[1.12rem] font-light text-[rgba(251,248,240,0.86)] max-w-[56ch] mx-auto mt-3.5 mb-6">
            Réservez votre bilan offert et lancez votre cure dès cette semaine.
          </p>
          <Link href="/rendez-vous"
            className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] cursor-pointer transition-all duration-300 bg-gold text-ink hover:bg-gold-deep">
            Réserver mon bilan offert
          </Link>
        </div>
      </section>
    </>
  );
}
