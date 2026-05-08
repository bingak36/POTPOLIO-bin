import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePortfolio } from '../../store/PortfolioContext'
import AdminSkills from './AdminSkills'
import AdminProjects from './AdminProjects'
import AdminSubProjects from './AdminSubProjects'
import './AdminPage.css'

const TABS = [
  { id: 'skills', label: '스킬' },
  { id: 'projects', label: '주요 프로젝트' },
  { id: 'subProjects', label: '서브 프로젝트' },
]

export default function AdminPage() {
  const [tab, setTab] = useState('skills')
  const { reset } = usePortfolio()
  const navigate = useNavigate()

  const onExit = () => navigate('/')

  const onReset = () => {
    if (confirm('모든 데이터를 기본값으로 초기화합니다. 계속하시겠습니까?')) {
      reset()
    }
  }

  return (
    <section className="section admin">
      <div className="container">
        <div className="admin-head">
          <div>
            <h1>포트폴리오 관리</h1>
            <p>섹션별 데이터를 추가/수정/삭제할 수 있습니다. 변경사항은 즉시 저장됩니다.</p>
          </div>
          <div className="admin-actions">
            <button className="btn btn-ghost" onClick={onReset}>초기화</button>
            <button className="btn btn-ghost" onClick={onExit}>나가기</button>
          </div>
        </div>

        <div className="admin-tabs">
          {TABS.map((t) => (
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
          {tab === 'skills' && <AdminSkills />}
          {tab === 'projects' && <AdminProjects />}
          {tab === 'subProjects' && <AdminSubProjects />}
        </div>
      </div>
    </section>
  )
}
