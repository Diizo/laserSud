"use client";
import { useState } from "react";

type Message = { from: "client" | "admin"; text: string; time: string };

const INITIAL: Message[] = [
  { from: "admin",  text: "Bonjour ! Comment puis-je vous aider ?", time: "10:02" },
];

export default function MessageriePage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [draft, setDraft] = useState("");

  function send() {
    const text = draft.trim();
    if (!text) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,"0")}`;
    setMessages(m => [...m, { from: "client", text, time }]);
    setDraft("");
    // Simulate reply
    setTimeout(() => {
      setMessages(m => [...m, {
        from: "admin",
        text: "Merci pour votre message ! Un membre de l'équipe vous répondra sous peu. 🌿",
        time: `${now.getHours()}:${String(now.getMinutes()).padStart(2,"0")}`,
      }]);
    }, 1200);
  }

  return (
    <section className="py-16 bg-cream min-h-[70vh]">
      <div className="max-w-[720px] mx-auto px-8">
        <span className="eyebrow">Messagerie</span>
        <h1 className="display h-md mb-6">Échangez avec l&apos;équipe</h1>
        <div className="bg-white border border-line rounded-[4px] overflow-hidden shadow-sm">
          {/* Messages */}
          <div className="p-6 flex flex-col gap-4 min-h-[340px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-4 py-3 rounded-[12px] text-[15px] leading-relaxed
                  ${msg.from === "client"
                    ? "bg-sage-mid text-cream rounded-br-[4px]"
                    : "bg-cream-2 text-ink rounded-bl-[4px]"}`}>
                  {msg.text}
                  <div className={`text-[11px] mt-1 ${msg.from === "client" ? "text-[rgba(255,255,255,0.6)]" : "text-ink-soft"}`}>{msg.time}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="border-t border-line p-4 flex gap-3">
            <input value={draft} onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(); }}
              placeholder="Écrivez votre message…"
              className="flex-1 font-sans text-[15px] font-light px-4 py-3 border border-line rounded-[3px] bg-cream text-ink focus:outline-none focus:border-sage transition-all" />
            <button onClick={send}
              className="inline-flex items-center gap-2 font-sans font-medium text-[12.5px] tracking-[0.2em] uppercase px-6 py-3 border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors cursor-pointer">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
