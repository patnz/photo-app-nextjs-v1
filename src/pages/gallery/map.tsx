import 'leaflet/dist/leaflet.css'
import Link from 'next/link'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Polygon,
  Circle,
} from 'react-leaflet'

const Map = () => {
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]
  const blackLine = { color: 'black' }
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <Link href="/">Home</Link>
        </Popup>
      </Marker>
      <Polygon
        pathOptions={blackLine}
        positions={[
          [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13],
          ],
        ]}
      />
    </MapContainer>
  )
}

export default Map
