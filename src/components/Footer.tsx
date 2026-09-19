import { Heart } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 py-16 bg-ink text-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <a href="#" className="text-base font-semibold tracking-tight">
              Kay<span className="text-premium">Confesser</span>
            </a>
            <p className="text-sm text-surface/60 mt-3 leading-relaxed">
              L&apos;app qui te permet de dire ce que tu portes, sans jamais
              te montrer.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium text-surface/45 uppercase tracking-wider mb-3">
                L&apos;app
              </p>
              <ul className="space-y-2 text-sm text-surface/65">
                <li><a href="#how-it-works" className="hover:text-surface transition-colors">Comment ça marche</a></li>
                <li><a href="#features" className="hover:text-surface transition-colors">Fonctionnalités</a></li>
                <li><a href="#premium" className="hover:text-surface transition-colors">Premium</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-surface/45 uppercase tracking-wider mb-3">
                Légal
              </p>
              <ul className="space-y-2 text-sm text-surface/65">
                <li><a href="#" className="hover:text-surface transition-colors">Confidentialité</a></li>
		<li>
  <a
    href="/suppression-compte"
    className="hover:text-surface transition-colors"
  >
    Suppression du compte
  </a>
</li>
                <li><a href="#" className="hover:text-surface transition-colors">Conditions</a></li>
                <li><a href="mailto:contact@kayconfesser.app" className="hover:text-surface transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-surface/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-surface/45">
            © {new Date().getFullYear()} KayConfesser. Fait avec <Heart size={12} weight="fill" className="inline" /> pour ceux qui portent un poids en silence.
          </p>
        </div>
      </div>
    </footer>
  );
}