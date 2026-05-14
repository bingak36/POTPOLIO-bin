import './Project.scss'
import { usePortfolio } from '../../store/PortfolioContext'
import { PROJECTS_TITLE } from '../../till/Project'

export default function Project() {
  const { data } = usePortfolio()
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">{PROJECTS_TITLE}</h2>
        <div className="projects-grid">
          {data.projects.map((p) => (
            <article key={p.id} className="card project-card">
              <div
                className="project-thumb"
                style={p.thumbnail ? undefined : { background: p.gradient }}
              >
                {p.thumbnail && (
                  <img className="project-thumb-img" src={p.thumbnail} alt={p.title} />
                )}
                <span className="project-thumb-label">{p.title}</span>
              </div>
              <div className="project-body">
                <span className="project-category">{p.category || '개인 프로젝트'}</span>
                <h3>{p.title}</h3>
                <div className="project-actions">
                  {(p.actions || ['GitHub', 'Demo']).map((action) => (
                    <span key={action} className="project-action">{action}</span>
                  ))}
                </div>
                <p>{p.desc}</p>
                {p.highlights?.length > 0 && (
                  <ul className="project-highlights">
                    {p.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
