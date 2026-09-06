import Reveal from "./Reveal";
import { IdentificationBadge, LockKey, Scales } from "@phosphor-icons/react/ssr";

export default function PrivacySection() {
  const points = [
    {
      icon: IdentificationBadge,
      title: "Identité anonyme générée",
      description:
        "Un pseudo animal + une couleur, jamais lié à ton nom ou ton compte réel.",
    },
    {
      icon: LockKey,
      title: "Confidentialité par conception",
      description:
        "Ton carnet privé et ton journal ne sont visibles que par toi, jamais par la communauté.",
    },
    {
      icon: Scales,
      title: "Premium n'achète jamais la priorité",
      description:
        "Un utilisateur gratuit reçoit de l'aide aussi vite qu'un membre Premium — toujours.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-ink/5 bg-ink text-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] glow-lavender pointer-events-none opacity-40" />
      <div className="mx-auto max-w-4xl px-6 text-center relative">
        <Reveal>
          <span className="text-xs font-medium text-premium uppercase tracking-wider">
            Ce qui reste rien qu&apos;à toi
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-16">
            Ton anonymat n&apos;est pas une option,{" "}
            <span className="font-serif italic text-premium">c&apos;est la base.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <p.icon size={28} weight="duotone" />
              <h3 className="text-base font-medium mt-4 mb-2">{p.title}</h3>
              <p className="text-sm text-surface/60 leading-relaxed">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}