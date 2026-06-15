import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Prestations" };

export default function PrestationsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="py-[76px] pb-16 text-center bg-cream-2">
        <div className="max-w-[880px] mx-auto px-8">
          <span className="eyebrow">Nos prestations</span>
          <h1 className="display h-lg">Une zone, un protocole sur mesure</h1>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-[18px]">
            Du plus petit détail du visage aux grandes zones du corps, chaque prestation est réalisée au laser dernière génération. Tarifs indiqués à la séance — forfaits dégressifs disponibles.
          </p>
        </div>
      </section>

      {/* ZONES GRID */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-start">
            {SERVICES.map((svc) => (
              <div key={svc.id} id={svc.id}
                className="bg-white border border-line rounded-[4px] overflow-hidden"
                style={{ scrollMarginTop: "120px" }}>
                <div className="flex items-center gap-[18px] px-[30px] py-[26px] border-b border-line bg-cream-2">
                  <div>
                    <h3 className="font-serif text-[1.7rem]">{svc.label}</h3>
                  </div>
                </div>
                <ul className="list-none m-0 px-[30px] py-2">
                  {svc.items.map((item, i) => (
                    <li key={i}
                      className="flex justify-between items-center gap-4 py-3 border-b border-line last:border-0 text-[1rem]">
                      <span>{item.name}</span>
                      <span className="font-serif text-[1.25rem] text-sage-mid whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/rendez-vous"
              className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors">
              Réserver une prestation
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-sage text-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="rounded-[4px] overflow-hidden shadow aspect-[4/5]">
              <ImagePlaceholder label="Appareil laser / cabine" />
            </div>
            <div>
              <span className="eyebrow" style={{ color: "#f2d785" }}>Comment ça marche</span>
              <h2 className="display h-lg text-cream">La lumière qui cible le poil</h2>
              <p className="text-[1.12rem] font-light text-[rgba(251,248,240,0.86)] mt-[18px]">
                Le faisceau laser est absorbé par la mélanine du poil et chauffe le bulbe pour neutraliser sa repousse, sans abîmer la peau autour. Comme tous les poils ne poussent pas en même temps, plusieurs séances espacées sont nécessaires.
              </p>
              <div className="grid gap-3.5 mt-6">
                {[
                  { stat: "6 à 8 séances", sub: "en moyenne pour un résultat optimal" },
                  { stat: "4 à 8 semaines", sub: "d'intervalle entre chaque passage" },
                ].map((c) => (
                  <div key={c.stat} className="bg-white border border-line rounded-[4px] px-[22px] py-[18px]">
                    <strong className="font-serif text-[1.2rem] text-ink">{c.stat}</strong>
                    <div className="text-ink-soft text-[14px]">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREP */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="text-center mb-[46px]">
            <span className="eyebrow">Bien préparer sa séance</span>
            <h2 className="display h-lg">Avant & après</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { num: "1", title: "Rasez la zone", text: "24 à 48 h avant la séance, à blanc — ni cire ni épilateur les semaines précédentes." },
              { num: "2", title: "Évitez le soleil", text: "Pas d'exposition ni d'autobronzant 2 semaines avant et après." },
              { num: "3", title: "Hydratez la peau", text: "Après la séance, hydratez bien et appliquez une protection solaire SPF50." },
            ].map((step) => (
              <div key={step.num}
                className="bg-white border border-line rounded-[4px] p-[34px_30px] transition-all duration-400 hover:-translate-y-[5px] hover:shadow">
                <span className="font-serif text-[1.1rem] text-gold-deep tracking-[0.2em]">{step.num}</span>
                <h3 className="font-serif text-[1.4rem] mt-1.5 mb-2">{step.title}</h3>
                <p className="text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-deep">
        <div className="max-w-[880px] mx-auto px-8 text-center">
          <h2 className="display h-md text-cream">Une question sur votre zone ?</h2>
          <p className="text-[1.12rem] font-light text-[rgba(251,248,240,0.86)] max-w-[56ch] mx-auto mt-3.5 mb-6">
            Écrivez-nous, on vous conseille la prestation la mieux adaptée.
          </p>
          <Link href="/messagerie"
            className="inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-gold text-ink hover:bg-gold-deep transition-colors">
            Poser ma question
          </Link>
        </div>
      </section>
    </>
  );
}
