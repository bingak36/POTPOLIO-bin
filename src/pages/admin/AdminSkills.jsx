import { usePortfolio } from '../../store/PortfolioContext'

export default function AdminSkills() {
  const { data, upsert, remove, uid } = usePortfolio()

  const updateField = (item, field, value) => {
    upsert('skills', { ...item, [field]: value })
  }

  const updateItems = (item, value) => {
    const items = value.split(',').map((s) => s.trim()).filter(Boolean)
    upsert('skills', { ...item, items })
  }

  const add = () => {
    upsert('skills', { id: uid(), icon: '✨', title: '새 카테고리', items: [] })
  }

  return (
    <>
      <button className="admin-btn-add" onClick={add}>+ 카테고리 추가</button>
      <div className="admin-list">
        {data.skills.map((s) => (
          <div key={s.id} className="card admin-item">
            <div className="admin-row">
              <label className="admin-label">
                <span>아이콘</span>
                <input
                  className="admin-input"
                  value={s.icon}
                  onChange={(e) => updateField(s, 'icon', e.target.value)}
                />
              </label>
              <label className="admin-label">
                <span>타이틀</span>
                <input
                  className="admin-input"
                  value={s.title}
                  onChange={(e) => updateField(s, 'title', e.target.value)}
                />
              </label>
              <label className="admin-label">
                <span>항목 (쉼표로 구분)</span>
                <input
                  className="admin-input"
                  value={s.items.join(', ')}
                  onChange={(e) => updateItems(s, e.target.value)}
                />
              </label>
            </div>
            <div className="admin-item-actions">
              <button className="admin-btn-danger" onClick={() => remove('skills', s.id)}>
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
