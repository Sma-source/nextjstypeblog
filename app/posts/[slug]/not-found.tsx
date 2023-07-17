import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container w-full py-6 lg:py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-4 tracking-tight text-gray-900">
          L'article de blog demandé n'existe pas.
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Oups, ce contenu n'existe pas ou n'existe plus. Une erreur s'est
          peut-être glissée dans l'adresse que vous avez tapée. <br /> Autre
          possibilité : l'adresse est obsolète et ne correspond à aucune page
          existante sur le site.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="bg-[#990f3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#990f3d]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Retour au Blog
        </Link>
        {/* <a href="#" className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a> */}
      </div>
    </div>
  );
}
