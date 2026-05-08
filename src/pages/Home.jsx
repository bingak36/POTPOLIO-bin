import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Project from '../components/project/Project'
import SubProjects from '../components/subProjects/SubProjects'
import Contact from '../components/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <SubProjects />
      <Contact />
    </>
  )
}
