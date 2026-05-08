import Skills from '../components/skills/Skills'
import PageHeader from '../components/pageHeader/PageHeader'
import { PAGE_HEADERS } from '../till/PageHeader'

export default function SkillsPage() {
  return (
    <>
      <PageHeader {...PAGE_HEADERS.skills} />
      <Skills />
    </>
  )
}
