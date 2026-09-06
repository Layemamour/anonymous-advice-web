import Reveal from "./Reveal";
import type { Icon } from "@phosphor-icons/react";

type Feature = {
  icon: Icon;
  title: string;
  description: string;
};

export default function FeatureRow({
  eyebrow,
  title,
  description,
  features,
  visual,
  reverse = false,
  tint = "",
  glow = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  features: Feature[];
  visual: React.ReactNode;
  reverse?: boolean;
  tint?: string;
  glow?: string;
}) {
  return (
    <section
      className={`py-16 sm:py-20 md:py-28 border-t border-ink/5 relative overflow-hidden ${tint}`}
    >
      {glow && <div className={`absolute pointer-events-none ${glow}`} />}

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal className={reverse ? "md:order-2" : ""}>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-ink/60 leading-relaxed mb-9 max-w-md">
              {description}
            </p>
            <ul className="space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <f.icon size={22} weight="duotone" className="shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">{f.title}</p>
                    <p className="text-xs text-ink/55 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={150}
            className={`flex justify-center ${reverse ? "md:order-1" : ""}`}
          >
            {visual}
          </Reveal>
        </div>
      </div>
    </section>
  );
}