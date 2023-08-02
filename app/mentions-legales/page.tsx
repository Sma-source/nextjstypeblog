import React from "react";
export const metadata = {
  title: "Mentions Légales",
};

export default function MentionsLegales() {
  return (
    <div className="container w-full py-6 lg:py-10">
      <h1>Mentions Légales</h1>

      <h2>1. Informations légales</h2>
      <p>Raison sociale : [Nom de votre entreprise]</p>
      <p>Statut juridique : [Forme juridique de votre entreprise]</p>
      <p>Siège social : [Adresse du siège social]</p>
      <p>Téléphone : [Numéro de téléphone]</p>
      <p>Email : [Adresse e-mail de contact]</p>

      <h2>2. Responsable de la publication</h2>
      <p>[Nom complet du responsable de la publication]</p>
      <p>[Adresse e-mail du responsable de la publication]</p>

      <h2>3. Hébergement</h2>
      <p>Nom de l'hébergeur : [Nom de l'hébergeur]</p>
      <p>Adresse : [Adresse de l'hébergeur]</p>
      <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        Tous les contenus présents sur ce site (textes, images, logos, etc.)
        sont la propriété exclusive de [Nom de votre entreprise] ou de ses
        partenaires et sont protégés par les lois relatives à la propriété
        intellectuelle. Toute reproduction ou utilisation sans autorisation est
        strictement interdite.
      </p>

      <h2>5. Données personnelles</h2>
      <p>
        [Décrire comment les données personnelles des utilisateurs sont
        collectées, utilisées et protégées conformément à la réglementation en
        vigueur.]
      </p>

      <h2>6. Cookies</h2>
      <p>
        [Décrire l'utilisation des cookies sur votre site et comment les
        utilisateurs peuvent les gérer ou les désactiver.]
      </p>

      <h2>7. Liens vers d'autres sites</h2>
      <p>
        Notre site peut contenir des liens vers des sites tiers. Nous ne sommes
        pas responsables du contenu ou des pratiques de confidentialité de ces
        sites. Nous vous encourageons à consulter les politiques de
        confidentialité de ces sites avant de fournir des informations
        personnelles.
      </p>

      <h2>8. Modification des mentions légales</h2>
      <p>
        Nous nous réservons le droit de modifier ces mentions légales à tout
        moment. Les modifications prendront effet dès leur publication sur cette
        page.
      </p>

      <p>Fait à [Ville], le [Date de publication]</p>
    </div>
  );
}
