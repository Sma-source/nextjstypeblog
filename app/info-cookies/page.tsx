import React from "react";
export const metadata = {
  title: "Informations Cookies",
};

export default function InfoCookies() {
  return (
    <div className="container w-full py-6 lg:py-10">
      <h1 className="text-3xl font-bold mb-3 px-4">
        Informations sur les Cookies
      </h1>
      <p className="px-4">
        Ce site utilise des cookies pour améliorer l'expérience de navigation
        des utilisateurs. Cette page vous explique ce que sont les cookies,
        comment nous les utilisons et comment vous pouvez les gérer.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Qu'est-ce qu'un cookie ?
      </h2>
      <p className="px-4">
        Un cookie est un petit fichier texte qui est stocké sur votre ordinateur
        ou votre appareil lorsque vous visitez un site web. Les cookies sont
        largement utilisés pour permettre aux sites de fonctionner de manière
        efficace, ainsi que pour fournir des informations aux propriétaires du
        site.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Comment nous utilisons les cookies
      </h2>
      <p className="px-4">
        Nous utilisons les cookies pour diverses raisons, notamment :
      </p>
      <ul className="px-6">
        <li>Assurer le bon fonctionnement du site</li>
        <li>Améliorer votre expérience de navigation</li>
        <li>
          Analyser l'utilisation du site et recueillir des statistiques anonymes
        </li>
        <li>Personnaliser le contenu et les publicités</li>
      </ul>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Types de cookies utilisés
      </h2>
      <p className="px-4">Nous utilisons les types de cookies suivants :</p>
      <ul className="px-6">
        <li>
          Cookies essentiels : Ces cookies sont nécessaires au bon
          fonctionnement du site et ne peuvent pas être désactivés dans nos
          systèmes. Ils sont généralement définis en réponse à des actions de
          votre part, telles que la définition de vos préférences en matière de
          confidentialité, la connexion ou le remplissage de formulaires.
        </li>
        <li>
          Cookies analytiques : Ces cookies nous permettent de recueillir des
          informations sur la manière dont les visiteurs utilisent le site, par
          exemple pour compter les visiteurs et établir des statistiques afin
          d'améliorer la performance du site.
        </li>
        <li>
          Cookies de personnalisation : Ces cookies permettent au site de se
          souvenir de vos choix et préférences, tels que la langue préférée ou
          la région dans laquelle vous vous trouvez, afin de personnaliser votre
          expérience.
        </li>
        <li>
          Cookies publicitaires : Ces cookies sont utilisés pour diffuser des
          publicités pertinentes pour vous et vos intérêts. Ils sont également
          utilisés pour limiter le nombre de fois où vous voyez une publicité,
          ainsi que pour mesurer l'efficacité des campagnes publicitaires.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Gérer les cookies
      </h2>
      <p className="px-4">
        Vous pouvez contrôler et gérer les cookies à tout moment en modifiant
        les paramètres de votre navigateur. Veuillez noter que la désactivation
        des cookies peut affecter certaines fonctionnalités du site.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">
        Modifications de la politique sur les cookies
      </h2>
      <p className="px-4">
        Nous nous réservons le droit de modifier cette politique sur les cookies
        à tout moment. Toute modification sera publiée sur cette page avec une
        date de révision mise à jour. Nous encourageons les utilisateurs à
        consulter régulièrement cette page pour prendre connaissance des
        éventuelles modifications.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight  p-4">Contact</h2>
      <p className="px-4">
        Pour toute question ou demande concernant notre utilisation des cookies,
        veuillez nous contacter à l'adresse e-mail suivante : [adresse e-mail de
        contact].
      </p>
    </div>
  );
}
