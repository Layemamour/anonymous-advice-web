const steps = [
  {
    number: "01",
    title: "Crée ton identité anonyme",
    description:
      "Un pseudo généré automatiquement (animal + couleur), aucune donnée personnelle visible. Personne ne sait qui tu es.",
  },
  {
    number: "02",
    title: "Partage ta confession",
    description:
      "Écris ce qui te pèse, choisis une catégorie, et publie — seul ou sous forme de sondage pour avoir plusieurs avis.",
  },
  {
    number: "03",
    title: "Reçois de vrais conseils",
    description:
      "La communauté répond avec bienveillance. Marque les conseils utiles, suis l'évolution de ta situation dans ton carnet privé.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 md:py-32 border-t border-ink/5 bg-gradient-to-br from-lavender/10 via-surface to-surface relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[420px] h-[420px] glow-lavender pointer-events-none opacity-60" />
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="max-w-xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Trois étapes, zéro exposition.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-5 border-l-2 border-lavender/30">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-lavender/15 text-sm font-mono text-lavender">
                {step.number}
              </span>
              <h3 className="text-xl font-medium mt-4 mb-2">{step.title}</h3>
              <p className="text-ink/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}