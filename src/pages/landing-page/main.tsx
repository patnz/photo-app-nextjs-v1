import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const mainImages = [
  '/images/travel/landscape-seville-1.jpeg',
  '/images/travel/landscape-seville-2.jpeg',
  '/images/travel/landscape-porto-1.jpeg',
  '/images/travel/landscape-porto-2.jpeg',
]

export default function Main() {
  const [imageIndex, setImageIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(mainImages[imageIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex == 3) {
        setImageIndex(0)
        setCurrentImage(mainImages[imageIndex])
      } else {
        setImageIndex(imageIndex + 1)
        setCurrentImage(mainImages[imageIndex])
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [imageIndex])

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
      <main className="w-4xl mx-auto my-10 flex h-screen flex-col justify-center p-10 font-caveat">
        <section
          id="hero"
          className="mb-12 flex flex-col-reverse items-center justify-center gap-8 sm:flex-row"
        >
          <motion.article
            className="sm:w-.5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef, amount: 'some', once: true }}
            transition={{ duration: 2, delay: 2 }}
          >
            <h2 className="max-w-md text-center font-averia text-2xl font-bold tracking-wide text-slate-900 dark:text-stone-100 sm:text-left sm:text-5xl">
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
              src={currentImage}
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
