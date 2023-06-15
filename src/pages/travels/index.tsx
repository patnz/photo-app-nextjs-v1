import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

const MapNoSSR = dynamic(() => import('./map'), {
  ssr: false,
})
const LeafletMap = () => {
  const Map = useMemo(
    () => dynamic(() => import('./MapNoSSR'), { ssr: false }),
    []
  )
  return <Map />
}

import Layout from './layout'
import { useMemo } from 'react'

export default function Home() {
  return (
    <Layout>
      <LeafletMap />
    </Layout>
  )
}
