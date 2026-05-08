import Project from '../components/project/Project'
import SubProjects from '../components/subProjects/SubProjects'
import PageHeader from '../components/pageHeader/PageHeader'

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="프로젝트" subtitle="만들어온 결과물 모음" />
      <Project />
      <SubProjects />
    </>
  )
}
