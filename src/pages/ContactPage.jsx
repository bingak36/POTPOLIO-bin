import Contact from '../components/contact/Contact'
import PageHeader from '../components/pageHeader/PageHeader'

export default function ContactPage() {
  return (
    <>
      <PageHeader title="연락처" subtitle="협업 문의는 언제든 환영합니다" />
      <Contact />
    </>
  )
}
