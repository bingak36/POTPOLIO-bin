import './Skills.css'
import { usePortfolio } from '../../store/PortfolioContext'

export default function Skills() {
  const { data } = usePortfolio()
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-grid">
          {data.skills.map((s) => (
            <div key={s.id} className="card skill-card">
              <div className="skill-head">
                <span className="skill-icon">{s.icon}</span>
                <h3>{s.title}</h3>
              </div>
              <div className="skill-items">
                {s.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
