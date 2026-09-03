const features = [
  {
    title: "Anonymat garanti",
    description:
      "Aucune donnée identifiante n'est jamais liée à tes confessions. Ton pseudo change, ton identité réelle reste protégée.",
  },
  {
    title: "Sondages intégrés",
    description:
      "Hésite entre plusieurs options ? Crée un sondage et laisse la communauté t'aider à trancher.",
  },
  {
    title: "Conseils marqués utiles",
    description:
      "Toi seul décides quel conseil t'a vraiment aidé — un système simple, sans likes ni pression sociale.",
  },
  {
    title: "Modération active",
    description:
      "Une équipe de modérateurs veille sur chaque signalement pour garder un espace sain et respectueux.",
  },
  {
    title: "Suivi personnel",
    description:
      "Un carnet privé pour noter l'évolution de ta situation, visible uniquement par toi.",
  },
  {
    title: "Catégories variées",
    description:
      "Relations, travail, famille, santé — trouve une communauté qui comprend vraiment ton sujet.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white border-t border-ink/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Pensé pour la confiance, pas pour l&apos;audience.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="w-10 h-10 rounded-xl bg-premium/10 mb-4 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-premium" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}