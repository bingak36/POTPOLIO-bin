import About from '../components/about/About'
import PageHeader from '../components/pageHeader/PageHeader'
import { PAGE_HEADERS } from '../till/PageHeader'

export default function AboutPage() {
  return (
    <>
      <PageHeader {...PAGE_HEADERS.about} />
      <About />
    </>
  )
}
