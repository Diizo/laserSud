"use client";
import { useState } from "react";
import Link from "next/link";
import { ALL_SLOTS, MOIS, fmtLong, ALL_SERVICES_FLAT } from "@/lib/data";

function pad(n: number) { return n < 10 ? `0${n}` : `${n}`; }
function dkey(d: Date) { return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function isSunday(d: Date) { return d.getDay() === 0; }

function takenSlots(date: Date): string[] {
  const seed = date.getDate() + date.getMonth() * 31;
  return ALL_SLOTS.filter((_, i) => (seed + i * 7) % 3 === 0);
}

// Group services by category for <optgroup>
const SERVICE_GROUPS = [
  { label: "Visage", items: ALL_SERVICES_FLAT.filter(s => s.category === "Visage") },
  { label: "Jambes", items: ALL_SERVICES_FLAT.filter(s => s.category === "Jambes") },
  { label: "Bras",   items: ALL_SERVICES_FLAT.filter(s => s.category === "Bras") },
  { label: "Corps",  items: ALL_SERVICES_FLAT.filter(s => s.category === "Corps") },
  { label: "Découverte", items: [{ name: "Bilan personnalisé (offert)", price: "0 €", category: "Découverte" }] },
];

export default function RendezVousPage() {
  const today = new Date(); today.setHours(0,0,0,0);
  const [view, setView] = useState(() => { const d = new Date(); d.setDate(1); return d; });
  const [sel, setSel] = useState<{ service: string; date: Date | null; time: string }>({ service: "", date: null, time: "" });
  const [confirmed, setConfirmed] = useState(false);

  const firstDow = (new Date(view.getFullYear(), view.getMonth(), 1).getDay() + 6) % 7;
  const daysIn   = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const days     = Array.from({ length: daysIn }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1));

  const slots = sel.date
    ? (sel.date.getDay() === 6 ? ALL_SLOTS.filter(s => s < "13") : ALL_SLOTS)
    : [];
  const taken = sel.date ? takenSlots(sel.date) : [];

  function prevMonth() {
    const min = new Date(today.getFullYear(), today.getMonth(), 1);
    const prev = new Date(view.getFullYear(), view.getMonth() - 1, 1);
    if (prev >= min) setView(prev);
  }
  function nextMonth() { setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)); }

  function confirm() {
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const canConfirm = sel.service && sel.date && sel.time;

  if (confirmed) {
    return (
      <section className="py-24 bg-cream min-h-[70vh] flex items-center">
        <div className="max-w-[520px] mx-auto px-8 text-center">
          <div className="w-[72px] h-[72px] rounded-full bg-[#e7efdc] text-sage-deep grid place-items-center mx-auto mb-[18px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9"><path d="M5 12l5 5L20 6"/></svg>
          </div>
          <h2 className="display text-[2rem]">Rendez-vous confirmé !</h2>
          <p className="text-ink-soft mt-2.5 mb-5">Un récapitulatif vous a été envoyé. À très bientôt chez Laser Sud 🌿</p>
          <div className="bg-cream-2 rounded-[8px] p-[18px_20px] mb-5 text-left">
            {[
              { k: "Prestation", v: sel.service.split(" — ")[0] },
              { k: "Date",       v: sel.date ? fmtLong(dkey(sel.date)) : "—" },
              { k: "Horaire",    v: sel.time },
            ].map((row) => (
              <div key={row.k} className="flex justify-between gap-3 py-3 border-b border-[rgba(0,0,0,0.06)] last:border-0 text-[14.5px]">
                <span className="text-ink-soft">{row.k}</span>
                <span className="font-medium text-right">{row.v}</span>
              </div>
            ))}
          </div>
          <Link href="/espace-client"
            className="w-full flex items-center justify-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors">
            Voir dans mon espace
          </Link>
          <button onClick={() => { setSel({ service: "", date: null, time: "" }); setConfirmed(false); }}
            className="w-full mt-2.5 flex items-center justify-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-current rounded-[2px] text-ink hover:bg-ink hover:text-cream transition-colors cursor-pointer">
            Prendre un autre rendez-vous
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="py-14 pb-10 text-center bg-cream-2">
        <div className="max-w-[880px] mx-auto px-8">
          <span className="eyebrow">Réservation en ligne</span>
          <h1 className="display h-lg">Choisissez votre créneau</h1>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-4">
            Sélectionnez une prestation, une date et un horaire. Bilan offert sur votre première séance.
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-[30px] items-start">
            {/* LEFT: service + calendar */}
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="bg-white border border-line rounded-[4px] p-[30px_32px]">
                <div className="flex items-center gap-3 mb-[18px]">
                  <span className="w-[30px] h-[30px] rounded-full bg-sage-mid text-cream grid place-items-center font-serif text-[1rem] flex-none">1</span>
                  <h3 className="display text-[1.45rem]">Votre prestation</h3>
                </div>
                <select value={sel.service} onChange={(e) => setSel(s => ({ ...s, service: e.target.value }))}
                  className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage transition-all">
                  <option value="" disabled>Choisir une prestation…</option>
                  {SERVICE_GROUPS.map((g) => (
                    <optgroup key={g.label} label={g.label}>
                      {g.items.map((item) => (
                        <option key={item.name}>{item.name} — {item.price}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Step 2 — Calendar */}
              <div className="bg-white border border-line rounded-[4px] p-[30px_32px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-[30px] h-[30px] rounded-full bg-sage-mid text-cream grid place-items-center font-serif text-[1rem] flex-none">2</span>
                  <h3 className="display text-[1.45rem]">Votre date</h3>
                </div>
                {/* Calendar header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-[1.5rem] capitalize">{MOIS[view.getMonth()]} {view.getFullYear()}</span>
                  <div className="flex gap-2">
                    <button onClick={prevMonth} aria-label="Mois précédent"
                      className="w-10 h-10 grid place-items-center rounded-full text-ink hover:bg-cream-2 transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button onClick={nextMonth} aria-label="Mois suivant"
                      className="w-10 h-10 grid place-items-center rounded-full text-ink hover:bg-cream-2 transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                </div>
                {/* Day-of-week headers */}
                <div className="grid grid-cols-7 gap-1.5 mb-1.5">
                  {["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map(d => (
                    <div key={d} className="text-center text-[11px] tracking-[0.08em] uppercase text-ink-soft py-1.5 font-medium">{d}</div>
                  ))}
                </div>
                {/* Days */}
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: firstDow }).map((_, i) => (
                    <div key={`blank-${i}`} className="cal-day blank" />
                  ))}
                  {days.map((date) => {
                    const disabled = isSunday(date) || date < today;
                    const isToday  = date.getTime() === today.getTime();
                    const isSelected = sel.date && dkey(sel.date) === dkey(date);
                    return (
                      <div key={dkey(date)}
                        className={`cal-day text-[15px] ${disabled ? "disabled" : ""} ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}
                        onClick={() => { if (!disabled) setSel(s => ({ ...s, date, time: "" })); }}>
                        {date.getDate()}
                        {!disabled && <span className="cal-dot" />}
                      </div>
                    );
                  })}
                </div>
                <p className="text-ink-soft text-[12.5px] mt-3.5 flex items-center gap-1.5">
                  <span className="w-[5px] h-[5px] rounded-full bg-gold-deep inline-block" /> Créneaux disponibles · Dimanches fermés
                </p>
              </div>
            </div>

            {/* RIGHT: slots + summary */}
            <div className="bg-white border border-line rounded-[4px] p-[30px_32px] sticky top-24">
              <div className="flex items-center gap-3 mb-[18px]">
                <span className="w-[30px] h-[30px] rounded-full bg-sage-mid text-cream grid place-items-center font-serif text-[1rem] flex-none">3</span>
                <h3 className="display text-[1.45rem]">Votre horaire</h3>
              </div>
              {!sel.date ? (
                <p className="text-ink-soft italic py-5">Sélectionnez d&apos;abord une date dans le calendrier.</p>
              ) : (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(82px,1fr))] gap-2.5">
                  {slots.map((s) => {
                    const isTaken    = taken.includes(s);
                    const isSelected = sel.time === s;
                    return (
                      <div key={s}
                        className={`px-2 py-[11px] border rounded-[6px] bg-white cursor-pointer font-sans text-[14px] text-center transition-all
                          ${isTaken    ? "border-line text-line line-through cursor-not-allowed bg-cream" : "border-line hover:border-sage"}
                          ${isSelected ? "bg-sage-mid text-cream border-sage-mid" : ""}`}
                        onClick={() => { if (!isTaken) setSel(sv => ({ ...sv, time: s })); }}>
                        {s}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Summary */}
              <div className="mt-[26px] pt-[22px] border-t border-line">
                <h4 className="display text-[1.3rem] mb-2">Récapitulatif</h4>
                {[
                  { k: "Prestation", v: sel.service || "—" },
                  { k: "Date",       v: sel.date ? fmtLong(dkey(sel.date)) : "—" },
                  { k: "Horaire",    v: sel.time || "—" },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between gap-3 py-3 border-b border-line last:border-0 text-[14.5px]">
                    <span className="text-ink-soft">{row.k}</span>
                    <span className="font-medium text-right">{row.v}</span>
                  </div>
                ))}
                <button disabled={!canConfirm} onClick={confirm}
                  className={`w-full mt-[22px] flex items-center justify-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] transition-colors cursor-pointer
                    ${canConfirm ? "bg-sage-mid text-cream hover:bg-sage-deep" : "bg-line text-ink-soft cursor-not-allowed"}`}>
                  Confirmer le rendez-vous
                </button>
                <p className="text-ink-soft text-[12px] text-center mt-3">Sans engagement · Annulation gratuite jusqu&apos;à 24 h avant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
