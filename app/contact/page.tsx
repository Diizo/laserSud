"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="py-[76px] pb-16 text-center bg-cream-2">
        <div className="max-w-[880px] mx-auto px-8">
          <div className="text-[12px] tracking-[0.16em] uppercase text-sage-mid mb-4">Accueil · Contact</div>
          <span className="eyebrow">Contact</span>
          <h1 className="display h-lg">On vous répond avec plaisir</h1>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-[18px]">
            Une question, un conseil, un rendez-vous ? Écrivez-nous via le formulaire, par messagerie, ou passez nous voir à l&apos;institut.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[54px] items-start">
            {/* FORM */}
            <div className="bg-white border border-line rounded-[4px] p-[40px_38px]">
              <h2 className="display text-[1.9rem] mb-1.5">Envoyez-nous un message</h2>
              <p className="text-ink-soft text-[14px] mb-[26px]">
                Réponse sous 24 h ouvrées. Pour un échange instantané, utilisez notre{" "}
                <Link href="/messagerie" className="text-sage-mid underline">messagerie</Link>.
              </p>
              {sent ? (
                <div className="p-[14px] bg-cream-2 rounded-[4px] text-sage-deep text-[14px] text-center">
                  Merci ! Votre message a bien été envoyé. 🌿
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-[18px]">
                    <div>
                      <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Prénom</label>
                      <input className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" required placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Nom</label>
                      <input className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" placeholder="Votre nom" />
                    </div>
                  </div>
                  <div className="mb-[18px]">
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">E-mail</label>
                    <input type="email" required placeholder="vous@exemple.fr" className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" />
                  </div>
                  <div className="mb-[18px]">
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Téléphone</label>
                    <input type="tel" placeholder="06 00 00 00 00" className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" />
                  </div>
                  <div className="mb-[18px]">
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Sujet</label>
                    <select className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all">
                      <option>Demande d&apos;information</option>
                      <option>Prise de rendez-vous</option>
                      <option>Tarifs & forfaits</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="mb-[18px]">
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Message</label>
                    <textarea required rows={4} placeholder="Dites-nous tout…" className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all resize-y min-h-[120px]" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors cursor-pointer">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div>
              {[
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
                  title: "Adresse",
                  content: "315 Allée Marie Curie<br/>13270 Fos-sur-Mer",
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>`,
                  title: "Téléphone",
                  content: `<a href="tel:+33000000000" class="text-sage-mid">04 00 00 00 00</a>`,
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
                  title: "E-mail",
                  content: `<a href="mailto:contact@lasersud.fr" class="text-sage-mid">contact@lasersud.fr</a>`,
                },
                {
                  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
                  title: "Horaires",
                  content: "Lun – Ven · 9h – 19h<br/>Samedi · 9h – 13h<br/>Dimanche · fermé",
                },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start py-[22px] border-b border-line last:border-0">
                  <div className="w-12 h-12 rounded-full grid place-items-center bg-cream-2 text-sage-mid flex-none"
                    dangerouslySetInnerHTML={{ __html: info.icon }} />
                  <div>
                    <h4 className="font-serif text-[1.3rem] mb-1">{info.title}</h4>
                    <p className="text-ink-soft" dangerouslySetInnerHTML={{ __html: info.content }} />
                  </div>
                </div>
              ))}
              <div className="mt-6 rounded-[4px] overflow-hidden shadow" style={{ aspectRatio: "16/10" }}>
                <iframe
                  loading="lazy"
                  title="Carte Laser Sud"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=4.92%2C43.43%2C4.96%2C43.45&layer=mapnik&marker=43.44%2C4.94"
                  className="w-full h-full border-0"
                  style={{ filter: "grayscale(0.2) sepia(0.12) saturate(1.1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
