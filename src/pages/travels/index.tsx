import 'leaflet/dist/leaflet.css'
import MapNoSSR from '../../NoSSR/MapNoSSR'
import Layout from './layout'
import { useEffect } from 'react'

export default function Home() {
  let toBeRendered = false

  useEffect(() => {
    toBeRendered = true
  }, [])

  if (toBeRendered) {
    return (
      <Layout>
        <MapNoSSR />
      </Layout>
    )
  } else return <></>
}
