import { useRef } from 'react'
import { usePortfolio } from '../../store/PortfolioContext'
import { THUMB_MAX_BYTES as MAX_BYTES } from '../../till/Admin'
import { ABOUT_DEFAULTS } from '../../till/About'

export default function AdminAbout() {
  const { data, patchSection } = usePortfolio()
  const fileRef = useRef(null)
  const about = { ...ABOUT_DEFAULTS, ...(data.about ?? {}) }
  const photo = about.photo || ''

  const patchAbout = (patch) => patchSection('about', patch)

  const updateTitle = (field, value) => {
    patchAbout({ title: { ...about.title, [field]: value } })
  }

  const updateGreeting = (field, value) => {
    patchAbout({ greeting: { ...about.greeting, [field]: value } })
  }

  const updateMeta = (index, field, value) => {
    const meta = about.meta.map((item, i) => (
      i === index ? { ...item, [field]: value } : item
    ))
    patchAbout({ meta })
  }

  const updateEducationTitle = (value) => {
    patchAbout({ detail: { ...about.detail, title: value } })
  }

  const updateEducationItems = (value) => {
    const items = value.split('\n').map((item) => item.trim()).filter(Boolean)
    patchAbout({ detail: { ...about.detail, items } })
  }

  const onPickFile = (file) => {
    if (!file) return
    if (file.size > MAX_BYTES) {
      alert(`이미지가 너무 큽니다. ${(file.size / 1024).toFixed(0)}KB / 권장 1.5MB 이하`)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      try {
        patchAbout({ photo: reader.result })
      } catch {
        alert('저장 실패: localStorage 용량을 초과했을 수 있습니다.')
      }
    }
    reader.readAsDataURL(file)
  }

  const setUrl = (url) => patchAbout({ photo: url })
  const clearPhoto = () => patchAbout({ photo: '' })

  return (
    <div className="admin-list">
      <div className="card admin-item">
        <h4 className="admin-section-title">소개 제목</h4>
        <div className="admin-row">
          <label className="admin-label">
            <span>앞 문구</span>
            <input
              className="admin-input"
              value={about.title.prefix}
              onChange={(e) => updateTitle('prefix', e.target.value)}
            />
          </label>
          <label className="admin-label">
            <span>강조 문구</span>
            <input
              className="admin-input"
              value={about.title.name}
              onChange={(e) => updateTitle('name', e.target.value)}
            />
          </label>
          <label className="admin-label">
            <span>뒤 문구</span>
            <input
              className="admin-input"
              value={about.title.suffix}
              onChange={(e) => updateTitle('suffix', e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="card admin-item">
        <h4 className="admin-section-title">인사말</h4>
        <div className="admin-row-full">
          <label className="admin-label">
            <span>헤드라인</span>
            <input
              className="admin-input"
              value={about.greeting.headline}
              onChange={(e) => updateGreeting('headline', e.target.value)}
            />
          </label>
          <label className="admin-label">
            <span>본문</span>
            <textarea
              className="admin-textarea"
              value={about.greeting.body}
              onChange={(e) => updateGreeting('body', e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="card admin-item">
        <h4 className="admin-section-title">프로필 정보</h4>
        {about.meta.map((item, index) => (
          <div className="admin-row" key={`${item.label}-${index}`}>
            <label className="admin-label">
              <span>라벨</span>
              <input
                className="admin-input"
                value={item.label}
                onChange={(e) => updateMeta(index, 'label', e.target.value)}
              />
            </label>
            <label className="admin-label">
              <span>내용</span>
              <input
                className="admin-input"
                value={item.value}
                onChange={(e) => updateMeta(index, 'value', e.target.value)}
              />
            </label>
            <label className="admin-label">
              <span>보조 문구</span>
              <input
                className="admin-input"
                value={item.sub}
                onChange={(e) => updateMeta(index, 'sub', e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>

      <div className="card admin-item">
        <h4 className="admin-section-title">EDUCATION</h4>
        <div className="admin-row-full">
          <label className="admin-label">
            <span>제목</span>
            <input
              className="admin-input"
              value={about.detail.title}
              onChange={(e) => updateEducationTitle(e.target.value)}
            />
          </label>
          <label className="admin-label">
            <span>내용 (한 줄에 하나씩)</span>
            <textarea
              className="admin-textarea"
              rows="6"
              value={about.detail.items.join('\n')}
              onChange={(e) => updateEducationItems(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="card admin-item">
        <h4 className="admin-section-title">프로필 사진</h4>
        <div className="admin-thumb-row" style={{ gridTemplateColumns: '180px 1fr' }}>
          <div
            className="admin-thumb-preview"
            style={{ aspectRatio: '3 / 4', background: photo ? '#000' : 'var(--bg-2)' }}
          >
            {photo ? <img src={photo} alt="" /> : <span>사진 없음</span>}
          </div>
          <div className="admin-thumb-controls">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                onPickFile(e.target.files?.[0])
                e.target.value = ''
              }}
            />
            <button
              type="button"
              className="admin-btn-add"
              style={{ marginBottom: 0 }}
              onClick={() => fileRef.current?.click()}
            >
              {photo ? '사진 교체' : '사진 업로드'}
            </button>
            <input
              className="admin-input"
              value={photo.startsWith('data:') ? '' : photo}
              placeholder="또는 이미지 URL 입력"
              onChange={(e) => setUrl(e.target.value)}
            />
            {photo && (
              <button type="button" className="admin-btn-danger" onClick={clearPhoto}>
                사진 제거
              </button>
            )}
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              세로 비율 3:4 권장. 1.5MB 이하 이미지를 사용하면 안정적입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
