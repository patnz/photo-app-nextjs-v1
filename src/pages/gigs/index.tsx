import Layout from './layout'
import Carousel from './carousel'
import Image from 'next/image'
import { motion } from 'framer-motion'

const imagesItems = [
  <Image
    src="/images/gigs/portrait-gig-1.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-2.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-3.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/landscape-gig-1.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-4.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-5.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/landscape-gig-2.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-6.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/gigs/portrait-gig-7.jpeg"
    alt="music festival photography"
    key={null}
    fill={true}
    sizes={'w-full h-full'}
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
        className="align-center max-w-100 mt-[90px] flex h-[80vh] justify-center sm:mt-[120px]"
      >
        <Carousel items={imagesItems} />
      </motion.div>
    </Layout>
  )
}
