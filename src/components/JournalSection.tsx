import FeatureRow from "./FeatureRow";
import PhoneMockup from "./PhoneMockup";
import { Check, Envelope, Notebook } from "@phosphor-icons/react/ssr";

export default function JournalSection() {
  return (
    <FeatureRow
      tint="bg-gradient-to-br from-sage/5 via-surface to-surface"
      glow="glow-sage top-0 right-10 w-[400px] h-[400px]"
      eyebrow="Après la confession"
      title={
        <>
          Ta situation évolue,{" "}
          <span className="font-serif text-accent">
            ton suivi aussi.
          </span>
        </>
      }
      description="Une confession n'est qu'un début. Note tes options, suis tes progrès, et garde une trace de ton chemin — un espace que toi seul peux voir."
      features={[
        {
          icon: Check,
          title: "Suivi de résolution",
          description:
            "Une checklist personnelle des options que tu envisages.",
        },
        {
          icon: Notebook,
          title: "Journal chronologique",
          description:
            "Ajoute des mises à jour courtes sur l'évolution de ta situation.",
        },
        {
          icon: Envelope,
          title: "Digest personnalisé",
          description:
            "Un résumé hebdomadaire des tendances dans tes catégories suivies.",
        },
      ]}
      visual={
        <PhoneMockup>
          <div className="h-full w-full bg-surface flex flex-col">
            <div className="px-4 py-3 border-b border-ink/5 bg-white">
              <span className="text-[11px] font-medium">Mon carnet privé</span>
              <span className="ml-2 text-[8px] bg-premium/15 text-premium px-1.5 py-0.5 rounded-full">
                KayConfesser+
              </span>
            </div>
            <div className="p-3 space-y-3">
              <div>
                <p className="text-[9px] font-medium text-ink/50 mb-1.5">
                  Options envisagées
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[9px]">
                    <div className="w-3.5 h-3.5 rounded bg-premium flex items-center justify-center text-white text-[7px]">
                      <Check size={9} weight="bold" />
                    </div>
                    <span className="text-ink/70 line-through decoration-ink/30">
                      Épargner 3 mois de salaire
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <div className="w-3.5 h-3.5 rounded border border-ink/20" />
                    <span className="text-ink/70">Parler à mon manager</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-medium text-ink/50 mb-1.5">Journal</p>
                <div className="rounded-lg bg-white p-2.5">
                  <p className="text-[8px] text-ink/40 mb-1">Il y a 3 jours</p>
                  <p className="text-[9px] text-ink/70 leading-relaxed">
                    J&apos;ai commencé à mettre de l&apos;argent de côté.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PhoneMockup>
      }
    />
  );
}