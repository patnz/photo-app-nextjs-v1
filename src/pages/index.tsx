import { Contact } from './components/contact'
import { Gallery } from './components/gallery'
import { Main } from './components/main'
import { Nav } from './components/nav'

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Gallery />
      <Contact />
    </>
  )
}
