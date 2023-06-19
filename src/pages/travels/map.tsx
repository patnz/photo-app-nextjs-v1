'use client'

import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import cameraIcon from '../../icons/camera-icon.png'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import geoData from '../../../public/geodata/countries.json'
import Image from 'next/image'
import dynamic from 'next/dynamic'

geoData
  ? console.log('geoData loaded!')
  : console.log('problem loading geoData!')

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

  const jawgKey = process.env.NEXT_PUBLIC_JAWG_KEY

  if (typeof window !== 'undefined') {
    const LazyMarker = dynamic(
      async () => (await import('react-leaflet')).Marker,
      {
        ssr: false,
      }
    )
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
            url={`https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${jawgKey}`} // JAWG  MAP TILES
            accessToken={jawgKey}
            minZoom={0}
            maxZoom={22}
            subdomains={'abcd'}
          />

          {/* JERSEY */}
          <LazyMarker position={[49.21, -2.13]} icon={customIcon}>
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
          </LazyMarker>
          {/* LISBON */}
          {/* 38.7223° N, 9.1393° W */}
          <LazyMarker position={[38.72, -9.13]} icon={customIcon}>
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
          </LazyMarker>

          {/* CROATIA */}
          {/* 42.9297° N, 16.8886° E */}
          {/*  */}
          <LazyMarker position={[42.92, 16.88]} icon={customIcon}>
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
          </LazyMarker>

          {/* ABEL TASMAN */}
          {/* 40.9050° S, 172.9671° E */}
          <LazyMarker position={[-40.91, 172.96]} icon={customIcon}>
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
          </LazyMarker>

          {/* WELLINGTON */}
          {/* 41.2924° S, 174.7787° E */}
          <LazyMarker position={[-41.29, 174.78]} icon={customIcon}>
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
          </LazyMarker>

          {/* RENNES */}
          {/* 48.1173° N, 1.6778° W */}
          <LazyMarker position={[48.12, -1.67]} icon={customIcon}>
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
          </LazyMarker>
          {/* ROME */}
          <LazyMarker position={[41.9, 12.5]} icon={customIcon}>
            <Popup className="h-72 w-72">
              <Image
                src="/images/travel/landscape-rennes-1.jpeg"
                alt="placeholder-alt-tag"
                width="2000"
                height="3000"
                className="h-full w-full rounded-2xl object-cover"
                loading="eager"
              />
            </Popup>
          </LazyMarker>
          {/* SEVILLE */}
          <LazyMarker position={[37.38, -5.98]} icon={customIcon}>
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
          </LazyMarker>
        </MapContainer>
      </>
    )
  } else
    return (
      <>
        <h4>Map is Loading...</h4>
      </>
    )
}

export default Map
