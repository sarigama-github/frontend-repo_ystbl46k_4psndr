import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
