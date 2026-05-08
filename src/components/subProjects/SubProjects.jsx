import './SubProjects.css'
import { usePortfolio } from '../../store/PortfolioContext'

export default function SubProjects() {
  const { data } = usePortfolio()
  return (
    <section className="section sub-projects">
      <div className="container">
        <h3 className="sub-projects-title">서브 프로젝트</h3>
        <p className="sub-projects-desc">
          짬짬이 만든 사이드 프로젝트와 토이 프로젝트 모음
        </p>
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
              {!p.link && <span className="sub-project-soon">링크 준비중</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
