import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "À propos" };

const STATS = [
  { value: "2 000+", label: "Clientes accompagnées" },
  { value: "4,9/5",  label: "Note moyenne" },
  { value: "15",     label: "Zones traitées" },
  { value: "100%",   label: "Phototypes pris en charge" },
];

const VALUES = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Sécurité avant tout",
    text: "Protocoles médicaux stricts, matériel certifié et personnel formé en continu.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-4.5-9.5-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>`,
    title: "Écoute & bienveillance",
    text: "On vous explique, on vous rassure, on respecte votre intimité et votre rythme.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>`,
    title: "Transparence",
    text: "Des tarifs clairs, un nombre de séances annoncé, aucune vente forcée.",
  },
];

const TEAM = [
  { name: "Camille", role: "Fondatrice & praticienne" },
  { name: "Léa",     role: "Praticienne laser" },
  { name: "Inès",    role: "Conseillère & accueil" },
];

export default function AProposPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="py-[76px] pb-16 text-center bg-cream-2">
        <div className="max-w-[880px] mx-auto px-8">
          <span className="eyebrow">L&apos;institut</span>
          <h1 className="display h-lg">Laser Sud, la beauté<br />baignée de lumière</h1>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-[18px]">
            Né à Fos-sur-Mer, notre institut conjugue l&apos;exigence du soin médical et la douceur d&apos;un lieu pensé pour vous détendre.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            <div className="aspect-[4/5] rounded-[4px] overflow-hidden shadow">
              <ImagePlaceholder label="Accueil / espace d'attente" />
            </div>
            <div>
              <span className="eyebrow">Notre histoire</span>
              <h2 className="display h-lg">Une autre idée de l&apos;épilation</h2>
              <p className="text-[1.12rem] font-light text-ink-soft mt-[18px]">
                Nous avons créé Laser Sud avec une conviction simple : se faire épiler ne devrait jamais être une corvée, mais un moment pour soi. Ici, pas de cabine froide ni de précipitation — un cadre clair, des couleurs de garrigue, et une équipe qui prend le temps.
              </p>
              <p className="text-[1.12rem] font-light text-ink-soft mt-4">
                Nous avons choisi une technologie laser parmi les plus performantes du marché, adaptée à tous les phototypes, pour des résultats durables en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-sage text-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[50px]">
            <span className="eyebrow" style={{ color: "#f2d785" }}>Ce qui nous guide</span>
            <h2 className="display h-lg text-cream">Nos engagements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {VALUES.map((v) => (
              <div key={v.title}
                className="bg-white border border-line rounded-[4px] p-[34px_30px] transition-all duration-400 hover:-translate-y-[5px] hover:shadow">
                <div className="w-14 h-14 rounded-full grid place-items-center bg-cream-2 text-sage-mid mb-[22px]"
                  dangerouslySetInnerHTML={{ __html: v.icon }} />
                <h3 className="font-serif font-medium text-[1.55rem] mb-2 text-ink">{v.title}</h3>
                <p className="text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-cream-2">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="display text-[3.2rem] text-sage-mid">{s.value}</div>
                <p className="text-ink-soft text-[13px] tracking-[0.1em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[46px]">
            <span className="eyebrow">L&apos;équipe</span>
            <h2 className="display h-lg">Des mains expertes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden shadow max-w-[240px] mx-auto mb-[18px]">
                  <ImagePlaceholder label={`Portrait ${member.name}`} />
                </div>
                <h3 className="font-serif text-[1.5rem]">{member.name}</h3>
                <p className="text-ink-soft text-[13px] tracking-[0.1em] uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-deep">
        <div className="max-w-[880px] mx-auto px-8 text-center">
          <h2 className="display h-md text-cream">Venez nous rencontrer</h2>
          <p className="text-[1.12rem] font-light text-[rgba(251,248,240,0.86)] max-w-[56ch] mx-auto mt-3.5 mb-6">
            315 Allée Marie Curie, 13270 Fos-sur-Mer. On vous accueille avec le sourire.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/rendez-vous"
              className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-gold text-ink hover:bg-gold-deep transition-colors">
              Réserver mon bilan offert
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-current rounded-[2px] text-cream hover:bg-cream hover:text-ink transition-colors">
              Nous trouver
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
