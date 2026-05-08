import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1>404</h1>
        <p>찾으시는 페이지가 없습니다.</p>
        <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
      </div>
    </section>
  )
}
