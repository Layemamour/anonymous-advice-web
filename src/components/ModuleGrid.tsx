import Reveal from "./Reveal";

const modules = [
  { icon: "✍️", title: "Confessions", description: "Partage ce qui te pèse, librement.", color: "bg-premium/15" },
  { icon: "🗳️", title: "Sondages", description: "Laisse la communauté t'aider à trancher.", color: "bg-accent/15" },
  { icon: "💬", title: "Fil de conseils", description: "Des réponses sincères, sous chaque confession.", color: "bg-rose/15" },
  { icon: "📓", title: "Carnet privé", description: "Suivi personnel, visible par toi seul.", color: "bg-sage/15" },
  { icon: "📬", title: "Digest hebdo", description: "Les tendances de tes catégories suivies.", color: "bg-lavender/15" },
  { icon: "🏅", title: "Badge de confiance", description: "Pour les conseils qui aident vraiment.", color: "bg-premium/15" },
  { icon: "🛡️", title: "Modération", description: "Une équipe veille sur chaque signalement.", color: "bg-accent/15" },
  { icon: "🚀", title: "Confession boostée", description: "Plus de visibilité, jamais plus de priorité.", color: "bg-rose/15" },
];

export default function ModuleGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-surface border-t border-ink/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[420px] h-[320px] glow-sage pointer-events-none opacity-50" />
      <div className="mx-auto max-w-6xl px-6 relative">
        <Reveal className="max-w-xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Une app, tous tes espaces
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Chaque module, pensé pour un moment précis.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) * 100}>
              <div className={`w-11 h-11 rounded-xl ${m.color} flex items-center justify-center text-xl mb-3.5 shadow-sm`}>
                {m.icon}
              </div>
              <h3 className="text-base font-medium mb-1.5">{m.title}</h3>
              <p className="text-xs text-ink/55 leading-relaxed">{m.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}