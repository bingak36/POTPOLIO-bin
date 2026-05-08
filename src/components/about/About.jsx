import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="about-title">
          저는 <span className="accent">송현빈</span>입니다
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
              <h3>안녕하세요, 풀스택 개발자 송현빈입니다</h3>
              <p>
                새로운 기술을 배우고 적용하는 것을 즐기며,
                팀과의 협업에서 시너지를 만들어내는 개발자입니다.
              </p>
            </div>

            <div className="about-meta">
              <div className="card meta-item">
                <span className="meta-label">학력</span>
                <span className="meta-value">○○대학교 컴퓨터공학과</span>
                <span className="meta-sub">2022.03 – 재학중</span>
              </div>
              <div className="card meta-item">
                <span className="meta-label">이메일</span>
                <span className="meta-value">qlsl9042@gmail.com</span>
                <span className="meta-sub">언제든 연락주세요</span>
              </div>
            </div>

            <div className="card about-detail">
              <h4>관심 분야</h4>
              <ul>
                <li>· 웹 프론트엔드 / 백엔드 풀스택 개발</li>
                <li>· 사용자 경험을 고려한 UI/UX 디자인</li>
                <li>· 클라우드 인프라와 DevOps 자동화</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
