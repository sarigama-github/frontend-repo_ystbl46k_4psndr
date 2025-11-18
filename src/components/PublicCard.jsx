import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiFetch } from '../lib/api'

export default function PublicCard() {
  const { slug } = useParams()
  const [card, setCard] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiFetch(`/api/public/cards/${slug}`)
        setCard(data.card)
      } catch (e) {
        setError(e.message)
      }
    }
    if (slug) load()
  }, [slug])

  if (error) return <div className="min-h-screen flex items-center justify-center">{error}</div>
  if (!card) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-md p-6">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
              {card?.profile?.name?.[0] || 'C'}
            </div>
            <div>
              <h1 className="text-xl font-bold">{card?.profile?.name}</h1>
              <p className="text-white/80">{card?.profile?.title}{card?.profile?.company?` · ${card.profile.company}`:''}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {card?.contact?.email && (
              <a href={`mailto:${card.contact.email}`} className="block w-full text-center bg-blue-600 hover:bg-blue-700 rounded-lg py-2 font-semibold">Email</a>
            )}
            {card?.contact?.phone && (
              <a href={`tel:${card.contact.phone}`} className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 rounded-lg py-2 font-semibold">Call</a>
            )}
          </div>

          {card?.about && (
            <p className="mt-6 text-sm text-white/80 whitespace-pre-line">{card.about}</p>
          )}
        </div>
      </div>
    </div>
  )
}
