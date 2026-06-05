import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sage-deep text-[rgba(251,248,240,0.82)] pt-[72px] pb-8">
      <div className="max-w-site mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10">
          {/* Brand */}
          <div>
            <div className="mb-[18px]"><Logo light /></div>
            <p className="text-[rgba(251,248,240,0.6)] text-[14px] leading-[1.7] max-w-[34ch]">
              Institut d&apos;épilation laser dernière génération. Une peau douce, durablement, dans un cadre apaisant baigné de lumière du Sud.
            </p>
          </div>
          {/* Institut */}
          <div>
            <h4 className="text-cream font-sans text-[12px] tracking-[0.2em] uppercase font-medium mb-5">Institut</h4>
            {[
              { href: "/prestations", label: "Prestations" },
              { href: "/galerie",     label: "Galerie" },
              { href: "/a-propos",    label: "À propos" },
              { href: "/blog",        label: "Conseils" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="block py-1.5 text-[rgba(251,248,240,0.78)] text-[14px] hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          {/* Mon compte */}
          <div>
            <h4 className="text-cream font-sans text-[12px] tracking-[0.2em] uppercase font-medium mb-5">Mon compte</h4>
            {[
              { href: "/connexion",      label: "Connexion" },
              { href: "/espace-client",  label: "Mon espace" },
              { href: "/messagerie",     label: "Messagerie" },
              { href: "/rendez-vous",    label: "Rendez-vous" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="block py-1.5 text-[rgba(251,248,240,0.78)] text-[14px] hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          {/* Adresse */}
          <div>
            <h4 className="text-cream font-sans text-[12px] tracking-[0.2em] uppercase font-medium mb-5">Nous trouver</h4>
            <p className="text-[rgba(251,248,240,0.6)] text-[14px] leading-[1.8]">
              315 Allée Marie Curie<br />13270 Fos-sur-Mer
            </p>
            <p className="text-[rgba(251,248,240,0.6)] text-[14px] leading-[1.8] mt-3">
              Lun – Ven · 9h – 19h<br />Sam · 9h – 13h
            </p>
            <Link href="/contact"
              className="text-gold mt-2 inline-block text-[14px] hover:text-gold-deep transition-colors">
              Itinéraire & contact →
            </Link>
          </div>
        </div>

        <div className="border-t border-[rgba(251,248,240,0.16)] mt-[52px] pt-[26px] flex flex-wrap justify-between gap-4 text-[12.5px] tracking-[0.04em] text-[rgba(251,248,240,0.6)]">
          <span>© {year} Laser Sud — Tous droits réservés</span>
          <span>Mentions légales · Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
