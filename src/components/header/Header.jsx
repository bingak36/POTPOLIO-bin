import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

const NAV = [
  { to: '/', label: '홈', end: true },
  { to: '/about', label: '소개' },
  { to: '/skills', label: '스킬' },
  { to: '/projects', label: '프로젝트' },
  { to: '/contact', label: '연락처' },
]

const ADMIN_KEYWORD = 'admin'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const bufferRef = useRef('')

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    let timer
    const onKey = (e) => {
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return
      if (e.key.length !== 1) return

      bufferRef.current = (bufferRef.current + e.key).toLowerCase().slice(-ADMIN_KEYWORD.length)
      clearTimeout(timer)
      timer = setTimeout(() => { bufferRef.current = '' }, 1500)

      if (bufferRef.current === ADMIN_KEYWORD) {
        bufferRef.current = ''
        navigate('/admin')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(timer)
    }
  }, [navigate])

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo" end>
          <span className="logo-dot" />
          Portfolio
        </NavLink>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        {open && (
          <div className="nav-backdrop" onClick={() => setOpen(false)} />
        )}
      </div>
    </header>
  )
}
