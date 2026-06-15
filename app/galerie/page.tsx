import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Galerie & Résultats" };

export default function GaleriePage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="py-[76px] pb-16 text-center bg-cream-2">
        <div className="max-w-[880px] mx-auto px-8">
          <span className="eyebrow">Galerie & résultats</span>
          <h1 className="display h-lg">L&apos;institut & vos résultats</h1>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-[18px]">
            Un aperçu de notre univers et des résultats obtenus séance après séance.
          </p>
        </div>
      </section>

      {/* AMBIANCE GALLERY */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-10">
            <span className="eyebrow">L&apos;ambiance</span>
            <h2 className="display h-md">Notre univers</h2>
          </div>
          <div className="gal">
            <div className="tall rounded-[6px] overflow-hidden"><ImagePlaceholder label="Cabine de soin" /></div>
            <div className="rounded-[6px] overflow-hidden"><ImagePlaceholder label="Détail décoration" /></div>
            <div className="rounded-[6px] overflow-hidden"><ImagePlaceholder label="Accueil" /></div>
            <div className="rounded-[6px] overflow-hidden"><ImagePlaceholder label="Matériel laser" /></div>
            <div className="tall rounded-[6px] overflow-hidden"><ImagePlaceholder label="Espace détente" /></div>
            <div className="rounded-[6px] overflow-hidden"><ImagePlaceholder label="Produits" /></div>
            <div className="rounded-[6px] overflow-hidden"><ImagePlaceholder label="Lumière du Sud" /></div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 bg-cream-2">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[46px]">
            <span className="eyebrow">Avant / Après</span>
            <h2 className="display h-lg">Des résultats qui durent</h2>
            <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-4">
              Photos prises à intervalle régulier — résultats observés en moyenne dès la 4ᵉ séance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {[0, 1].map((i) => (
              <div key={i} className="grid grid-cols-2 rounded-[4px] overflow-hidden shadow">
                <div className="relative aspect-square">
                  <span className="absolute top-3.5 left-3.5 z-10 bg-[rgba(44,51,31,0.7)] text-cream text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px]">Avant</span>
                  <ImagePlaceholder label="Avant" />
                </div>
                <div className="relative aspect-square">
                  <span className="absolute top-3.5 left-3.5 z-10 bg-sage-mid text-cream text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px]">Après</span>
                  <ImagePlaceholder label="Après" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-ink-soft text-[13px] mt-[22px]">
            Les résultats peuvent varier selon le phototype, la zone et la pilosité.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-deep">
        <div className="max-w-[880px] mx-auto px-8 text-center">
          <h2 className="display h-md text-cream">Envie de ces résultats ?</h2>
          <p className="text-[1.12rem] font-light text-[rgba(251,248,240,0.86)] max-w-[56ch] mx-auto mt-3.5 mb-6">
            Réservez votre bilan offert et lancez votre cure dès cette semaine.
          </p>
          <Link href="/rendez-vous"
            className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-gold text-ink hover:bg-gold-deep transition-colors">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
