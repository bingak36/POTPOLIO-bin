import About from '../components/about/About'
import PageHeader from '../components/pageHeader/PageHeader'

export default function AboutPage() {
  return (
    <>
      <PageHeader title="소개" subtitle="제가 어떤 사람인지 알려드릴게요" />
      <About />
    </>
  )
}
