"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/data";

const IconUser  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>;
const IconChat  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 11.5a8.4 8.4 0 0 1-11.7 7.8L3 21l1.7-6.3A8.4 8.4 0 1 1 21 11.5z"/></svg>;
const IconMenu  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
const IconClose = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M6 6l12 12M18 6L6 18"/></svg>;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  return (
    <>
      {/* Announce bar */}
      <div className="bg-sage-mid text-cream text-center text-[11.5px] tracking-[0.24em] uppercase py-2.5 px-4 font-light">
        Première séance découverte à -30% · Institut à Fos-sur-Mer ·{" "}
        <Link href="/rendez-vous" className="text-gold underline underline-offset-[3px]">Réserver</Link>
      </div>

      {/* Sticky nav */}
      <nav className={`sticky top-0 z-60 bg-cream border-b border-line transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="max-w-site mx-auto px-8 h-[78px] flex items-center gap-7">
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[30px] mx-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-[18px] ml-auto md:ml-0">
            <Link href="/messagerie" aria-label="Messagerie"
              className="w-10 h-10 grid place-items-center rounded-full text-ink hover:bg-cream-2 hover:text-sage-mid transition-colors">
              <IconChat />
            </Link>
            <Link href="/connexion" aria-label="Mon compte"
              className="w-10 h-10 grid place-items-center rounded-full text-ink hover:bg-cream-2 hover:text-sage-mid transition-colors">
              <IconUser />
            </Link>
            <Link href="/rendez-vous"
              className="hidden md:inline-flex items-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[22px] py-[11px] border border-transparent rounded-[2px] cursor-pointer transition-all duration-300 bg-sage-mid text-cream hover:bg-sage-deep ml-1">
              Rendez-vous
            </Link>
            <button
              className="md:hidden w-10 h-10 grid place-items-center rounded-full text-ink hover:bg-cream-2"
              onClick={() => setDrawerOpen(true)}
              aria-label="Menu"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-[rgba(40,50,25,0.4)] z-80 transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[84vw] bg-cream z-[81] transition-transform duration-350 p-7 overflow-y-auto shadow-[−20px_0_60px_-30px_rgba(0,0,0,0.4)] ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-[18px] right-[18px] w-10 h-10 grid place-items-center rounded-full text-ink hover:bg-cream-2"
          onClick={() => setDrawerOpen(false)}
          aria-label="Fermer"
        >
          <IconClose />
        </button>
        <div className="mb-6"><Logo /></div>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}
            className="block py-3.5 border-b border-line text-[15px] tracking-[0.08em] uppercase">
            {link.label}
          </Link>
        ))}
        <Link href="/messagerie"
          className="block py-3.5 border-b border-line text-[15px] tracking-[0.08em] uppercase">
          Messagerie
        </Link>
        <Link href="/connexion"
          className="block py-3.5 border-b border-line text-[15px] tracking-[0.08em] uppercase">
          Connexion
        </Link>
        <Link href="/rendez-vous"
          className="mt-5 w-full flex items-center justify-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[22px] py-4 border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors">
          Prendre rendez-vous
        </Link>
      </aside>
    </>
  );
}
