import './Project.css'
import { usePortfolio } from '../../store/PortfolioContext'

export default function Project() {
  const { data } = usePortfolio()
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">주요 프로젝트</h2>
        <div className="projects-grid">
          {data.projects.map((p) => (
            <a
              key={p.id}
              href={p.link || undefined}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noopener noreferrer' : undefined}
              className={`card project-card ${p.link ? '' : 'is-disabled'}`}
              aria-disabled={!p.link}
            >
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
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {!p.link && <span className="project-soon">링크 준비중</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
