import { useEffect, useMemo, useState } from 'react'
import Map from './map'
import dynamic from 'next/dynamic'

const MapNoSSR = dynamic(() => import('./map'), { ssr: false })

export default MapNoSSR
