import Nav from '../landing-page/nav'
import { motion } from 'framer-motion'

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main className="no-scroll max-h-md fixed mx-auto my-auto flex h-screen w-screen justify-center overflow-hidden bg-stone-100 pt-36 dark:bg-stone-700">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="h-5/6 w-5/6"
        >
          {children}
        </motion.section>
      </main>
    </>
  )
}
