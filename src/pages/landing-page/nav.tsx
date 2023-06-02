import Link from 'next/link'
import { useState } from 'react'

export function Nav() {
  const [burgerClicked, clickBurger] = useState(false)

  return (
    <>
      {burgerClicked ? (
        <header className="h-30 fixed top-0 z-10 w-full bg-stone-700 text-stone-100">
          <section className="mx-auto flex max-w-[100vw] items-center justify-evenly py-4">
            <nav
              className="space-x-3 pt-1 font-caveat text-xl sm:block"
              aria-label="main"
            >
              <Link href="/" className="hover:opacity-90">
                Home
              </Link>
              <Link href="/festivals" className="hover:opacity-90">
                Festivals
              </Link>

              <Link href="/gigs" className="hover:opacity-90">
                Gigs
              </Link>

              <Link href="/travels" className="hover:opacity-90">
                Travel
              </Link>

              <button
                onClick={() => clickBurger(!burgerClicked)}
                id="mobile-open-button"
                className="z-9 text-2xl text-white focus:outline-none sm:hidden"
              >
                &#9776;
              </button>
            </nav>
          </section>
        </header>
      ) : (
        <header className="h-30 fixed top-0 z-10 w-full bg-stone-700 text-stone-100">
          <section className="mx-auto flex max-w-4xl items-center justify-around p-4">
            <h1 className="mx-3 font-caveat text-2xl md:text-5xl">
              pat wilson photography
            </h1>
            <div>
              <button
                onClick={() => clickBurger(!burgerClicked)}
                id="mobile-open-button"
                className="z-9 text-3xl text-white focus:outline-none sm:hidden"
              >
                &#9776;
              </button>

              <nav
                className="hidden space-x-8 pt-1 font-caveat text-2xl sm:block"
                aria-label="main"
              >
                <Link href="/" className="hover:opacity-90">
                  Home
                </Link>

                <Link href="/festivals" className="hover:opacity-90">
                  Festivals
                </Link>

                <Link href="/gigs" className="hover:opacity-90">
                  Gigs
                </Link>

                <Link href="/travels" className="hover:opacity-90">
                  Travel
                </Link>
              </nav>
            </div>
          </section>
        </header>
      )}
    </>
  )
}
