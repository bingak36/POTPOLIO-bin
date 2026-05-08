import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} 송현빈. All rights reserved.</span>
        <div className="footer-links">
          <Link to="/about">소개</Link>
          <Link to="/projects">프로젝트</Link>
          <Link to="/contact">연락처</Link>
        </div>
      </div>
    </footer>
  )
}
