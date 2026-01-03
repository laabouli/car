import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Layout component that wraps all pages
 * Provides consistent navigation and footer
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal-950">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

