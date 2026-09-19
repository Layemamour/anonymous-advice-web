export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <a
          href="/"
          className="text-sm text-ink/60 hover:text-ink transition-colors"
        >
          ← Retour à KayConfesser
        </a>

        <div className="mt-12">
          <p className="text-xs font-medium text-premium uppercase tracking-wider">
            Gestion du compte
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">
            Suppression de compte
          </h1>

          <p className="text-base text-ink/60 leading-relaxed mt-6">
            Tu peux demander la suppression de ton compte KayConfesser à tout
            moment.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-lg font-medium">Comment demander la suppression ?</h2>
              <p className="text-sm text-ink/60 leading-relaxed mt-3">
                Envoie-nous une demande à{" "}
                <a
                  href="mailto:contact@kayconfesser.app?subject=Demande%20de%20suppression%20de%20compte"
                  className="text-premium underline underline-offset-4"
                >
                  contact@kayconfesser.app
                </a>{" "}
                depuis l&apos;adresse e-mail associée à ton compte, en
                indiquant que tu souhaites supprimer ton compte KayConfesser.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium">Depuis l&apos;application</h2>
              <p className="text-sm text-ink/60 leading-relaxed mt-3">
                Si tu peux encore accéder à ton compte, tu peux également
                utiliser l&apos;option{" "}
                <strong className="text-ink">« Supprimer mon compte »</strong>{" "}
                dans les paramètres de KayConfesser.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium">Que se passe-t-il ensuite ?</h2>
              <p className="text-sm text-ink/60 leading-relaxed mt-3">
                L&apos;accès au compte est désactivé et les sessions associées
                sont révoquées. Les confessions déjà publiées peuvent rester
                visibles sous leur forme anonyme, sans être rattachées à ton
                identité.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium">Besoin d&apos;aide ?</h2>
              <p className="text-sm text-ink/60 leading-relaxed mt-3">
                Pour toute question concernant la suppression de ton compte ou
                de tes données, contacte-nous à{" "}
                <a
                  href="mailto:contact@kayconfesser.app"
                  className="text-premium underline underline-offset-4"
                >
                  contact@kayconfesser.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
