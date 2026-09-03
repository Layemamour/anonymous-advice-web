import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] glow-gold pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20 pb-24 sm:pb-32 md:pt-24 relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-premium/10 px-4 py-1.5 text-xs font-medium text-premium mb-6">
            Pour ceux qui portent un poids en silence
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] mb-6">
            Dis ce que tu portes,{" "}
            <span className="font-serif text-accent">
              sans jamais te montrer.
            </span>
          </h1>

          <p className="text-lg text-ink/60 mb-10 max-w-lg mx-auto">
            Confie tes doutes à une communauté bienveillante, reçois de
            vrais conseils, et avance à ton rythme — ton identité ne
            quitte jamais ton téléphone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            
            <a  href="#download"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-surface hover:bg-ink/90 transition-colors"
            >
              Télécharger l&apos;app
            </a>
            
           <a   href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium hover:bg-ink/5 transition-colors"
            >
              Comment ça marche
            </a>
          </div>

          <p className="text-xs text-ink/40">
            ★★★★★ Pensé pour rester anonyme — dès la première confession.
          </p>
        </Reveal>

        <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
          <PhoneMockup className="absolute -rotate-6 -translate-x-[85%] opacity-90 scale-90 hidden sm:block">
            <MiniDigestScreen />
          </PhoneMockup>

          <PhoneMockup className="relative z-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
            <MiniFeedScreen />
          </PhoneMockup>

          <PhoneMockup className="absolute rotate-6 translate-x-[85%] opacity-90 scale-90 hidden sm:block">
            <MiniJournalScreen />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

function MiniFeedScreen() {
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-4 py-3 border-b border-ink/5 bg-white">
        <span className="text-sm font-semibold">
          Kay<span className="text-premium">Confesser</span>
        </span>
      </div>
      <div className="p-3 space-y-2.5">
        <div className="rounded-2xl bg-white shadow-sm p-3.5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-[10px]">
              🦊
            </div>
            <p className="text-[11px] font-medium">Renard #4821</p>
          </div>
          <p className="text-[11px] leading-relaxed text-ink/80">
            Je pense démissionner mais j&apos;ai peur de regretter.
          </p>
          <div className="flex items-center gap-3 mt-2.5 text-[9px] text-ink/40">
            <span>💛 34</span>
            <span>💬 12 conseils</span>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-sm p-3.5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-premium/25 flex items-center justify-center text-[10px]">
              🦉
            </div>
            <p className="text-[11px] font-medium">Hibou #1092</p>
          </div>
          <p className="text-[11px] leading-relaxed text-ink/80">
            Comment annoncer une nouvelle difficile à mes parents ?
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniDigestScreen() {
  return (
    <div className="h-full w-full bg-surface p-3">
      <p className="text-[10px] font-medium mb-2">Ton résumé de la semaine</p>
      <div className="rounded-xl bg-gradient-to-br from-premium/10 to-transparent p-3 border border-premium/15">
        <p className="text-[8px] text-ink/60 leading-relaxed">
          +34% de confessions sur la reconversion cette semaine.
        </p>
      </div>
    </div>
  );
}

function MiniJournalScreen() {
  return (
    <div className="h-full w-full bg-surface p-3">
      <p className="text-[10px] font-medium mb-2">Mon carnet privé</p>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[9px]">
          <div className="w-3.5 h-3.5 rounded bg-premium text-white flex items-center justify-center text-[7px]">
            ✓
          </div>
          <span className="text-ink/60 line-through">Épargner 3 mois</span>
        </div>
        <div className="flex items-center gap-2 text-[9px]">
          <div className="w-3.5 h-3.5 rounded border border-ink/20" />
          <span className="text-ink/60">Parler à mon manager</span>
        </div>
      </div>
    </div>
  );
}