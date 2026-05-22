import About from '../components/about/About'
import PageHeader from '../components/pageHeader/PageHeader'
import { PAGE_HEADERS } from '../utill/PageHeader'

export default function AboutPage() {
  return (
    <>
      <PageHeader {...PAGE_HEADERS.about} />
      <About />
    </>
  )
}
