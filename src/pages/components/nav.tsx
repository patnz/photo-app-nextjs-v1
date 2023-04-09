export function Nav() {
  return (
    <header className="bg-stone-200 text-slate-800 sticky top-0 z-8">
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
            <a href="#gallery" className="hover:opacity-90">
              Gallery
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
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
