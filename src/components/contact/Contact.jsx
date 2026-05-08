import { useState } from 'react'
import './Contact.css'

const INFO = [
  { icon: '📧', label: '이메일', value: 'qlsl9042@gmail.com' },
  { icon: '📱', label: '전화', value: '010-0000-0000' },
  { icon: '📍', label: '위치', value: '대한민국 서울' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/bingak' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">함께 만들어봐요</h2>
        <p className="contact-sub">
          새로운 협업 제안이나 문의는 언제든 환영입니다 ✉
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            {INFO.map((i) => (
              <div key={i.label} className="card info-item">
                <span className="info-icon">{i.icon}</span>
                <div>
                  <span className="info-label">{i.label}</span>
                  <span className="info-value">{i.value}</span>
                </div>
              </div>
            ))}
          </div>

          <form className="card contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                <span>이름</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="홍길동"
                  required
                />
              </label>
              <label>
                <span>이메일</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="form-row-full">
              <span>메시지</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="협업 제안, 프로젝트 문의 등 자유롭게 작성해주세요."
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              {sent ? '전송됨!' : '메시지 보내기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
