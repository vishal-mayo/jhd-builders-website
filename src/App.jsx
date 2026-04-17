import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookies-policy" element={<CookiesPolicy />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
