import Reveal from "./Reveal";

export default function Download() {
  return (
    <section id="download" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-rose/10 via-white to-premium/10 border-t border-ink/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[320px] glow-rose pointer-events-none opacity-50" />
      <div className="mx-auto max-w-2xl px-6 text-center relative">
        <Reveal>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
          Ton histoire commence ici
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
          Dis-le une fois,{" "}
            <span className="font-serif text-accent">
              et avance.
            </span>
          </h2>
          <p className="text-ink/60 mb-10 max-w-md mx-auto">
          Télécharge KayConfesser et rejoins une communauté qui écoute
          sans juger — sous une identité qui reste toujours la tienne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            disabled
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink/40 cursor-not-allowed"
          >
            <AppleIcon />
            <span>
              Bientôt sur l&apos;<span className="font-semibold">App Store</span>
            </span>
          </button>

          <button
            disabled
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink/40 cursor-not-allowed"
          >
            <PlayIcon />
            <span>
              Bientôt sur <span className="font-semibold">Google Play</span>
            </span>
          </button>
          </div>

          <p className="text-xs text-ink/40 mt-6">
          En cours de soumission — disponible très prochainement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.6 2.4c-.35.35-.6.9-.6 1.6v16c0 .7.25 1.25.6 1.6l.1.08L13 12.4v-.8L3.7 2.32l-.1.08z" />
      <path d="M16.5 15.9l-3-3v-.8l3-3 3.9 2.2c.8.5.8 1.4 0 1.9l-3.9 2.7z" opacity=".7" />
      <path d="M13.5 12.5l-9.8 9.9c.35.35.9.4 1.5.05l11.3-6.4-3-3.55z" opacity=".85" />
      <path d="M13.5 11.5l3-3.55-11.3-6.4c-.6-.35-1.15-.3-1.5.05l9.8 9.9z" />
    </svg>
  );
}