import './About.scss'
import { ABOUT_DEFAULTS } from '../../utill/About'
import { usePortfolio } from '../../store/usePortfolio'
import SectionHeading from '../sectionHeading/SectionHeading'
import { SECTION_HEADINGS } from '../../utill/Sections'

export default function About() {
  const { data } = usePortfolio()
  const about = { ...ABOUT_DEFAULTS, ...(data.about ?? {}) }
  const photo = about.photo

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading heading={SECTION_HEADINGS.about} className="about-heading">
          {about.title.prefix}
          <span className="accent">{about.title.name}</span>
          {about.title.suffix}
        </SectionHeading>

        <div className="about-grid">
          <div className="about-photo card">
            {photo ? (
              <img className="about-photo-img" src={photo} alt={about.title.name} />
            ) : (
              <div className="photo-placeholder" aria-hidden="true">
                <svg viewBox="0 0 100 100" width="60%">
                  <circle cx="50" cy="38" r="18" fill="#2a386a" />
                  <path d="M20 92 C20 70, 80 70, 80 92 Z" fill="#2a386a" />
                </svg>
              </div>
            )}
          </div>

          <div className="about-content">
            <div className="card about-greeting">
              <h3>{about.greeting.headline}</h3>
              <p>{about.greeting.body}</p>
            </div>

            <div className="about-meta">
              {about.meta.map((m) => (
                <div key={m.label} className="card meta-item">
                  <span className="meta-label">{m.label}</span>
                  <span className="meta-value">{m.value}</span>
                  <span className="meta-sub">{m.sub}</span>
                </div>
              ))}
            </div>

            <div className="card about-detail">
              <h4>{about.detail.title}</h4>
              <ul>
                {about.detail.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
