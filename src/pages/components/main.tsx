import Image from 'next/image'
import { motion } from 'framer-motion'

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

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  }
  const itemImage = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        duration: 3,
        delay: 1,
      },
    },
  }

  return (
    <>
      <main className="w-4xl mx-auto my-10">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
        >
          <motion.article
            className="sm:w-.5"
            variants={item}
            initial="hidden"
            animate="show"
          >
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-stone-100">
              A{' '}
              <span className="text-rose-950 dark:text-yellow-200">
                collection of photography
              </span>{' '}
              from over the years...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-rose-950 dark:text-yellow-200">
              Photographs are something to share. They can inspire a feeling, or
              tell a story - queues for memories.
            </p>
          </motion.article>
          <motion.div
            className="w-4/5 sm:w-2/5"
            variants={itemImage}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/images/photo-1.jpeg"
              alt="sunset in seville"
              width="6000"
              height="4000"
              loading="eager"
              className="rounded-xl"
            />
          </motion.div>
        </section>
      </main>
    </>
  )
}
