import { useEffect, useState } from 'react'
import { apiFetch } from '../lib/api'

export default function CardEditor() {
  const [slug, setSlug] = useState('')
  const [name, setName] = useState(localStorage.getItem('user_name') || '')
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState(localStorage.getItem('user_email') || '')
  const [phone, setPhone] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    setSlug((localStorage.getItem('user_name') || 'my-card').toLowerCase().replace(/\s+/g,'-'))
  }, [])

  const onSave = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setSaving(true)
    try {
      const user_id = localStorage.getItem('user_id') || 'unknown'
      const body = {
        user_id,
        slug,
        profile: { name, title, company },
        contact: { email, phone },
      }
      const res = await apiFetch('/api/cards', { method: 'POST', body })
      setSuccess('Saved! Card ID ' + res.card_id)
    } catch (e) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-2xl bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold">Create a Card</h1>
        <p className="text-slate-500 mb-6">Quickly publish a shareable digital card.</p>
        {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
        {success && <div className="mb-3 text-sm text-green-600">{success}</div>}
        <form onSubmit={onSave} className="grid gap-4">
          <div>
            <label className="block text-sm font-medium">Slug</label>
            <input value={slug} onChange={e=>setSlug(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="john-doe" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input value={title} onChange={e=>setTitle(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2"/>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Company</label>
            <input value={company} onChange={e=>setCompany(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2"/>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2"/>
            </div>
          </div>
          <button disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold">{saving?'Saving...':'Save Card'}</button>
        </form>
      </div>
    </div>
  )
}
