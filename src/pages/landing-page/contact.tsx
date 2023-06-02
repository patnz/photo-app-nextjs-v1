import { motion } from 'framer-motion'
import { useRef } from 'react'

export function Contact() {
  const scrollRef = useRef(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, amount: 'some' }}
        transition={{ duration: 2 }}
        id="contact"
        className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height font-caveat"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact
        </h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-3xl mx-auto text-xl sm:text-2xl flex flex-col items-left gap-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="d2566e21-80b8-4c86-9fbd-658955fd36c3"
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={40}
            placeholder="Your Subject"
            className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          ></textarea>

          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
            Submit
          </button>
        </form>
      </motion.section>
    </>
  )
}
