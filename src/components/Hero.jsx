import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Digital business cards for modern teams</h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">Create, share, and manage beautiful, trackable digital business cards across your organization. White-label ready for agencies and resellers.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/signup" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-3 text-base font-semibold shadow hover:bg-blue-700">Start free</Link>
            <Link to="/pricing" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-base font-semibold shadow hover:bg-slate-800">See pricing</Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">Free plan • No credit card • Upgrade anytime</p>
        </div>
        <div className="h-[420px] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  )
}
