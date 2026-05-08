import { useRef } from 'react'
import { usePortfolio } from '../../store/PortfolioContext'
import { THUMB_MAX_BYTES as MAX_BYTES } from '../../till/Admin'

export default function AdminAbout() {
  const { data, patchSection } = usePortfolio()
  const fileRef = useRef(null)
  const photo = data.about?.photo || ''

  const onPickFile = (file) => {
    if (!file) return
    if (file.size > MAX_BYTES) {
      alert(`이미지가 너무 큽니다 (${(file.size / 1024).toFixed(0)}KB). 1.5MB 이하 권장.`)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      try {
        patchSection('about', { photo: reader.result })
      } catch {
        alert('저장 실패: localStorage 용량 초과 가능성. 작은 이미지로 시도.')
      }
    }
    reader.readAsDataURL(file)
  }

  const setUrl = (url) => patchSection('about', { photo: url })
  const clearPhoto = () => patchSection('about', { photo: '' })

  return (
    <div className="admin-list">
      <div className="card admin-item">
        <h4 style={{ fontSize: 14, marginBottom: 12 }}>프로필 사진</h4>
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
              placeholder="또는 외부 URL 입력"
              onChange={(e) => setUrl(e.target.value)}
            />
            {photo && (
              <button type="button" className="admin-btn-danger" onClick={clearPhoto}>
                사진 제거
              </button>
            )}
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              세로 비율 3:4 권장. 1.5MB 이하 이미지 사용 시 안정적.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
