import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — KayConfesser",
  description:
    "Politique de confidentialité de KayConfesser. Découvrez comment vos données sont collectées, utilisées, protégées et supprimées.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-10 text-[#1F1F2E] sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <header className="mb-10">
          <a
          href="/"
          className="text-sm text-ink/60 hover:text-ink transition-colors"
        >
          ← Retour à KayConfesser
        </a>
          <p className="mb-2 text-sm font-medium text-[#6C63FF]">
            KayConfesser
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Politique de confidentialité
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Dernière mise à jour : 27 septembre 2026
          </p>
        </header>

        <div className="space-y-8 leading-7 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              1. Introduction
            </h2>

            <p>
              KayConfesser est une plateforme permettant aux utilisateurs de
              partager des histoires, questions et préoccupations de manière
              anonyme et de recevoir les conseils, réactions et expériences de
              la communauté.
            </p>

            <p className="mt-3">
              Cette politique explique quelles données peuvent être collectées,
              pourquoi elles sont utilisées, comment elles sont protégées et
              quels sont vos droits.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              2. Données que nous collectons
            </h2>

            <p>
              Selon votre utilisation de KayConfesser, nous pouvons traiter les
              catégories de données suivantes :
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                les informations nécessaires à la création et à la gestion de
                votre compte ;
              </li>
              <li>
                les informations d'authentification et de session nécessaires
                pour sécuriser votre accès ;
              </li>
              <li>
                les contenus que vous publiez, notamment vos confessions,
                questions, commentaires et autres contributions ;
              </li>
              <li>
                vos interactions avec les contenus, notamment les réactions,
                soutiens et publications enregistrées ;
              </li>
              <li>
                les informations techniques nécessaires au fonctionnement,
                à la sécurité et à l'amélioration du service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. Anonymat sur KayConfesser
            </h2>

            <p>
              KayConfesser est conçu pour permettre la publication anonyme.
              Votre identité n'est pas affichée publiquement avec vos
              publications anonymes.
            </p>

            <p className="mt-3">
              L'anonymat affiché aux autres utilisateurs ne signifie pas que
              toutes les données techniques nécessaires au fonctionnement et à
              la sécurité du service sont inexistantes. Certaines informations
              peuvent être conservées afin de gérer les comptes, les sessions,
              prévenir les abus et assurer la sécurité de la plateforme.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              4. Utilisation des données
            </h2>

            <p>Les données peuvent être utilisées pour :</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>fournir et maintenir les fonctionnalités de KayConfesser ;</li>
              <li>gérer les comptes et les sessions utilisateur ;</li>
              <li>afficher et organiser les contenus de la communauté ;</li>
              <li>permettre les réactions, commentaires et enregistrements ;</li>
              <li>protéger la plateforme contre les abus et les utilisations malveillantes ;</li>
              <li>détecter et résoudre les problèmes techniques ;</li>
              <li>améliorer la sécurité, la fiabilité et les fonctionnalités du service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              5. Partage des données
            </h2>

            <p>
              KayConfesser ne vend pas vos données personnelles à des tiers.
            </p>

            <p className="mt-3">
              Certaines données peuvent toutefois être traitées par des
              prestataires techniques nécessaires au fonctionnement du service,
              par exemple pour l'hébergement, la base de données,
              l'authentification, la sécurité ou l'envoi de communications
              techniques.
            </p>

            <p className="mt-3">
              Ces prestataires n'ont accès qu'aux informations nécessaires à
              l'exécution de leurs services, dans le cadre de leurs propres
              obligations de sécurité et de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              6. Conservation des données
            </h2>

            <p>
              Nous conservons les données pendant la durée nécessaire au
              fonctionnement du service, à la sécurité de la plateforme et au
              respect de nos obligations légales.
            </p>

            <p className="mt-3">
              Les durées de conservation peuvent varier selon la nature des
              données concernées.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              7. Suppression du compte
            </h2>

            <p>
              Vous pouvez demander la suppression de votre compte et des
              données associées depuis le processus de suppression de compte
              prévu par KayConfesser.
            </p>

            <p className="mt-3">
              Pour plus d'informations sur la procédure et les conséquences de
              la suppression, consultez notre page dédiée :
            </p>

            <p className="mt-3">
              <a
                href="/suppression-compte"
                className="font-medium text-[#6C63FF] underline underline-offset-4"
              >
                Supprimer mon compte KayConfesser
              </a>
            </p>

            <p className="mt-3">
              Certaines publications anonymes peuvent rester visibles après la
              suppression d'un compte lorsqu'elles ont été dissociées des
              informations permettant d'identifier directement leur auteur.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              8. Sécurité
            </h2>

            <p>
              Nous mettons en œuvre des mesures techniques et
              organisationnelles destinées à protéger les données contre
              l'accès non autorisé, la perte, la modification ou la
              divulgation non autorisée.
            </p>

            <p className="mt-3">
              Toutefois, aucun service accessible sur Internet ne peut garantir
              une sécurité absolue.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              9. Données des mineurs
            </h2>

            <p>
              KayConfesser n'est pas destiné à collecter volontairement des
              données personnelles auprès d'enfants en violation des lois
              applicables. Si vous pensez qu'un enfant nous a fourni des
              données personnelles de manière inappropriée, contactez-nous afin
              que nous puissions examiner la situation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              10. Vos droits
            </h2>

            <p>
              Selon les lois applicables, vous pouvez notamment disposer de
              droits concernant l'accès, la rectification, la suppression ou
              la limitation du traitement de certaines de vos données.
            </p>

            <p className="mt-3">
              Pour exercer vos droits ou poser une question concernant vos
              données, contactez-nous à l'adresse indiquée ci-dessous.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              11. Modifications de cette politique
            </h2>

            <p>
              Cette politique peut être mise à jour afin de refléter
              l'évolution de KayConfesser, de ses fonctionnalités ou des
              exigences légales applicables.
            </p>

            <p className="mt-3">
              La date de dernière mise à jour affichée en haut de cette page
              indique la version actuellement applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              12. Contact
            </h2>

            <p>
              Pour toute question concernant cette politique ou le traitement
              de vos données personnelles, vous pouvez nous contacter :
            </p>

            <p className="mt-3">
              <a
                href="layemamour123@gmail.com"
                className="font-medium text-[#6C63FF] underline underline-offset-4"
              >
                layemamour123@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
