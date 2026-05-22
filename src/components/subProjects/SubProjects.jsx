import './SubProjects.scss'
import { usePortfolio } from '../../store/usePortfolio'
import SectionHeading from '../sectionHeading/SectionHeading'
import { SECTION_HEADINGS } from '../../utill/Sections'

export default function SubProjects() {
  const { data } = usePortfolio()
  return (
    <section className="section sub-projects">
      <div className="container">
        <SectionHeading as="h3" heading={SECTION_HEADINGS.subProjects} />
        <div className="sub-projects-grid">
          {data.subProjects.map((p) => (
            <article key={p.id} className="card sub-project-item">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
