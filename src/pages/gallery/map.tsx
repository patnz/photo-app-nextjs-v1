import 'leaflet/dist/leaflet.css'
import Link from 'next/link'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import geoData from '../../../public/geodata/countries.json'

import myIcon from '../../../public/markers/leaf-green.png'
import Image from 'next/image'

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
  const uk = [-51.3, 0.1]

  return (
    <MapContainer
      className="map-container"
      center={[47.505, 10.09]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      />
      <Marker position={[51.3, -0.1]}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Marker position={[40.4, -3.7]}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Marker position={[37.38, -5.98]}>
        <Popup className="md:w-3/5 sm:w-5/6 flex flex-col items-center border bg-white dark:border-amber-900 dark:bg-stone-900 py-2 px-2 rounded-3xl shadow-xl">
          <Image
            src="/images/travel-card-2.jpeg"
            alt="placeholder-alt-tag"
            width="2000"
            height="3000"
            className="w-90 mb-0 mx-1 rounded-2xl hover:border-transparent hover:border"
            loading="eager"
          />
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
