import './SubProjects.scss'
import { DEFAULT_SUB_PROJECTS } from '../../utill/SubProjects'
import SectionHeading from '../sectionHeading/SectionHeading'
import { SECTION_HEADINGS } from '../../utill/Sections'

export default function SubProjects() {
  return (
    <section className="section sub-projects">
      <div className="container">
        <SectionHeading as="h3" heading={SECTION_HEADINGS.subProjects} />
        <div className="sub-projects-grid">
          {DEFAULT_SUB_PROJECTS.map((p) => {
            const Tag = p.repo ? 'a' : 'article'
            return (
              <Tag
                key={p.id}
                className={`card sub-project-item ${p.repo ? 'is-link' : ''}`}
                href={p.repo || undefined}
                target={p.repo ? '_blank' : undefined}
                rel={p.repo ? 'noopener noreferrer' : undefined}
                aria-label={p.repo ? `${p.title} GitHub 저장소 열기` : undefined}
              >
                <div className="sub-project-head">
                  <span className="sub-project-icon">{p.icon}</span>
                  <h4>{p.title}</h4>
                </div>
                <p>{p.desc}</p>
                <div className="sub-project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
