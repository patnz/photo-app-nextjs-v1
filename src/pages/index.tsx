import { Contact } from './components/landing-page/contact'
import { Festival } from './components/landing-page/festivals'
import { Gigs } from './components/landing-page/gigs'
import { Main } from './components/landing-page/main'
import { Nav } from './components/landing-page/nav'
import { Travel } from './components/landing-page/travel'

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Travel />
      <Festival />
      <Gigs />
      <Contact />
    </>
  )
}
