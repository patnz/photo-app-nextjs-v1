// import Head from 'next/head'

import dynamic from 'next/dynamic'

const MapNoSSR = dynamic(() => import('./map'), {
  ssr: false,
})

export default function Home() {
  return (
    <div>
      <h1>A map goes here:</h1>
      <MapNoSSR />
    </div>
  )
}
