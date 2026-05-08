import './SubProjects.scss'
import { usePortfolio } from '../../store/PortfolioContext'
import { SUB_PROJECTS_HEADER, SUB_PROJECT_LINK_PLACEHOLDER } from '../../till/SubProjects'

export default function SubProjects() {
  const { data } = usePortfolio()
  return (
    <section className="section sub-projects">
      <div className="container">
        <h3 className="sub-projects-title">{SUB_PROJECTS_HEADER.title}</h3>
        <p className="sub-projects-desc">{SUB_PROJECTS_HEADER.desc}</p>
        <div className="sub-projects-grid">
          {data.subProjects.map((p) => (
            <a
              key={p.id}
              href={p.link || undefined}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noopener noreferrer' : undefined}
              className={`card sub-project-item ${p.link ? '' : 'is-disabled'}`}
              aria-disabled={!p.link}
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
              {!p.link && <span className="sub-project-soon">{SUB_PROJECT_LINK_PLACEHOLDER}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
