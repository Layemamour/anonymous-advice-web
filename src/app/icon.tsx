import { ImageResponse } from 'next/og';
import { SereneFaceIcon } from '@/lib/pwa/serene-face-icon';

// Remplace le favicon par défaut de Next.js par l'icône officielle KayConfesser (même composant
// que celui utilisé par l'app, voir src/lib/pwa/serene-face-icon.tsx).
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<SereneFaceIcon size={32} />, size);
}
