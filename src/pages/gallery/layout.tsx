import { ReactComponentElement } from 'react'
import { Nav } from '../components/landing-page/nav'
import { NextComponentType } from 'next'

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main className="flex justify-center overflow-hidden no-scroll w-screen h-screen max-h-md my-auto pt-10 fixed mx-auto bg-stone-100">
        <section className="h-4/5 w-4/5">{children}</section>
      </main>
    </>
  )
}
