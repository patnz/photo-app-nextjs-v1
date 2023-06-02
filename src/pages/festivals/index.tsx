import card1 from '/images/fest/portrait-fest-1.jpeg'
import card2 from '/images/fest/portrait-fest-2.jpeg'
import card3 from '/images/fest/portrait-fest-3.jpeg'
import card4 from '/images/fest/portrait-fest-4.jpeg'
import Layout from './layout'
import Carousel from './carousel'
import Image from 'next/image'

const imagesItems = [
  <Image
    src="/images/fest/portrait-fest-1.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/landscape-fest-1.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-2.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-3.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/landscape-fest-2.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-4.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
  <Image
    src="/images/fest/portrait-fest-5.jpeg"
    alt="placeholder-alt-tag"
    fill={true}
    className="h-auto w-auto object-contain"
  />,
]

export default function Home() {
  return (
    <Layout>
      <div className="align-center max-w-100 mt-[120px] flex h-[80vh] justify-center">
        <Carousel items={imagesItems} />
      </div>
    </Layout>
  )
}
