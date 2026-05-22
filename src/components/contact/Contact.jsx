import { useState } from 'react'
import './Contact.scss'
import { CONTACT_INFO, CONTACT_COPY } from '../../utill/Contact'
import SectionHeading from '../sectionHeading/SectionHeading'
import { SECTION_HEADINGS } from '../../utill/Sections'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), CONTACT_COPY.doneTimeout)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          heading={{
            ...SECTION_HEADINGS.contact,
            title: CONTACT_COPY.title || SECTION_HEADINGS.contact.title,
          }}
          desc={CONTACT_COPY.sub || SECTION_HEADINGS.contact.desc}
        />

        <div className="contact-grid">
          <div className="contact-info">
            {CONTACT_INFO.map((i) => (
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
                  placeholder={CONTACT_COPY.placeholders.name}
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
                  placeholder={CONTACT_COPY.placeholders.email}
                  required
                />
              </label>
            </div>
            <label className="form-row-full">
              <span>제목</span>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder={CONTACT_COPY.placeholders.subject}
                required
              />
            </label>
            <label className="form-row-full">
              <span>메시지</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder={CONTACT_COPY.placeholders.message}
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              {sent ? CONTACT_COPY.submitDone : CONTACT_COPY.submitIdle}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
