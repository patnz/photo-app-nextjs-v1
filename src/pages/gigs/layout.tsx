import { ReactComponentElement } from 'react'
import Nav from '../landing-page/nav'
import { NextComponentType } from 'next'

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main className="no-scroll max-h-md fixed mx-auto my-auto flex h-screen w-screen justify-center overflow-hidden bg-stone-100 pt-10 dark:bg-stone-700">
        <section className="h-4/5 w-4/5">{children}</section>
      </main>
    </>
  )
}
