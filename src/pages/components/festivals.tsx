import Image from 'next/image'
import { motion } from 'framer-motion'

export function Festival() {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        delay: 6,
        duration: 2,
      },
    },
  }

  return (
    <>
      <motion.section
        variants={item}
        initial="hidden"
        animate="show"
        id="festivals"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-right sm:pr-60 sm:text-5xl mb-6 text-stone-800 dark:text-stone-100">
          Festivals
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row justify-around gap-5">
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-stone-500 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/festival-card-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-2xl hover:border-stone-300 hover:border"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-stone-500 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/festival-card-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-100 my-0 mx-1 rounded-2xl hover:border-stone-300 hover:border"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-stone-500 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/festival-card-2.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-90 mb-0 mx-1 rounded-2xl hover:border-stone-300 hover:border"
            />
          </li>
          <li className="md:w-1/5 sm:w-5/6 flex flex-col items-center border dark:border-stone-500 bg-white dark:bg-black py-2 px-2 rounded-3xl shadow-xl">
            <Image
              src="/images/festival-card-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="w-90 mb-0 mx-1 rounded-2xl hover:border-stone-300 hover:border"
            />
          </li>
        </ul>
      </motion.section>
    </>
  )
}
