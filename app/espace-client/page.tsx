import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mon espace client" };

export default function EspaceClientPage() {
  return (
    <section className="py-24 bg-cream min-h-[60vh]">
      <div className="max-w-[880px] mx-auto px-8">
        <span className="eyebrow">Mon espace</span>
        <h1 className="display h-lg mb-2">Bienvenue</h1>
        <p className="text-[1.12rem] font-light text-ink-soft mb-8">
          Gérez vos rendez-vous, suivez vos séances et échangez avec l&apos;équipe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { href: "/rendez-vous", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>`, title: "Mes rendez-vous", sub: "Voir & gérer mes créneaux" },
            { href: "/messagerie",  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.4 8.4 0 0 1-11.7 7.8L3 21l1.7-6.3A8.4 8.4 0 1 1 21 11.5z"/></svg>`, title: "Messagerie", sub: "Contacter l'équipe" },
            { href: "/prestations", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`, title: "Mes prestations", sub: "Historique & suivi" },
          ].map((card) => (
            <Link key={card.href} href={card.href}
              className="bg-white border border-line rounded-[4px] p-[34px_30px] transition-all duration-400 hover:-translate-y-[5px] hover:shadow flex flex-col gap-3">
              <div className="w-14 h-14 rounded-full grid place-items-center bg-cream-2 text-sage-mid"
                dangerouslySetInnerHTML={{ __html: card.icon }} />
              <h3 className="font-serif text-[1.5rem]">{card.title}</h3>
              <p className="text-ink-soft text-[14px]">{card.sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
