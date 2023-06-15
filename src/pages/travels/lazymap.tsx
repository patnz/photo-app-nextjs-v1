import dynamic from 'next/dynamic'

import { Suspense, lazy } from 'react'

const LazyMap = dynamic(() => import('./map'), { ssr: false })

export const EvenLazierMap = () => {
  return (
    <Suspense fallback={<div className="h-[200px]" />}>
      <LazyMap />
    </Suspense>
  )
}
