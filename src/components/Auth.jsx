import { useState } from 'react'
import { apiFetch } from '../lib/api'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tenant, setTenant] = useState(localStorage.getItem('tenant_id') || 'demo-tenant')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      localStorage.setItem('tenant_id', tenant)
      const data = await apiFetch('/api/auth/login', { method: 'POST', body: { email, password } })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user_email', data.user.email)
      localStorage.setItem('user_name', data.user.name || '')
      window.location.href = '/dashboard'
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Log in</h1>
        <p className="text-sm text-slate-500 mb-6">Use your email and password</p>
        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
        <label className="block text-sm font-medium text-slate-700">Tenant ID</label>
        <input value={tenant} onChange={e=>setTenant(e.target.value)} className="mt-1 mb-3 w-full rounded-lg border px-3 py-2" placeholder="your-tenant"/>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 mb-3 w-full rounded-lg border px-3 py-2" placeholder="you@company.com"/>
        <label className="block text-sm font-medium text-slate-700">Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 mb-5 w-full rounded-lg border px-3 py-2" placeholder="••••••••"/>
        <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold">{loading ? 'Logging in...' : 'Log in'}</button>
        <p className="mt-4 text-sm text-slate-600">No account? <a href="/signup" className="text-blue-600">Create one</a></p>
      </form>
    </div>
  )
}

export function Signup() {
  const [tenant, setTenant] = useState(localStorage.getItem('tenant_id') || 'demo-tenant')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      localStorage.setItem('tenant_id', tenant)
      const data = await apiFetch('/api/auth/signup', { method: 'POST', body: { email, name, password } })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user_id', data.user_id)
      localStorage.setItem('user_email', email)
      localStorage.setItem('user_name', name)
      window.location.href = '/dashboard'
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h1>
        <p className="text-sm text-slate-500 mb-6">Instant access. No card required.</p>
        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
        <label className="block text-sm font-medium text-slate-700">Tenant ID</label>
        <input value={tenant} onChange={e=>setTenant(e.target.value)} className="mt-1 mb-3 w-full rounded-lg border px-3 py-2" placeholder="your-tenant"/>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 mb-3 w-full rounded-lg border px-3 py-2" placeholder="Alex Rivera"/>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 mb-3 w-full rounded-lg border px-3 py-2" placeholder="you@company.com"/>
        <label className="block text-sm font-medium text-slate-700">Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 mb-5 w-full rounded-lg border px-3 py-2" placeholder="••••••••"/>
        <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold">{loading ? 'Creating...' : 'Create account'}</button>
        <p className="mt-4 text-sm text-slate-600">Have an account? <a href="/login" className="text-blue-600">Log in</a></p>
      </form>
    </div>
  )
}
