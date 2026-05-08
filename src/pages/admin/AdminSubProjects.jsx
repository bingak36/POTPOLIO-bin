import { usePortfolio } from '../../store/PortfolioContext'

export default function AdminSubProjects() {
  const { data, upsert, remove, uid } = usePortfolio()

  const updateField = (item, field, value) => {
    upsert('subProjects', { ...item, [field]: value })
  }

  const updateTags = (item, value) => {
    const tags = value.split(',').map((s) => s.trim()).filter(Boolean)
    upsert('subProjects', { ...item, tags })
  }

  const add = () => {
    upsert('subProjects', {
      id: uid(),
      icon: '✨',
      title: '새 서브 프로젝트',
      desc: '설명을 입력하세요',
      tags: [],
      link: '',
    })
  }

  return (
    <>
      <button className="admin-btn-add" onClick={add}>+ 서브 프로젝트 추가</button>
      <div className="admin-list">
        {data.subProjects.map((s) => (
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
                <span>제목</span>
                <input
                  className="admin-input"
                  value={s.title}
                  onChange={(e) => updateField(s, 'title', e.target.value)}
                />
              </label>
              <label className="admin-label">
                <span>태그 (쉼표로 구분)</span>
                <input
                  className="admin-input"
                  value={s.tags.join(', ')}
                  onChange={(e) => updateTags(s, e.target.value)}
                />
              </label>
            </div>
            <div className="admin-row-full">
              <label className="admin-label">
                <span>설명</span>
                <textarea
                  className="admin-textarea"
                  value={s.desc}
                  onChange={(e) => updateField(s, 'desc', e.target.value)}
                />
              </label>
              <label className="admin-label">
                <span>링크 URL (비우면 비활성)</span>
                <input
                  className="admin-input"
                  value={s.link || ''}
                  placeholder="https://..."
                  onChange={(e) => updateField(s, 'link', e.target.value)}
                />
              </label>
            </div>
            <div className="admin-item-actions">
              <button className="admin-btn-danger" onClick={() => remove('subProjects', s.id)}>
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
