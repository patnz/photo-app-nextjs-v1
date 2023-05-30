import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function Travel() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, amount: 'some' }}
        transition={{ duration: 2 }}
        id="travel"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-left sm:pl-60 sm:text-5xl mb-6 text-stone-800 dark:text-stone-100 text-6xl font-fira">
          Travel
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row justify-around gap-5">
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border-2 border-transparent dark:border-rose-950 bg-white dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-seville-7.jpeg"
              alt="placeholder-alt-tag"
              width="1000"
              height="1000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border-2 border-transparent dark:border-rose-950 bg-white dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-seville-5.jpeg"
              alt="placeholder-alt-tag"
              width="1000"
              height="1000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border-2 border-transparent dark:border-rose-950 bg-white dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-seville-3.jpeg"
              alt="placeholder-alt-tag"
              width="1000"
              height="1000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border-2 border dark:border-rose-950 bg-white dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-seville-6.jpeg"
              alt="placeholder-alt-tag"
              width="1000"
              height="1000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
              loading="eager"
            />
          </li>
        </ul>
      </motion.section>
    </>
  )
}
