import { useEffect, useState } from 'react'
import { apiFetch } from '../lib/api'

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  )
}

function CardRow({ card }) {
  return (
    <div className="p-4 rounded-xl border bg-white flex items-center justify-between">
      <div>
        <p className="font-semibold">{card?.profile?.name || 'Untitled Card'}</p>
        <p className="text-sm text-slate-500">/{card.slug}</p>
      </div>
      <div className="flex items-center gap-3">
        <a className="text-blue-600" href={`/cards/${card.slug}`} target="_blank">View</a>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [summary, setSummary] = useState(null)
  const [cards, setCards] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const s = await apiFetch('/api/analytics/summary')
        setSummary(s)
        const meId = localStorage.getItem('user_id')
        const list = await apiFetch(`/api/cards${meId ? `?user_id=${meId}` : ''}`)
        setCards(list.items || [])
      } catch (e) {
        setError(e.message)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-slate-500">Welcome, {localStorage.getItem('user_name') || localStorage.getItem('user_email') || 'user'}</p>
          </div>
          <a href="/cards/new" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold">Create Card</a>
        </div>

        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

        <div className="grid sm:grid-cols-3 gap-4">
          <Stat label="Cards" value={summary?.cards ?? '–'} />
          <Stat label="Leads" value={summary?.leads ?? '–'} />
          <Stat label="Events" value={summary?.events ?? '–'} />
        </div>

        <h2 className="mt-10 mb-3 text-lg font-semibold">Your Cards</h2>
        <div className="grid gap-3">
          {cards.length === 0 ? (
            <div className="text-slate-500">No cards yet.</div>
          ) : (
            cards.map(c => <CardRow key={c._id} card={c} />)
          )}
        </div>
      </div>
    </div>
  )
}
