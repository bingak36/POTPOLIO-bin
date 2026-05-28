import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { NAV } from '../../utill/Header'

const THEME_KEY = 'portfolio-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

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
