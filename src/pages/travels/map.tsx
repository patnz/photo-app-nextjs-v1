'use client'

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
    <>
      <MapContainer
        className="mt-20 h-full w-full rounded-xl border-4 border-stone-100 shadow-2xl"
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
          url={`https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.JAWG_KEY}`} // JAWG  MAP TILES
          accessToken={process.env.JAWG_KEY}
          minZoom={0}
          maxZoom={22}
          subdomains={'abcd'}
        />

        {/* JERSEY */}
        <Marker position={[49.21, -2.13]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/portrait-jersey-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>
        {/* LISBON */}
        {/* 38.7223° N, 9.1393° W */}
        <Marker position={[38.72, -9.13]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/portrait-lisbon-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>

        {/* CROATIA */}
        {/* 42.9297° N, 16.8886° E */}
        <Marker position={[42.92, 16.88]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/landscape-croatia-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>

        {/* ABEL TASMAN */}
        {/* 40.9050° S, 172.9671° E */}
        <Marker position={[-40.91, 172.96]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/landscape-abel-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>

        {/* WELLINGTON */}
        {/* 41.2924° S, 174.7787° E */}
        <Marker position={[-41.29, 174.78]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/portrait-wellington-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>

        {/* RENNES */}
        {/* 48.1173° N, 1.6778° W */}
        <Marker position={[48.12, -1.67]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/portrait-rennes-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>
        {/* ROME */}
        <Marker position={[41.9, 12.5]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/fest/portrait-fest-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>
        {/* SEVILLE */}
        <Marker position={[37.38, -5.98]} icon={customIcon}>
          <Popup className="h-72 w-72">
            <Image
              src="/images/travel/portrait-seville-5.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
            />
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
