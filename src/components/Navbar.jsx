import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Dlynq" className="w-8 h-8" />
          <span className="font-extrabold text-slate-900 text-xl">Dlynq</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <NavLink to="/features" className={({isActive})=> isActive? 'text-slate-900 font-semibold':'hover:text-slate-900'}>Features</NavLink>
          <NavLink to="/how-it-works" className={({isActive})=> isActive? 'text-slate-900 font-semibold':'hover:text-slate-900'}>How it works</NavLink>
          <NavLink to="/pricing" className={({isActive})=> isActive? 'text-slate-900 font-semibold':'hover:text-slate-900'}>Pricing</NavLink>
          <NavLink to="/use-cases" className={({isActive})=> isActive? 'text-slate-900 font-semibold':'hover:text-slate-900'}>Use cases</NavLink>
          <NavLink to="/blog" className={({isActive})=> isActive? 'text-slate-900 font-semibold':'hover:text-slate-900'}>Resources</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-slate-600 hover:text-slate-900 text-sm">Log in</Link>
          <Link to="/signup" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-blue-700">Get started</Link>
        </div>
      </div>
    </header>
  )
}
