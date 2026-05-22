import { useRef } from 'react'
import { usePortfolio } from '../../store/usePortfolio'
import { THUMB_MAX_BYTES as MAX_BYTES } from '../../utill/Admin'

export default function AdminProjects() {
  const { data, upsert, remove, uid } = usePortfolio()

  const updateField = (item, field, value) => {
    upsert('projects', { ...item, [field]: value })
  }

  const updateTags = (item, value) => {
    const tags = value.split(',').map((s) => s.trim()).filter(Boolean)
    upsert('projects', { ...item, tags })
  }

  const onPickFile = (item, file) => {
    if (!file) return
    if (file.size > MAX_BYTES) {
      alert(`이미지가 너무 큽니다 (${(file.size / 1024).toFixed(0)}KB). 1.5MB 이하 권장.`)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      try {
        upsert('projects', { ...item, thumbnail: reader.result })
      } catch {
        alert('저장 실패: localStorage 용량 초과 가능성. 작은 이미지로 시도.')
      }
    }
    reader.readAsDataURL(file)
  }

  const clearThumb = (item) => {
    upsert('projects', { ...item, thumbnail: '' })
  }

  const add = () => {
    upsert('projects', {
      id: uid(),
      title: '새 프로젝트',
      desc: '설명을 입력하세요',
      tags: [],
      gradient: 'linear-gradient(135deg, #14204a, #2a386a)',
      link: '',
      thumbnail: '',
    })
  }

  return (
    <>
      <button className="admin-btn-add" onClick={add}>+ 프로젝트 추가</button>
      <div className="admin-list">
        {data.projects.map((p) => (
          <ProjectRow
            key={p.id}
            p={p}
            onUpdateField={updateField}
            onUpdateTags={updateTags}
            onPickFile={onPickFile}
            onClearThumb={clearThumb}
            onRemove={() => remove('projects', p.id)}
          />
        ))}
      </div>
    </>
  )
}

function ProjectRow({ p, onUpdateField, onUpdateTags, onPickFile, onClearThumb, onRemove }) {
  const fileRef = useRef(null)

  return (
    <div className="card admin-item">
      <div className="admin-row">
        <label className="admin-label" style={{ gridColumn: 'span 1' }}>
          <span>제목</span>
          <input
            className="admin-input"
            value={p.title}
            onChange={(e) => onUpdateField(p, 'title', e.target.value)}
          />
        </label>
        <label className="admin-label" style={{ gridColumn: 'span 2' }}>
          <span>태그 (쉼표로 구분)</span>
          <input
            className="admin-input"
            value={p.tags.join(', ')}
            onChange={(e) => onUpdateTags(p, e.target.value)}
          />
        </label>
      </div>
      <div className="admin-row-full">
        <label className="admin-label">
          <span>설명</span>
          <textarea
            className="admin-textarea"
            value={p.desc}
            onChange={(e) => onUpdateField(p, 'desc', e.target.value)}
          />
        </label>
        <label className="admin-label">
          <span>링크 URL (비우면 비활성)</span>
          <input
            className="admin-input"
            value={p.link || ''}
            placeholder="https://..."
            onChange={(e) => onUpdateField(p, 'link', e.target.value)}
          />
        </label>

        <div className="admin-thumb-row">
          <div className="admin-thumb-preview" style={{ background: p.thumbnail ? '#000' : p.gradient }}>
            {p.thumbnail
              ? <img src={p.thumbnail} alt="" />
              : <span>썸네일 없음</span>}
          </div>
          <div className="admin-thumb-controls">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                onPickFile(p, e.target.files?.[0])
                e.target.value = ''
              }}
            />
            <button
              type="button"
              className="admin-btn-add"
              style={{ marginBottom: 0 }}
              onClick={() => fileRef.current?.click()}
            >
              {p.thumbnail ? '이미지 교체' : '이미지 업로드'}
            </button>
            <input
              className="admin-input"
              value={p.thumbnail?.startsWith('data:') ? '' : (p.thumbnail || '')}
              placeholder="또는 외부 URL 입력"
              onChange={(e) => onUpdateField(p, 'thumbnail', e.target.value)}
            />
            {p.thumbnail && (
              <button type="button" className="admin-btn-danger" onClick={() => onClearThumb(p)}>
                썸네일 제거
              </button>
            )}
          </div>
        </div>

        <label className="admin-label">
          <span>그라디언트 (썸네일 없을 때 표시)</span>
          <input
            className="admin-input"
            value={p.gradient}
            onChange={(e) => onUpdateField(p, 'gradient', e.target.value)}
          />
        </label>
      </div>
      <div className="admin-item-actions">
        <button className="admin-btn-danger" onClick={onRemove}>삭제</button>
      </div>
    </div>
  )
}
