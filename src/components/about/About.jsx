import './About.scss'
import { ABOUT } from '../../till/About'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="about-title">
          {ABOUT.title.prefix}
          <span className="accent">{ABOUT.title.name}</span>
          {ABOUT.title.suffix}
        </h2>

        <div className="about-grid">
          <div className="about-photo card">
            <div className="photo-placeholder" aria-hidden="true">
              <svg viewBox="0 0 100 100" width="60%">
                <circle cx="50" cy="38" r="18" fill="#2a386a" />
                <path d="M20 92 C20 70, 80 70, 80 92 Z" fill="#2a386a" />
              </svg>
            </div>
          </div>

          <div className="about-content">
            <div className="card about-greeting">
              <h3>{ABOUT.greeting.headline}</h3>
              <p>{ABOUT.greeting.body}</p>
            </div>

            <div className="about-meta">
              {ABOUT.meta.map((m) => (
                <div key={m.label} className="card meta-item">
                  <span className="meta-label">{m.label}</span>
                  <span className="meta-value">{m.value}</span>
                  <span className="meta-sub">{m.sub}</span>
                </div>
              ))}
            </div>

            <div className="card about-detail">
              <h4>{ABOUT.detail.title}</h4>
              <ul>
                {ABOUT.detail.items.map((it) => (
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
