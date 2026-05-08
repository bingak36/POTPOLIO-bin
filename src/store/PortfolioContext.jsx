import { createContext, useContext, useEffect, useState } from 'react'

const KEY = 'portfolio-data-v1'

const DEFAULT_DATA = {
  skills: [
    { id: 's1', icon: '⚡', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vite'] },
    { id: 's2', icon: '🛠', title: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'] },
    { id: 's3', icon: '🗄', title: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { id: 's4', icon: '🎨', title: 'Design & Tools', items: ['Figma', 'Photoshop', 'Notion'] },
    { id: 's5', icon: '☁', title: 'DevOps', items: ['AWS', 'Docker', 'GitHub Actions'] },
    { id: 's6', icon: '🤝', title: 'Etc.', items: ['Git', 'Linux', 'Agile'] },
  ],
  projects: [
    { id: 'p1', title: 'TOCOCO CLONE', desc: '실시간 음성 채팅 플랫폼 클론. WebRTC 기반 룸 시스템 구현.', tags: ['React', 'WebRTC', 'Node.js'], gradient: 'linear-gradient(135deg, #4a5fc1, #6b3f8c)', link: '', thumbnail: '' },
    { id: 'p2', title: 'snowPage Template', desc: '눈 내리는 효과의 랜딩 페이지 템플릿. 배포 자동화 포함.', tags: ['Next.js', 'Three.js', 'Vercel'], gradient: 'linear-gradient(135deg, #6c8cff, #b5c7ff)', link: '', thumbnail: '' },
    { id: 'p3', title: 'CARSHOP', desc: '중고차 거래 플랫폼. 검색/필터/결제 통합 시스템.', tags: ['React', 'Express', 'MongoDB'], gradient: 'linear-gradient(135deg, #c14a4a, #6b1d1d)', link: '', thumbnail: '' },
    { id: 'p4', title: 'Picstory', desc: 'AI 기반 사진 스토리 자동 생성 서비스.', tags: ['Next.js', 'OpenAI', 'PostgreSQL'], gradient: 'linear-gradient(135deg, #8d6bff, #c14a8c)', link: '', thumbnail: '' },
    { id: 'p5', title: 'OpenChat', desc: '오픈채팅 시스템 + 알림 인프라 구축 사이드 프로젝트.', tags: ['Vue', 'Socket.io', 'Redis'], gradient: 'linear-gradient(135deg, #c14a4a, #4a1d1d)', link: '', thumbnail: '' },
    { id: 'p6', title: 'PORTFOLIO', desc: '본 포트폴리오 사이트. React + Vite로 구축.', tags: ['React', 'Vite', 'CSS'], gradient: 'linear-gradient(135deg, #14204a, #2a386a)', link: '', thumbnail: '' },
  ],
  subProjects: [
    { id: 'sp1', icon: '📦', title: 'CLI 패키지', desc: '사내 빌드 자동화 도구', tags: ['Node', 'Bun'], link: '' },
    { id: 'sp2', icon: '🧩', title: '크롬 확장', desc: '북마크 정리 익스텐션', tags: ['JS', 'Chrome API'], link: '' },
    { id: 'sp3', icon: '🤖', title: '디스코드 봇', desc: '서버 통계 봇', tags: ['Python', 'discord.py'], link: '' },
    { id: 'sp4', icon: '🎮', title: '미니 게임', desc: '캔버스 기반 슈팅 게임', tags: ['Canvas', 'TS'], link: '' },
    { id: 'sp5', icon: '📊', title: '대시보드', desc: '주식 포트폴리오 추적기', tags: ['React', 'Recharts'], link: '' },
    { id: 'sp6', icon: '🔔', title: '알림 서비스', desc: '가격 변동 푸시 알림', tags: ['FastAPI', 'Webhook'], link: '' },
    { id: 'sp7', icon: '📝', title: '메모 앱', desc: '마크다운 노트 PWA', tags: ['Vite', 'IndexedDB'], link: '' },
    { id: 'sp8', icon: '🌐', title: '랜딩 템플릿', desc: '오픈소스 랜딩 페이지', tags: ['Astro', 'Tailwind'], link: '' },
  ],
}

const PortfolioContext = createContext(null)

function loadInitial() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return DEFAULT_DATA
    const parsed = JSON.parse(raw)
    const migrateProject = (x) => ({ link: '', thumbnail: '', ...x })
    const migrateSub = (x) => ({ link: '', ...x })
    return {
      skills: parsed.skills ?? DEFAULT_DATA.skills,
      projects: (parsed.projects ?? DEFAULT_DATA.projects).map(migrateProject),
      subProjects: (parsed.subProjects ?? DEFAULT_DATA.subProjects).map(migrateSub),
    }
  } catch {
    return DEFAULT_DATA
  }
}

const uid = () => Math.random().toString(36).slice(2, 9)

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(loadInitial)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data))
  }, [data])

  const upsert = (key, item) => {
    setData((prev) => {
      const list = prev[key]
      const exists = list.some((x) => x.id === item.id)
      const next = exists
        ? list.map((x) => (x.id === item.id ? item : x))
        : [...list, { ...item, id: item.id || uid() }]
      return { ...prev, [key]: next }
    })
  }

  const remove = (key, id) => {
    setData((prev) => ({ ...prev, [key]: prev[key].filter((x) => x.id !== id) }))
  }

  const reset = () => setData(DEFAULT_DATA)

  return (
    <PortfolioContext.Provider value={{ data, upsert, remove, reset, uid }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be inside PortfolioProvider')
  return ctx
}
