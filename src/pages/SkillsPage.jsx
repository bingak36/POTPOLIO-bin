import Skills from '../components/skills/Skills'
import PageHeader from '../components/pageHeader/PageHeader'
import { PAGE_HEADERS } from '../utill/PageHeader'

export default function SkillsPage() {
  return (
    <>
      <PageHeader {...PAGE_HEADERS.skills} />
      <Skills />
    </>
  )
}
