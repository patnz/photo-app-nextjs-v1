// import Head from 'next/head'

'use client'

import dynamic from 'next/dynamic'

const MapNoSSR = dynamic(() => import('./map'), {
  ssr: false,
})

import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <MapNoSSR />
    </Layout>
  )
}
