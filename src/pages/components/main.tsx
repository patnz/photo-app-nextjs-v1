import Image from 'next/image'

export function Main() {
  return (
    <>
      <main className="w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
        >
          <article className="sm:w-.5">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              A{' '}
              <span className="text-yellow-700 dark:text-yellow-200">
                collection of photography
              </span>{' '}
              from over the years...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-yellow-700 dark:text-yellow-200">
              Photographs can be queues for memories, something to share with
              the world. They can inspire a feeling, and be the opening line of
              an unwritten book.
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-yellow-700 dark:text-yellow-200">
              Something something.
            </p>
          </article>
          <Image
            src="/images/photo-1.jpeg"
            alt="sunset in seville"
            width="6000"
            height="4000"
            className="w-1/2"
          />
        </section>
      </main>
    </>
  )
}
