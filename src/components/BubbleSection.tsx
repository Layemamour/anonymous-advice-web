import FeatureRow from "./FeatureRow";
import PhoneMockup from "./PhoneMockup";
import { ChartScatter, Heart, PencilSimple } from "@phosphor-icons/react/ssr";

export default function BubbleSection() {
  return (
    <FeatureRow
      tint="bg-gradient-to-br from-lavender/5 via-surface to-surface"
      glow="glow-lavender top-0 right-0 w-[400px] h-[400px]"
      eyebrow="Ton espace, réuni"
      title={
        <>
          Tout ce que tu vis en silence,{" "}
          <span className="font-serif text-accent">
            enfin dit.
          </span>
        </>
      }
      description="Une confession, un sondage, un conseil — tout se retrouve au même endroit, sous un pseudo qui ne révèle jamais qui tu es."
      features={[
        {
          icon: PencilSimple,
          title: "Confessions libres",
          description:
            "Écris ce qui te pèse, choisis une catégorie, publie en quelques secondes.",
        },
        {
          icon: ChartScatter,
          title: "Sondages intégrés",
          description:
            "Hésite entre plusieurs options ? Laisse la communauté t'aider à trancher.",
        },
        {
          icon: Heart,
          title: "Réactions simples",
          description:
            "Soutien ou « moi aussi » — sans likes ni pression de popularité.",
        },
      ]}
      visual={
        <PhoneMockup>
          <div className="h-full w-full bg-surface flex flex-col">
            <div className="px-4 py-3 border-b border-ink/5 bg-white">
              <span className="text-[11px] font-medium">Nouvelle confession</span>
            </div>
            <div className="p-3 space-y-3">
              <div className="rounded-xl bg-white shadow-sm p-3">
                <p className="text-[9px] text-ink/40 mb-1">Catégorie</p>
                <div className="flex gap-1.5 flex-wrap">
                  {["Travail", "Famille", "Relations"].map((c, i) => (
                    <span
                      key={c}
                      className={`text-[8px] px-2 py-1 rounded-full ${
                        i === 0
                          ? "bg-premium/20 text-premium font-medium"
                          : "bg-ink/5 text-ink/50"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-3">
                <p className="text-[10px] text-ink/70 leading-relaxed">
                  Je pense démissionner mais j&apos;ai peur de...
                </p>
                <div className="h-px bg-ink/5 my-2" />
                <p className="text-[8px] text-ink/30">Ajouter un sondage (optionnel)</p>
              </div>
              <div className="rounded-full bg-ink text-surface text-[9px] font-medium text-center py-2.5">
                Publier anonymement
              </div>
            </div>
          </div>
        </PhoneMockup>
      }
    />
  );
}