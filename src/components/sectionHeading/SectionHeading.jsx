import { getSectionEyebrow } from '../../till/Sections'
import './SectionHeading.scss'

export default function SectionHeading({
  as: Tag = 'h2',
  heading,
  title,
  children,
  desc,
  className = '',
}) {
  const eyebrow = heading ? getSectionEyebrow(heading) : ''

  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}
      <Tag className="section-heading-title">{children ?? title ?? heading?.title}</Tag>
      {desc && <p className="section-heading-desc">{desc}</p>}
    </div>
  )
}
