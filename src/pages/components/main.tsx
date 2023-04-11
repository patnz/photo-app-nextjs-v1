import Image from 'next/image'

export function Main() {
  // let observer = new IntersectionObserver(callback, options);
  // const xAxisObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('slide-in')
  //     } else {
  //       entry.target.classList.remove('slide-in')
  //     }
  //   })
  // })

  // const hiddenLandingElements = document.querySelectorAll('.landing-hidden')

  // hiddenLandingElements.forEach((el) => xAxisObserver.observe(el))

  return (
    <>
      <main className="w-4xl mx-auto my-10">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
        >
          <article className="sm:w-.5">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white landing-hidden">
              A{' '}
              <span className="text-rose-950 dark:text-yellow-200">
                collection of photography
              </span>{' '}
              from over the years...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-rose-950 dark:text-yellow-200">
              Photographs can be queues for memories. They can inspire a
              feeling, or tell a story. They are something to share.
            </p>
          </article>
          <Image
            src="/images/photo-1.jpeg"
            alt="sunset in seville"
            width="6000"
            height="4000"
            className="w-2/5 landing-hidden"
          />
        </section>

        <header className="mx-auto bg-black dark:bg-white w-1/2"></header>
      </main>
    </>
  )
}
