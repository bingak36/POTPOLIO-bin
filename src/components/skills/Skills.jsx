import './Skills.scss'
import { DEFAULT_SKILLS } from '../../utill/Skills'
import SectionHeading from '../sectionHeading/SectionHeading'
import { SECTION_HEADINGS } from '../../utill/Sections'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading heading={SECTION_HEADINGS.skills} />
        <div className="skills-grid">
          {DEFAULT_SKILLS.map((s) => (
            <div key={s.id} className="card skill-card">
              <div className="skill-head">
                <span className="skill-icon">{s.icon}</span>
                <h3>{s.title}</h3>
              </div>
              {s.desc && <p className="skill-desc">{s.desc}</p>}
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
