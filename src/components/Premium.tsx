import Reveal from "./Reveal";

const perks = [
  "Suivi de résolution & journal illimités",
  "Digest hebdomadaire personnalisé",
  "Confessions boostées",
  "Badge de contributeur de confiance",
  "L'aide de base reste identique, gratuite, pour tous",
  "Résiliable à tout moment",
];

export default function Premium() {
  return (
    <section id="premium" className="py-16 sm:py-24 md:py-32 border-t border-ink/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] glow-gold pointer-events-none" />
      <div className="mx-auto max-w-2xl px-6 text-center relative">
        <Reveal>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Un seul abonnement
          </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
          Plus de confort,{" "}
          <span className="font-serif text-accent">
            jamais plus de priorité.
          </span>
        </h2>
        <p className="text-ink/60 mb-12 max-w-md mx-auto">
          L&apos;aide reste la même pour tout le monde, toujours aussi
          rapide. Anonyme+ ajoute simplement des outils pour mieux
          t&apos;accompagner.
        </p>

          <div className="rounded-3xl bg-ink text-surface p-10 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-premium/10 rounded-full blur-3xl -mr-24 -mt-24" />

          <div className="relative">
            <span className="inline-flex items-center rounded-full bg-premium/15 px-4 py-1.5 text-xs font-medium text-premium mb-6">
              💛 Anonyme+
            </span>

            <p className="text-sm text-surface/50 mb-1">Essai gratuit 7 jours</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-semibold tracking-tight">3 900 FCFA</span>
              <span className="text-surface/50 text-sm">/ mois</span>
            </div>
            <p className="text-xs text-surface/40 mb-8">
              ou 39 000 FCFA / an —{" "}
              <span className="text-premium font-medium">-17%</span>
            </p>

            <ul className="space-y-3 mb-9">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-premium/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-premium" />
                  </div>
                  <span className="text-surface/80 text-sm">{perk}</span>
                </li>
              ))}
            </ul>

            
           <a   href="#download"
              className="inline-flex items-center justify-center w-full rounded-full bg-premium px-7 py-3.5 text-sm font-medium text-ink hover:bg-premium/90 transition-colors"
            >
              Commencer l&apos;essai gratuit
            </a>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}