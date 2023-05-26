import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container z-40">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link className="hidden items-center space-x-2 md:flex" href="/">
            <svg
              fill="#000000"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 16 3 C 14.90625 3 14 3.90625 14 5 C 14 5.730469 14.402344 6.371094 15 6.71875 L 15 8.25 C 15 8.675781 14.675781 9 14.25 9 L 11.90625 9 C 11.59375 9 11.316406 8.851563 11.15625 8.625 C 11.667969 8.261719 12 7.667969 12 7 C 12 5.90625 11.09375 5 10 5 C 8.90625 5 8 5.90625 8 7 C 8 7.730469 8.402344 8.371094 9 8.71875 L 9 10.40625 L 9.28125 10.71875 L 11.625 13.0625 C 11.167969 13.234375 10.902344 13.710938 10.996094 14.1875 C 11.089844 14.667969 11.511719 15.011719 12 15 L 12.65625 15 L 11.09375 20.5625 L 11.03125 20.71875 L 10.375 22 L 9 22 C 8.96875 22 8.9375 22 8.90625 22 C 8.355469 22.027344 7.925781 22.496094 7.953125 23.046875 C 7.980469 23.597656 8.449219 24.027344 9 24 L 7.1875 26.40625 L 7 26.65625 L 7 29 L 25 29 L 25 26.65625 L 24.8125 26.40625 L 23 24 C 23.359375 24.003906 23.695313 23.816406 23.878906 23.503906 C 24.058594 23.191406 24.058594 22.808594 23.878906 22.496094 C 23.695313 22.183594 23.359375 21.996094 23 22 L 21.625 22 L 20.96875 20.71875 L 20.9375 20.65625 L 20.90625 20.5625 L 19.34375 15 L 20 15 C 20.488281 15.011719 20.917969 14.671875 21.007813 14.191406 C 21.101563 13.710938 20.832031 13.234375 20.375 13.0625 L 22.71875 10.71875 L 23 10.40625 L 23 8.71875 C 23.597656 8.371094 24 7.730469 24 7 C 24 5.90625 23.09375 5 22 5 C 20.90625 5 20 5.90625 20 7 C 20 7.667969 20.332031 8.261719 20.84375 8.625 C 20.683594 8.851563 20.40625 9 20.09375 9 L 17.75 9 C 17.324219 9 17 8.675781 17 8.25 L 17 6.71875 C 17.597656 6.371094 18 5.730469 18 5 C 18 3.90625 17.09375 3 16 3 Z M 16 10.34375 C 16.480469 10.746094 17.082031 11 17.75 11 L 19.5625 11 L 17.5625 13 L 14.4375 13 L 12.4375 11 L 14.25 11 C 14.917969 11 15.519531 10.746094 16 10.34375 Z M 14.75 15 L 17.25 15 L 19.03125 21.28125 L 19.0625 21.375 L 19.375 22 L 12.625 22 L 12.9375 21.375 L 12.96875 21.28125 Z M 11.5 24 L 20.5 24 L 22.75 27 L 9.25 27 Z" />
            </svg>
            <span className="hidden font-bold sm:inline-block font-text">
              Zugzwang
            </span>
          </Link>
          <nav className="hidden gap-7 md:flex px-6 font-text">
            <Link
              className="flex items-center text-lg font-medium hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/#features"
            >
              Features
            </Link>
            <Link
              className="flex items-center text-lg font-medium hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="flex items-center text-lg font-medium hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="flex items-center text-lg font-medium hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/docs"
            >
              Documentation
            </Link>
          </nav>
          <button className="flex items-center space-x-2 md:hidden">
            <svg
              fill="#000000"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 16 3 C 14.90625 3 14 3.90625 14 5 C 14 5.730469 14.402344 6.371094 15 6.71875 L 15 8.25 C 15 8.675781 14.675781 9 14.25 9 L 11.90625 9 C 11.59375 9 11.316406 8.851563 11.15625 8.625 C 11.667969 8.261719 12 7.667969 12 7 C 12 5.90625 11.09375 5 10 5 C 8.90625 5 8 5.90625 8 7 C 8 7.730469 8.402344 8.371094 9 8.71875 L 9 10.40625 L 9.28125 10.71875 L 11.625 13.0625 C 11.167969 13.234375 10.902344 13.710938 10.996094 14.1875 C 11.089844 14.667969 11.511719 15.011719 12 15 L 12.65625 15 L 11.09375 20.5625 L 11.03125 20.71875 L 10.375 22 L 9 22 C 8.96875 22 8.9375 22 8.90625 22 C 8.355469 22.027344 7.925781 22.496094 7.953125 23.046875 C 7.980469 23.597656 8.449219 24.027344 9 24 L 7.1875 26.40625 L 7 26.65625 L 7 29 L 25 29 L 25 26.65625 L 24.8125 26.40625 L 23 24 C 23.359375 24.003906 23.695313 23.816406 23.878906 23.503906 C 24.058594 23.191406 24.058594 22.808594 23.878906 22.496094 C 23.695313 22.183594 23.359375 21.996094 23 22 L 21.625 22 L 20.96875 20.71875 L 20.9375 20.65625 L 20.90625 20.5625 L 19.34375 15 L 20 15 C 20.488281 15.011719 20.917969 14.671875 21.007813 14.191406 C 21.101563 13.710938 20.832031 13.234375 20.375 13.0625 L 22.71875 10.71875 L 23 10.40625 L 23 8.71875 C 23.597656 8.371094 24 7.730469 24 7 C 24 5.90625 23.09375 5 22 5 C 20.90625 5 20 5.90625 20 7 C 20 7.667969 20.332031 8.261719 20.84375 8.625 C 20.683594 8.851563 20.40625 9 20.09375 9 L 17.75 9 C 17.324219 9 17 8.675781 17 8.25 L 17 6.71875 C 17.597656 6.371094 18 5.730469 18 5 C 18 3.90625 17.09375 3 16 3 Z M 16 10.34375 C 16.480469 10.746094 17.082031 11 17.75 11 L 19.5625 11 L 17.5625 13 L 14.4375 13 L 12.4375 11 L 14.25 11 C 14.917969 11 15.519531 10.746094 16 10.34375 Z M 14.75 15 L 17.25 15 L 19.03125 21.28125 L 19.0625 21.375 L 19.375 22 L 12.625 22 L 12.9375 21.375 L 12.96875 21.28125 Z M 11.5 24 L 20.5 24 L 22.75 27 L 9.25 27 Z" />
            </svg>
            <span className="font-bold font-text">Menu</span>
          </button>
        </div>
        <nav>
          <Link
            className="inline-flex items-center justify-center text-sm font-text font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-4"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}