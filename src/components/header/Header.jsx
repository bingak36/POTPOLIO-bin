import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'
import { NAV, ADMIN_KEYWORD, ADMIN_BUFFER_TIMEOUT } from '../../utill/Header'

const THEME_KEY = 'portfolio-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const navigate = useNavigate()
  const bufferRef = useRef('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

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
      timer = setTimeout(() => { bufferRef.current = '' }, ADMIN_BUFFER_TIMEOUT)

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

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)} end>
          <span className="logo-dot" />
          송.현빈
        </NavLink>

        <div className="header-right">
          <nav className={`nav ${open ? 'nav-open' : ''}`}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-tools">
            <button
              type="button"
              className="theme-toggle"
              aria-label={theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경'}
              onClick={toggleTheme}
            >
              <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            </button>

            <button
              className={`hamburger ${open ? 'is-open' : ''}`}
              aria-label="메뉴 열기"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
      </div>
    </header>
  )
}
