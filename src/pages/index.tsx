import { Contact } from './components/contact'
import { Festival } from './components/festivals'
import { Gigs } from './components/gigs'
import { Main } from './components/main'
import { Nav } from './components/nav'
import { Travel } from './components/travel'

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
