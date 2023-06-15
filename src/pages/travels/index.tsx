import 'leaflet/dist/leaflet.css'
import { LazyMap } from './lazymap'

import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <LazyMap />
    </Layout>
  )
}
