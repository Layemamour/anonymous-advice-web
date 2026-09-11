import Reveal from "./Reveal";
import { DownloadSimple } from "@phosphor-icons/react/ssr";

// URL de l'app réelle (Next.js, PWA installable — manifest + service worker) : domaine Vercel
// actuel, en attendant une éventuelle sous-domaine dédiée (ex. app.kayconfesser.com) que la
// personne responsable du DNS configurerait de son côté — ce composant n'a pas besoin de changer
// pour ça, seule cette constante serait à mettre à jour.
const APP_URL = "https://kayconfesserapp.vercel.app";

export default function Download() {
  return (
    <section id="download" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-rose/10 via-white to-premium/10 border-t border-ink/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[320px] glow-rose pointer-events-none opacity-50" />
      <div className="mx-auto max-w-2xl px-6 text-center relative">
        <Reveal>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
          Ton histoire commence ici
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
          Dis-le une fois,{" "}
            <span className="font-serif text-accent">
              et avance.
            </span>
          </h2>
          <p className="text-ink/60 mb-10 max-w-md mx-auto">
          Télécharge KayConfesser et rejoins une communauté qui écoute
          sans juger — sous une identité qui reste toujours la tienne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-surface hover:bg-ink/90"
            >
              <DownloadSimple size={20} weight="bold" />
              <span>Télécharger l&apos;app</span>
            </a>
          </div>

          <p className="text-xs text-ink/40 mt-6 max-w-sm mx-auto">
          Pas d&apos;App Store, pas de Google Play : ouvre le lien, puis choisis
          « Ajouter à l&apos;écran d&apos;accueil » (iPhone) ou « Installer l&apos;application »
          (Android) depuis ton navigateur.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
