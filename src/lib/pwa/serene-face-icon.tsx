// Icône officielle KayConfesser ("Visage serein"), réutilisée telle quelle depuis
// anonymous-advice-nextjs/src/lib/pwa/serene-face-icon.tsx (l'app n'expose pas de fichier PNG
// statique — l'icône est générée par code via Satori/ImageResponse, voir src/app/icon.tsx). Copie
// volontairement identique : ne pas modifier le tracé/les couleurs sans les répercuter côté app.
export const SERENE_FACE_BACKGROUND = '#6C5CE7';

export function SereneFaceIcon({ size, rounded = true, facePadding = 0 }: { size: number; rounded?: boolean; facePadding?: number }) {
  const faceSize = size - facePadding * 2;
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: SERENE_FACE_BACKGROUND,
        borderRadius: rounded ? size * 0.22 : 0,
      }}
    >
      <svg width={faceSize * 0.62} height={faceSize * 0.62} viewBox="0 0 100 100" fill="none">
        <path d="M28 44 Q36 53 44 44" stroke="white" strokeWidth={9} strokeLinecap="round" />
        <path d="M56 44 Q64 53 72 44" stroke="white" strokeWidth={9} strokeLinecap="round" />
        <path d="M35 63 Q50 74 65 63" stroke="white" strokeWidth={9} strokeLinecap="round" />
      </svg>
    </div>
  );
}
