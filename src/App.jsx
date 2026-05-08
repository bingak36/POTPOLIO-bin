import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/admin/AdminPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
