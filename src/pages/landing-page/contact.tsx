import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, amount: 'some' }}
        transition={{ duration: 2 }}
        id="contact"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6 font-caveat"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Contact
        </h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="items-left mx-auto flex max-w-3xl flex-col gap-4 text-xl sm:text-2xl"
        >
          <input
            type="hidden"
            name="access_key"
            value="d2566e21-80b8-4c86-9fbd-658955fd36c3"
          />
          <label htmlFor="subject" className="dark:text-white">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={40}
            placeholder="Your Subject"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-xl text-black  dark:border-none sm:text-2xl"
          />
          <label htmlFor="message" className="dark:text-white">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-xl text-black dark:border-none sm:text-2xl"
          ></textarea>

          <button className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white  hover:bg-teal-600 active:bg-teal-500 dark:border-none">
            Submit
          </button>
        </form>
      </motion.section>
    </>
  )
}
