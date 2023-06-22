'use client'

import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import cameraIcon from '../../icons/camera-icon.png'
import geoData from '../../public/geodata/countries.json'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

import icon from '../../icons/camera-icon.png'
import { Icon } from 'leaflet'

geoData
  ? console.log('geoData loaded!')
  : console.log('problem loading geoData!')

const Map = () => {
  const [isClient, setIsClient] = useState(false)
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

  const jawgKey = process.env.JAWG_KEY

  const LazyMarker = dynamic(
    () => import('react-leaflet').then((module) => module.Marker),
    {
      ssr: false,
    }
  )
  const LazyMap = dynamic(
    () => import('react-leaflet').then((module) => module.MapContainer),
    {
      ssr: false,
    }
  )

  const LazyPopup = dynamic(
    () => import('react-leaflet').then((module) => module.Popup),
    {
      ssr: false,
    }
  )

  const LazyTileLayer = dynamic(
    () => import('react-leaflet').then((module) => module.TileLayer),
    {
      ssr: false,
    }
  )

  // const LazyIcon = dynamic(() => import('leaflet').then((module) => module), {
  //   ssr: false,
  // })

  // const Leaflet = dynamic(() => import('leaflet'), { ssr: false })

  // const customIcon = L.Icon({
  //   iconUrl: '/markers/camera-icon.png',
  //   iconSize: [30, 30],
  // })

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <h4>Map is Loading...</h4>
  }

  // const myIcon = new Icon({
  //   iconUrl: '/markers/camera-icon.png',
  //   iconSize: [30, 30],
  // })

  return (
    <>
      <LazyMap
        className="h-full w-full rounded-xl border-4 border-stone-100 shadow-2xl"
        center={[44.505, 10.09]}
        zoom={5}
        scrollWheelZoom={true}
      >
        {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" // STAMEN WATERCOLOUR MAP TILES
      /> */}
        {/* <LazyTileLayer
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${jawgKey}`} // JAWG  MAP TILES
          accessToken={jawgKey}
          minZoom={0}
          maxZoom={22}
          subdomains={'abcd'}
        /> */}
        <LazyTileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url={
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
          }
          minZoom={3}
          maxZoom={12}
          subdomains={'abcd'}
        />

        {/* JERSEY */}
        <LazyMarker
          position={[49.21, -2.13]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          {/* <LazyMarker position={[49.21, -2.13]}> */}
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/portrait-jersey-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>
        {/* LISBON */}
        {/* 38.7223° N, 9.1393° W */}
        <LazyMarker
          position={[38.72, -9.13]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/portrait-lisbon-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>

        {/* CROATIA */}
        {/* 42.9297° N, 16.8886° E */}
        {/*  */}
        <LazyMarker
          position={[42.92, 16.88]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/landscape-croatia-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>

        {/* ABEL TASMAN */}
        {/* 40.9050° S, 172.9671° E */}
        <LazyMarker
          position={[-40.91, 172.96]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/landscape-abel-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>

        {/* WELLINGTON */}
        {/* 41.2924° S, 174.7787° E */}
        <LazyMarker
          position={[-41.29, 174.78]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/portrait-wellington-3.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>

        {/* RENNES */}
        {/* 48.1173° N, 1.6778° W */}
        <LazyMarker
          position={[48.12, -1.67]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/portrait-rennes-4.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>
        {/* ROME */}
        <LazyMarker
          position={[41.9, 12.5]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/landscape-rennes-1.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>
        {/* SEVILLE */}
        <LazyMarker
          position={[37.38, -5.98]}
          icon={
            isClient
              ? new Icon({
                  iconUrl: '/markers/camera-icon.png',
                  iconSize: [30, 30],
                })
              : undefined
          }
        >
          <LazyPopup className="pop-up">
            <Image
              src="/images/travel/portrait-seville-5.jpeg"
              alt="placeholder-alt-tag"
              width="2000"
              height="3000"
              className="travel-image rounded-2xl object-cover"
              loading="eager"
              priority={true}
            />
          </LazyPopup>
        </LazyMarker>
      </LazyMap>
    </>
  )
}

export default Map
