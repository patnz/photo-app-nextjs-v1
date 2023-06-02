import { Contact } from './landing-page/contact'
import { Festival } from './landing-page/festivals'
import { Gigs } from './landing-page/gigs'
import { Main } from './landing-page/main'
import { Nav } from './landing-page/nav'
import { Travel } from './landing-page/travel'

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
