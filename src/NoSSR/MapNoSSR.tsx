import dynamic from 'next/dynamic'

const MapNoSSR = dynamic(() => import('./map'), { ssr: false })

export default MapNoSSR
