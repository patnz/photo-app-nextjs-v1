export function Nav() {
  return (
    <header className="bg-stone-700 text-stone-100 sticky top-0 z-8">
      <section className="max-w-4xl mx-auto p-4 flex justify-around items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">📷</a> pat wilson photography
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl text-white sm:hidden focus:outline-none z-9"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="#travel" className="hover:opacity-90">
              Travel
            </a>
            <a href="#festivals" className="hover:opacity-90">
              Festivals
            </a>
            <a href="#gigs" className="hover:opacity-90">
              Gigs
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>
    </header>
  )
}
