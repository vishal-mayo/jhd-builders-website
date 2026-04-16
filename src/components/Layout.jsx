import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
export default Layout
