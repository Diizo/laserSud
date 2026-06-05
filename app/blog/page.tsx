import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Conseils & Blog" };

export default function BlogPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="py-[76px] pb-16 text-center bg-cream-2">
        <div className="max-w-[880px] mx-auto px-8">
          <div className="text-[12px] tracking-[0.16em] uppercase text-sage-mid mb-4">Accueil · Conseils</div>
          <span className="eyebrow">Le journal</span>
          <h1 className="display h-lg">Conseils & beauté de la peau</h1>
          <p className="text-[1.12rem] font-light text-ink-soft max-w-[56ch] mx-auto mt-[18px]">
            Tout ce qu&apos;il faut savoir sur l&apos;épilation laser, le soin de la peau et nos petits secrets pour de beaux résultats.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-8">
          {/* FEATURED */}
          <article className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] bg-white border border-line rounded-[4px] overflow-hidden mb-11">
            <div className="min-h-[340px]"><ImagePlaceholder label="Photo article à la une" /></div>
            <div className="p-[46px_44px] flex flex-col justify-center">
              <span className="text-[11px] tracking-[0.16em] uppercase text-sage-mid font-medium">À la une · Les bases</span>
              <h2 className="display text-[2.2rem] mt-3 mb-3.5">
                Épilation laser : tout comprendre avant de se lancer
              </h2>
              <p className="text-ink-soft">
                Comment ça marche, combien de séances prévoir, à quoi s&apos;attendre… Le guide complet pour démarrer sereinement votre parcours.
              </p>
              <Link href="#"
                className="inline-flex items-center gap-2.5 font-sans font-medium text-[11px] tracking-[0.2em] uppercase px-[22px] py-[11px] border border-transparent rounded-[2px] bg-sage-mid text-cream hover:bg-sage-deep transition-colors mt-[22px] self-start">
                Lire l&apos;article
              </Link>
            </div>
          </article>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post) => (
              <article key={post.id}
                className="flex flex-col bg-white border border-line rounded-[4px] overflow-hidden transition-all duration-400 hover:-translate-y-[5px] hover:shadow">
                <div className="aspect-[3/2]"><ImagePlaceholder label={post.title} /></div>
                <div className="p-[24px_24px_28px] flex flex-col flex-1">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-sage-mid font-medium">{post.category}</span>
                  <h3 className="font-serif text-[1.5rem] mt-2.5 mb-2 leading-[1.15]">{post.title}</h3>
                  <p className="text-ink-soft text-[14px] flex-1">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}
                    className="text-sage-mid text-[13px] tracking-[0.1em] uppercase mt-3.5 inline-block hover:text-sage-deep transition-colors">
                    Lire →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
