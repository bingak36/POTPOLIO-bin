import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePortfolio } from '../../store/PortfolioContext'
import AdminAbout from './AdminAbout'
import AdminSkills from './AdminSkills'
import AdminProjects from './AdminProjects'
import AdminSubProjects from './AdminSubProjects'
import { ADMIN_TABS, ADMIN_COPY } from '../../till/Admin'
import './AdminPage.scss'

export default function AdminPage() {
  const [tab, setTab] = useState(ADMIN_TABS[0].id)
  const { reset } = usePortfolio()
  const navigate = useNavigate()

  const onExit = () => navigate('/')

  const onReset = () => {
    if (confirm(ADMIN_COPY.resetConfirm)) reset()
  }

  return (
    <section className="section admin">
      <div className="container">
        <div className="admin-head">
          <div>
            <h1>{ADMIN_COPY.title}</h1>
            <p>{ADMIN_COPY.desc}</p>
          </div>
          <div className="admin-actions">
            <button className="btn btn-ghost" onClick={onReset}>초기화</button>
            <button className="btn btn-ghost" onClick={onExit}>나가기</button>
          </div>
        </div>

        <div className="admin-tabs">
          {ADMIN_TABS.map((t) => (
            <button
              key={t.id}
              className={`admin-tab ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="admin-content">
          {tab === 'about' && <AdminAbout />}
          {tab === 'skills' && <AdminSkills />}
          {tab === 'projects' && <AdminProjects />}
          {tab === 'subProjects' && <AdminSubProjects />}
        </div>
      </div>
    </section>
  )
}
