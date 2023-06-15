import 'leaflet/dist/leaflet.css'
import MapNoSSR from '../../NoSSR/MapNoSSR'
import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <MapNoSSR />
    </Layout>
  )
}
