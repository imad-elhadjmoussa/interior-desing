import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { FAQ } from '../components/sections/FAQ'
import { Hero } from '../components/sections/Hero'
import { Process } from '../components/sections/Process'
import { Projects } from '../components/sections/Projects'
import { Services } from '../components/sections/Services'

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <FAQ />
      <Contact />
    </main>
  )
}
