import React from "react";
export const metadata = {
  title: "Politique de confidentialité",
};

export default function Confidential() {
  return (
    <div className="container w-full py-6 lg:py-10">
      <h1 className="text-3xl font-bold mb-3 px-4">
        Politique de Confidentialité
      </h1>
      <p className="px-4">
        Cette politique de confidentialité définit la manière dont les
        informations personnelles des utilisateurs sont collectées, utilisées,
        protégées et divulguées sur ce site.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Collecte d'informations personnelles
      </h2>
      <p className="px-4">
        Nous pouvons collecter des informations personnelles, telles que le nom,
        l'adresse e-mail et autres informations volontairement fournies par les
        utilisateurs via des formulaires de contact ou d'inscription à la
        newsletter. Ces informations sont collectées dans le respect de la
        réglementation en vigueur et sont utilisées dans le but spécifique pour
        lequel elles ont été fournies.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Utilisation des informations personnelles
      </h2>
      <p className="px-4">
        Les informations personnelles collectées peuvent être utilisées pour
        communiquer avec les utilisateurs, répondre à leurs demandes, envoyer
        des informations, des mises à jour ou des newsletters, et améliorer
        l'expérience des utilisateurs sur le site. Les informations personnelles
        ne seront pas vendues, échangées ou louées à des tiers sans consentement
        préalable, sauf si requis par la loi ou dans le cadre d'une obligation
        légale.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Protection des informations personnelles
      </h2>
      <p className="px-4">
        Nous mettons en place des mesures de sécurité appropriées pour protéger
        les informations personnelles contre tout accès non autorisé,
        divulgation, altération ou destruction. Cependant, veuillez noter
        qu'aucune méthode de transmission de données sur Internet n'est
        totalement sécurisée, et nous ne pouvons garantir la sécurité absolue
        des informations transmises via le site.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">Cookies</h2>
      <p className="px-4">
        Ce site utilise des cookies pour améliorer l'expérience de navigation
        des utilisateurs. Les cookies sont de petits fichiers texte stockés sur
        l'ordinateur de l'utilisateur. Les cookies peuvent être désactivés ou
        supprimés via les paramètres du navigateur. Veuillez consulter notre
        politique en matière de cookies pour plus d'informations.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Liens vers des sites tiers
      </h2>
      <p className="px-4">
        Ce site peut contenir des liens vers des sites web de tiers. Nous ne
        sommes pas responsables des pratiques de confidentialité ou du contenu
        de ces sites tiers. Nous encourageons les utilisateurs à lire les
        politiques de confidentialité de ces sites avant de fournir des
        informations personnelles.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Modifications de la politique de confidentialité
      </h2>
      <p className="px-4">
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Toute modification sera publiée sur cette
        page avec une date de révision mise à jour. Nous encourageons les
        utilisateurs à consulter régulièrement cette page pour prendre
        connaissance des éventuelles modifications.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">Contact</h2>
      <p className="px-4">
        Pour toute question ou demande concernant cette politique de
        confidentialité, veuillez nous contacter à l'adresse e-mail suivante :
        [adresse e-mail de contact].
      </p>
    </div>
  );
}
