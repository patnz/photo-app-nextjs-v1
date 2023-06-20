import dynamic from 'next/dynamic'

const MapNoSSR = dynamic(() => import('../pages/travels/map'), { ssr: false })

export default MapNoSSR
