"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Mode = "login" | "signup";

export default function ConnexionPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isAdmin = /admin/i.test(email);
    const displayName = name || (isAdmin ? "Administrateur" : email.split("@")[0] || "Cliente");
    // In a real app you'd call an API here
    const user = { name: displayName.charAt(0).toUpperCase() + displayName.slice(1), email, role: isAdmin ? "admin" : "client" };
    if (typeof window !== "undefined") {
      localStorage.setItem("laserSud_user", JSON.stringify(user));
    }
    router.push(isAdmin ? "/espace-client" : "/espace-client");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "calc(100vh - 78px - 44px)" }}>
      {/* Visual */}
      <div className="relative min-h-[200px] md:min-h-0">
        <ImagePlaceholder label="Photo ambiance institut" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(104,121,81,0.25)] to-[rgba(93,110,72,0.55)] flex items-end p-[54px]">
          <h2 className="display text-[2.6rem] text-cream max-w-[18ch]">
            Votre espace beauté, à portée de main
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-[60px_40px] bg-cream">
        <div className="w-full max-w-[420px]">
          <div className="mb-[26px]">
            <span className="eyebrow">Espace client</span>
            <h1 className="display text-[2.1rem] leading-[1.14]">
              {mode === "login" ? "Bon retour parmi nous" : "Rejoignez Laser Sud"}
            </h1>
            <p className="text-ink-soft text-[14px] mt-2.5">
              {mode === "login"
                ? "Connectez-vous pour gérer vos rendez-vous et messages."
                : "Créez votre compte en quelques secondes."}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1.5 bg-cream-2 p-[5px] rounded-[6px] mb-[30px]">
            {(["login", "signup"] as Mode[]).map((m) => (
              <button key={m} onClick={() => setMode(m)}
                className={`flex-1 py-[11px] border-none cursor-pointer font-sans text-[13px] tracking-[0.1em] uppercase rounded-[4px] transition-all
                  ${mode === m ? "bg-white text-ink shadow-sm" : "bg-transparent text-ink-soft hover:text-ink"}`}>
                {m === "login" ? "Connexion" : "Créer un compte"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="mb-[18px]">
                <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Prénom</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre prénom"
                  className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" />
              </div>
            )}
            <div className="mb-[18px]">
              <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">E-mail</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.fr"
                className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" />
            </div>
            <div className="mb-[18px]">
              <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-ink-soft mb-2">Mot de passe</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full font-sans text-[15px] font-light px-4 py-3.5 border border-line rounded-[3px] bg-white text-ink focus:outline-none focus:border-sage focus:ring-[3px] focus:ring-[rgba(153,164,121,0.18)] transition-all" />
            </div>
            <button type="submit"
              className="w-full flex items-center justify-center gap-2.5 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-[34px] py-4 border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors cursor-pointer">
              {mode === "login" ? "Se connecter" : "Créer mon compte"}
            </button>
          </form>

          <p className="text-[12.5px] text-ink-soft bg-cream-2 px-3.5 py-3 rounded-[6px] mt-[18px] leading-[1.5]">
            Démo — n&apos;importe quel e-mail et mot de passe fonctionnent. Astuce : utilisez une adresse contenant « admin » pour accéder à l&apos;espace administrateur.
          </p>
        </div>
      </div>
    </div>
  );
}
