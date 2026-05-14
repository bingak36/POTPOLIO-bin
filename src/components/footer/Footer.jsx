import { Link } from 'react-router-dom'
import './Footer.scss'
import { FOOTER } from '../../till/Footer'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {FOOTER.owner}. Built with React.</span>
        <div className="footer-links">
          {FOOTER.links.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
