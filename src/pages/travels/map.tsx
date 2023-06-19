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
    return <></>
  } else
    return (
      <>
        <h4>Map is Loading...</h4>
      </>
    )
}

export default Map
