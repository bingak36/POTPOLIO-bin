import { createContext, useContext, useEffect, useState } from 'react'
import { DEFAULT_SKILLS } from '../till/Skills'
import { DEFAULT_PROJECTS } from '../till/Project'
import { DEFAULT_SUB_PROJECTS } from '../till/SubProjects'
import { ABOUT_DEFAULTS } from '../till/About'
import { STORAGE_KEY } from '../till/Admin'

const DEFAULT_DATA = {
  about: ABOUT_DEFAULTS,
  skills: DEFAULT_SKILLS,
  projects: DEFAULT_PROJECTS,
  subProjects: DEFAULT_SUB_PROJECTS,
}

const PortfolioContext = createContext(null)

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_DATA
    const parsed = JSON.parse(raw)
    const migrateProject = (x) => ({ link: '', thumbnail: '', ...x })
    const migrateSub = (x) => ({ link: '', ...x })
    return {
      about: { ...ABOUT_DEFAULTS, ...(parsed.about ?? {}) },
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
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (err) {
      console.warn('localStorage 저장 실패 (용량 초과 가능)', err)
    }
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

  const patchSection = (key, patch) => {
    setData((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }))
  }

  const reset = () => setData(DEFAULT_DATA)

  return (
    <PortfolioContext.Provider value={{ data, upsert, remove, patchSection, reset, uid }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be inside PortfolioProvider')
  return ctx
}
