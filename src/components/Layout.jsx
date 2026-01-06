import Navbar from './Navbar'
import Footer from './Footer'
import SpotlightCursor from './SpotlightCursor'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <SpotlightCursor />
      <Navbar />
      <main className="flex-1 relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
