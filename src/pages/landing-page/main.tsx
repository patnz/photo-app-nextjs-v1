import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Main() {
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
  const scrollRef = useRef(null)

  return (
    <>
      <main className="w-4xl mx-auto my-10 flex h-screen flex-col justify-center font-caveat text-6xl">
        <section
          id="hero"
          className="mb-12 flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
        >
          <motion.article
            className="sm:w-.5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef, amount: 'some', once: true }}
            transition={{ duration: 2, delay: 2 }}
          >
            <h2 className="max-w-md text-center font-averia text-5xl font-bold tracking-wide text-slate-900 dark:text-stone-100 sm:text-left">
              A{' '}
              <span className="text-rose-900 dark:text-yellow-200">
                collection of photography
              </span>{' '}
              from over the years...
            </h2>
            <p className="mt-4 max-w-md text-center text-2xl tracking-normal text-slate-800 dark:text-yellow-200 sm:text-left">
              Photographs are something to share. They can inspire a feeling, or
              tell a story - queues for memories.
            </p>
          </motion.article>
          <motion.div
            className="w-4/5 sm:w-2/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, amount: 'some', once: true }}
            transition={{ duration: 3, delay: 1 }}
          >
            <Image
              src="/images/travel/landscape-porto-1.jpeg"
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
