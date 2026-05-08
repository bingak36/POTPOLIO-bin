import Project from '../components/project/Project'
import SubProjects from '../components/subProjects/SubProjects'
import PageHeader from '../components/pageHeader/PageHeader'
import { PAGE_HEADERS } from '../till/PageHeader'

export default function ProjectsPage() {
  return (
    <>
      <PageHeader {...PAGE_HEADERS.projects} />
      <Project />
      <SubProjects />
    </>
  )
}
