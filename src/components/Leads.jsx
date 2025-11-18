import { useEffect, useState } from 'react'
import { apiFetch } from '../lib/api'

export default function Leads() {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiFetch('/api/leads')
        setItems(data.items || [])
      } catch (e) { setError(e.message) }
    }
    load()
  }, [])

  const exportCsv = () => {
    const headers = ['name','email','phone','company','message','tags','created_at']
    const rows = items.map(i => [i.name||'', i.email||'', i.phone||'', i.company||'', (i.message||'').replace(/\n/g,' '), (i.tags||[]).join('|'), i.created_at || ''])
    const csv = [headers.join(','), ...rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'leads.csv'
    a.click()
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl bg-white p-6 rounded-xl shadow">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Leads</h1>
          <button onClick={exportCsv} className="bg-slate-900 text-white rounded-lg px-4 py-2 font-semibold">Export CSV</button>
        </div>
        {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Phone</th>
                <th className="py-2 pr-4">Company</th>
                <th className="py-2 pr-4">Message</th>
                <th className="py-2 pr-4">Tags</th>
                <th className="py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 pr-4">{i.name}</td>
                  <td className="py-2 pr-4">{i.email}</td>
                  <td className="py-2 pr-4">{i.phone}</td>
                  <td className="py-2 pr-4">{i.company}</td>
                  <td className="py-2 pr-4 max-w-xs truncate" title={i.message}>{i.message}</td>
                  <td className="py-2 pr-4">{(i.tags||[]).join(', ')}</td>
                  <td className="py-2">{i.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
