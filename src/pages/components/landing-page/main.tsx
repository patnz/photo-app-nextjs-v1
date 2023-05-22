import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export function Main() {
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
      <main className="w-4xl h-screen mx-auto my-10 flex flex-col justify-center">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
        >
          <motion.article
            className="sm:w-.5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef, amount: 'some', once: true }}
            transition={{ duration: 2, delay: 2 }}
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, amount: 'some' }}
            transition={{ duration: 3, delay: 1 }}
          >
            <Image
              src="/images/photo-1.jpeg"
              alt="sunset in seville"
              width="6000"
              height="4000"
              loading="eager"
              className="rounded-xl"
              priority={true}
            />
          </motion.div>
        </section>
      </main>
    </>
  )
}
