import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export function Festival() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, amount: 'some' }}
        transition={{ duration: 2 }}
        id="festivals"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height z-1"
      >
        <h2 className="text-4xl font-bold text-center sm:text-right sm:pr-60 sm:text-5xl mb-6 text-stone-800 dark:text-stone-100 text-6xl font-fira">
          Festivals
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row justify-around gap-5">
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-amber-900 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-fest-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="left-[200px] h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-amber-900 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-fest-2.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-amber-900 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-fest-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-amber-900 bg-white dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/portrait-fest-5.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full object-cover my-0 mx-1 rounded-2xl hover:border-transparent hover:border"
            />
          </li>
        </ul>
      </motion.section>
    </>
  )
}
