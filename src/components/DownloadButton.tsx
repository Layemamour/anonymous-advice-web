"use client";

import { useSyncExternalStore } from "react";
import { DownloadSimple } from "@phosphor-icons/react/ssr";

const APP_URL = "https://app.kayconfesser.com";

// L'installation "en un clic" (beforeinstallprompt) ne peut techniquement se produire que sur
// l'origine qui possède le manifest PWA (app.kayconfesser.com) — jamais depuis ce site vitrine,
// qui n'est pas et ne sera pas une PWA. Pas de capture beforeinstallprompt ici : ce serait du
// code mort qui ne se déclenche jamais sur cette origine, et prétendre le contraire tromperait
// l'utilisateur. Ce composant adapte uniquement le texte d'instruction à l'appareil détecté ; le
// bouton reste toujours un simple lien vers l'app (comportement de secours fiable, dans tous les
// cas, sur tous les navigateurs).
//
// `useSyncExternalStore` plutôt qu'un `useState`+`useEffect` classique : lecture sûre d'API
// navigateur absentes côté serveur (repli explicite via *ServerSnapshot), sans jamais appeler
// setState depuis le corps d'un effet.

function detectIOS(): boolean {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  // iPadOS 13+ en mode "site desktop" se déclare comme Mac — seul un vrai Mac n'a jamais de
  // points de contact tactile.
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

function detectSafari(): boolean {
  const ua = navigator.userAgent;
  return /safari/i.test(ua) && !/crios|fxios|edgios|chrome|android/i.test(ua);
}

function detectStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // API historique Safari iOS, sans type officiel dans lib.dom.d.ts.
    (navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

// isIOS/isSafari : figés pour la session (UA immuable) — aucun abonnement réel nécessaire.
function subscribeNever() {
  return () => {};
}
function getBooleanServerSnapshot() {
  return false;
}

// isStandalone : peut en théorie changer en cours de session (bascule display-mode) — vrai
// abonnement à l'évènement matchMedia correspondant.
function subscribeStandalone(callback: () => void) {
  const mql = window.matchMedia("(display-mode: standalone)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export default function DownloadButton() {
  const isIOS = useSyncExternalStore(subscribeNever, detectIOS, getBooleanServerSnapshot);
  const isSafari = useSyncExternalStore(subscribeNever, detectSafari, getBooleanServerSnapshot);
  const isStandalone = useSyncExternalStore(subscribeStandalone, detectStandalone, getBooleanServerSnapshot);

  const instruction = isStandalone
    ? null
    : isIOS
      ? isSafari
        ? "Ouvre le lien dans Safari, puis touche Partager → Ajouter à l'écran d'accueil."
        : "Ouvre ce lien dans Safari (pas dans cette appli), puis touche Partager → Ajouter à l'écran d'accueil."
      : "Ouvre le lien, puis choisis « Ajouter à l'écran d'accueil » (iPhone) ou « Installer l'application » (Android) depuis ton navigateur.";

  return (
    <>
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

      {instruction && <p className="text-xs text-ink/40 mt-6 max-w-sm mx-auto">{instruction}</p>}
    </>
  );
}
