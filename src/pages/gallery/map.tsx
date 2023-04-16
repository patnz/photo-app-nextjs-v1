import 'leaflet/dist/leaflet.css'
import Link from 'next/link'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import geoData from '../../../public/geodata/countries.json'

console.log(geoData)

const Map = () => {
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]
  const blackLine = { color: 'black' }

  const bulgaria = [23.19, 42.41]
  const jersey = [-2.06, 49.11]
  const serbia = [20.3, 44.5]
  const romania = [26.06, 44.26]
  const uk = [-0.1, 51.3]

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      />
      <Marker position={uk}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Marker position={bulgaria}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Marker position={[-61.45, 12.03]}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Marker position={romania}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Marker position={serbia}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
