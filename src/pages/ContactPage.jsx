import Contact from '../components/contact/Contact'
import PageHeader from '../components/pageHeader/PageHeader'
import { PAGE_HEADERS } from '../till/PageHeader'

export default function ContactPage() {
  return (
    <>
      <PageHeader {...PAGE_HEADERS.contact} />
      <Contact />
    </>
  )
}
