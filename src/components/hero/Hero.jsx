import { Link } from 'react-router-dom'
import './Hero.scss'
import { HERO } from '../../utill/Hero'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-badges">
          {HERO.badges.map((b) => (
            <span key={b} className="chip">{b}</span>
          ))}
        </div>
        <h1 className="hero-name">
          {HERO.name}<span className="cursor">{HERO.cursor}</span>
        </h1>
        <p className="hero-role">{HERO.role}</p>
        <p className="hero-desc">
          {HERO.desc.map((line, i) => (
            <span key={i}>
              {line}
              {i < HERO.desc.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="hero-cta">
          {HERO.cta.map((c) => (
            <Link key={c.to} to={c.to} className={`btn btn-${c.variant}`}>
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
