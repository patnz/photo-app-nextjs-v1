import card1 from '/images/fest/portrait-fest-1.jpeg'
import card2 from '/images/fest/portrait-fest-2.jpeg'
import card3 from '/images/fest/portrait-fest-3.jpeg'
import card4 from '/images/fest/portrait-fest-4.jpeg'
import Layout from './layout'
import Carousel from './carousel'
import Image from 'next/image'
import { motion } from 'framer-motion'

const imagesItems = [
  <Image
    src="/images/fest/portrait-fest-1.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/landscape-fest-1.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-2.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-3.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/landscape-fest-2.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-4.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-5.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    className="h-auto w-auto object-contain"
  />,
]

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="align-center max-w-100 mt-[120px] flex h-[80vh] justify-center"
      >
        <Carousel items={imagesItems} />
      </motion.div>
    </Layout>
  )
}
