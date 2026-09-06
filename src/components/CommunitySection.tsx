import FeatureRow from "./FeatureRow";
import PhoneMockup from "./PhoneMockup";
import {
  ChatCircle,
  Bird,
  Eye,
  Heart,
  Medal,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react/ssr";

export default function CommunitySection() {
  return (
    <FeatureRow
      reverse
      tint="bg-gradient-to-bl from-rose/5 via-surface to-surface"
      glow="glow-rose top-10 left-0 w-[400px] h-[400px]"
      eyebrow="Chaque jour"
      title={
        <>
          Une confession mise en lumière,{" "}
          <span className="font-serif text-accent">
            chaque jour.
          </span>
        </>
      }
      description="Une histoire marquante, sélectionnée par la communauté et l'équipe de modération, pour rappeler que tu n'es jamais seul dans ce que tu traverses."
      features={[
        {
          icon: Sparkle,
          title: "Confession du jour",
          description:
            "Une sélection quotidienne mise en avant sur le fil principal.",
        },
        {
          icon: ShieldCheck,
          title: "Modération active",
          description:
            "Chaque signalement est traité par une équipe humaine, rapidement.",
        },
        {
          icon: Medal,
          title: "Contributeurs de confiance",
          description:
            "Un badge discret pour ceux dont les conseils aident vraiment.",
        },
      ]}
      visual={
        <PhoneMockup>
          <div className="h-full w-full bg-surface flex flex-col">
            <div className="px-4 py-3 border-b border-ink/5 bg-white">
              <span className="text-sm font-semibold">
                Kay<span className="text-premium">Confesser</span>
              </span>
            </div>
            <div className="p-3">
              <div className="rounded-2xl bg-gradient-to-br from-premium/15 to-accent/10 p-4 border border-premium/20">
                <span className="inline-block text-[9px] font-semibold text-premium bg-premium/15 rounded-full px-2 py-0.5 mb-2">
                  <Sparkle size={12} weight="fill" /> Confession du jour
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-accent/25 flex items-center justify-center text-[10px]">
                    <Bird size={16} weight="duotone" />
                  </div>
                  <p className="text-[11px] font-medium">Antilope #7734</p>
                </div>
                <p className="text-[11px] leading-relaxed text-ink/80">
                  J&apos;ai caché à ma famille que j&apos;ai arrêté mes
                  études il y a 6 mois.
                </p>
                <div className="flex items-center gap-3 mt-3 text-[9px] text-ink/50">
                  <span className="inline-flex items-center gap-1"><Heart size={11} weight="fill" /> 512</span>
                  <span className="inline-flex items-center gap-1"><ChatCircle size={11} weight="fill" /> 89</span>
                  <span className="inline-flex items-center gap-1"><Eye size={11} weight="fill" /> 3,2k</span>
                </div>
              </div>
            </div>
          </div>
        </PhoneMockup>
      }
    />
  );
}