import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-badges">
          <span className="chip">소프트웨어 엔지니어</span>
          <span className="chip">서울 거주</span>
        </div>
        <h1 className="hero-name">
          송현빈<span className="cursor">_</span>
        </h1>
        <p className="hero-role">Fullstack Developer</p>
        <p className="hero-desc">
          사용자 경험을 중심으로 웹과 모바일을 만드는 개발자입니다.<br />
          작은 디테일까지 신경쓰는 코드를 지향합니다.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn btn-primary">프로젝트 보기</Link>
          <Link to="/contact" className="btn btn-ghost">연락하기</Link>
        </div>
      </div>
    </section>
  )
}
