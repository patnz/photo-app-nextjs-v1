import { useEffect, useMemo, useState } from 'react'
import Map from './map'

const MapNoSSR = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted) {
    return <Map />
  }
}

export default MapNoSSR
