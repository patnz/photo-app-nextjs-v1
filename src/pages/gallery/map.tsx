import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import cameraIcon from '../../icons/camera-icon.png'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import geoData from '../../../public/geodata/countries.json'
import Image from 'next/image'
import { Icon } from 'leaflet'

console.log(geoData)

const Map = () => {
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]
  const blackLine = { color: 'black' }
  const customIcon = new Icon({
    iconUrl: '/markers/camera-icon.png',
    iconSize: [30, 30],
  })

  const bulgaria = [23.19, 42.41]
  const jersey = [-2.06, 49.11]
  const serbia = [20.3, 44.5]
  const romania = [26.06, 44.26]
  const uk = [-51.3, 0.1]

  return (
    <MapContainer
      className="w-full h-full mt-20 border-4 border-stone-100 rounded shadow-2xl"
      center={[47.505, 10.09]}
      zoom={4}
      scrollWheelZoom={true}
    >
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" // STAMEN WATERCOLOUR MAP TILES
      /> */}
      <TileLayer
        attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=${process.env.jawgKey})`} // STAMEN WATERCOLOUR MAP TILES
        accessToken={process.env.jawgKey}
      />

      {/* JERSEY */}
      <Marker position={[49.21, -2.13]} icon={customIcon}>
        <Popup className="w-96">
          <Image
            src="/images/gallery-jersey.jpeg"
            alt="placeholder-alt-tag"
            width="2000"
            height="3000"
            className="w-100 h-100 mb-1 my-1 rounded-2xl"
            loading="eager"
          />
        </Popup>
      </Marker>
      {/* RENNES */}
      <Marker position={[48.12, -1.67]} icon={customIcon}>
        <Popup className="w-96">
          <Image
            src="/images/gallery-rennes.jpeg"
            alt="placeholder-alt-tag"
            width="2000"
            height="3000"
            className="w-100 h-100 mb-1 my-1 rounded-2xl"
            loading="eager"
          />
        </Popup>
      </Marker>
      {/* ROME */}
      <Marker position={[41.9, 12.5]} icon={customIcon}>
        <Popup className="w-96">
          <Image
            src="/images/gallery-rome.jpeg"
            alt="placeholder-alt-tag"
            width="2000"
            height="3000"
            className="w-100 h-100 mb-1 my-1 rounded-2xl"
            loading="eager"
          />
        </Popup>
      </Marker>
      {/* SEVILLE */}
      <Marker position={[37.38, -5.98]} icon={customIcon}>
        <Popup className="w-96">
          <Image
            src="/images/travel-card-2.jpeg"
            alt="placeholder-alt-tag"
            width="2000"
            height="3000"
            className="w-100 h-100 mb-1 my-1 rounded-2xl"
            loading="eager"
          />
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
