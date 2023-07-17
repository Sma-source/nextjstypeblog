import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="pt-4 sm:pt-10 lg:pt-12 container w-full py-6 lg:py-10">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-1">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            {/* <!-- logo - start --> */}
            <div className="mb-4 lg:-mt-2">
              <a
                href="/"
                className="titre-blog inline-flex items-center gap-2 text-xl font-bold text-black md:text-xl"
                aria-label="logo"
              >
                <svg
                  fill="#990f3d"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 16 3 C 14.90625 3 14 3.90625 14 5 C 14 5.730469 14.402344 6.371094 15 6.71875 L 15 8.25 C 15 8.675781 14.675781 9 14.25 9 L 11.90625 9 C 11.59375 9 11.316406 8.851563 11.15625 8.625 C 11.667969 8.261719 12 7.667969 12 7 C 12 5.90625 11.09375 5 10 5 C 8.90625 5 8 5.90625 8 7 C 8 7.730469 8.402344 8.371094 9 8.71875 L 9 10.40625 L 9.28125 10.71875 L 11.625 13.0625 C 11.167969 13.234375 10.902344 13.710938 10.996094 14.1875 C 11.089844 14.667969 11.511719 15.011719 12 15 L 12.65625 15 L 11.09375 20.5625 L 11.03125 20.71875 L 10.375 22 L 9 22 C 8.96875 22 8.9375 22 8.90625 22 C 8.355469 22.027344 7.925781 22.496094 7.953125 23.046875 C 7.980469 23.597656 8.449219 24.027344 9 24 L 7.1875 26.40625 L 7 26.65625 L 7 29 L 25 29 L 25 26.65625 L 24.8125 26.40625 L 23 24 C 23.359375 24.003906 23.695313 23.816406 23.878906 23.503906 C 24.058594 23.191406 24.058594 22.808594 23.878906 22.496094 C 23.695313 22.183594 23.359375 21.996094 23 22 L 21.625 22 L 20.96875 20.71875 L 20.9375 20.65625 L 20.90625 20.5625 L 19.34375 15 L 20 15 C 20.488281 15.011719 20.917969 14.671875 21.007813 14.191406 C 21.101563 13.710938 20.832031 13.234375 20.375 13.0625 L 22.71875 10.71875 L 23 10.40625 L 23 8.71875 C 23.597656 8.371094 24 7.730469 24 7 C 24 5.90625 23.09375 5 22 5 C 20.90625 5 20 5.90625 20 7 C 20 7.667969 20.332031 8.261719 20.84375 8.625 C 20.683594 8.851563 20.40625 9 20.09375 9 L 17.75 9 C 17.324219 9 17 8.675781 17 8.25 L 17 6.71875 C 17.597656 6.371094 18 5.730469 18 5 C 18 3.90625 17.09375 3 16 3 Z M 16 10.34375 C 16.480469 10.746094 17.082031 11 17.75 11 L 19.5625 11 L 17.5625 13 L 14.4375 13 L 12.4375 11 L 14.25 11 C 14.917969 11 15.519531 10.746094 16 10.34375 Z M 14.75 15 L 17.25 15 L 19.03125 21.28125 L 19.0625 21.375 L 19.375 22 L 12.625 22 L 12.9375 21.375 L 12.96875 21.28125 Z M 11.5 24 L 20.5 24 L 22.75 27 L 9.25 27 Z" />
                </svg>
                Zugzwang
              </a>
            </div>
            {/* <!-- logo - end --> */}

            <p className="mb-6 text-gray-500 sm:pr-8">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>

            {/* <!-- social - start --> */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            {/* <!-- social - end --> */}
          </div>

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Navigation
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  href="/"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d] "
                >
                  Accueil
                </Link>
              </div>

              <div>
                <Link
                  href="/about"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d]"
                >
                  A Propos
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d]"
                >
                  Contact
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d]"
                >
                  Contribution
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Légale
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="/politique-de-confidentialite"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d] active:text-indigo-600"
                >
                  Confidentialité
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d] active:text-indigo-600"
                >
                  Mentions légales
                </a>
              </div>

              <div>
                <Link
                  href="/cgu"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d] active:text-indigo-600"
                >
                  CGU
                </Link>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-[#990f3d] active:text-indigo-600"
                >
                  Info Cookies
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
        </div>

        <div className="border-t py-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} - Projet Zugzwang. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
