"use client";
import Link from "next/link";

const SUN = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[34px] h-[34px] block">
    <path d="M14 44a18 18 0 0 1 36 0" strokeWidth="2.4"/>
    <line x1="32" y1="6" x2="32" y2="15"/>
    <line x1="14.5" y1="13.5" x2="20" y2="20.5"/>
    <line x1="49.5" y1="13.5" x2="44" y2="20.5"/>
    <line x1="6" y1="30" x2="14.5" y2="31.5"/>
    <line x1="58" y1="30" x2="49.5" y2="31.5"/>
    <line x1="9.5" y1="21" x2="16.5" y2="25"/>
    <line x1="54.5" y1="21" x2="47.5" y2="25"/>
    <line x1="23" y1="9" x2="26" y2="16.5"/>
    <line x1="41" y1="9" x2="38" y2="16.5"/>
  </svg>
);

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  const textColor = light ? "text-cream" : "text-sage-mid";
  const sunColor  = light ? "text-gold"  : "text-gold-deep";

  return (
    <Link href="/" aria-label="Laser Sud accueil"
      className="inline-flex items-start gap-0.5 leading-none relative">
      <span className="flex flex-col">
        <span className={`logo-laser ${textColor}`}>LASER</span>
        <span className={`logo-sud ${textColor}`}>Sud</span>
      </span>
      <span className={`${sunColor} -mt-1`}>{SUN}</span>
    </Link>
  );
}
