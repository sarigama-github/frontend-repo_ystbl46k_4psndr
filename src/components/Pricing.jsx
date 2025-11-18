export default function Pricing(){
  const tiers = [
    { name: 'Free', price: 0, features: ['1 card','Basic templates','Public profile','QR code'] },
    { name: 'Pro', price: 12, features: ['Unlimited cards','Advanced templates','Custom domain','Lead capture','Analytics'], highlight: true },
    { name: 'Team', price: 49, features: ['5 seats','Brand control','Team templates','SSO ready','CRM export'] },
    { name: 'Enterprise', price: 199, features: ['50 seats','SCIM/SSO/SAML','Security review','API access','Priority support'] },
  ]
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold text-center">Pricing</h1>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mt-2">Simple, transparent tiers. Start free and scale as your team grows.</p>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-2xl border p-6 ${t.highlight? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white'}`}>
              <p className="text-sm opacity-80">{t.name}</p>
              <p className="mt-2 text-3xl font-extrabold">{t.price===0?'Free':`$${t.price}`}<span className="text-base font-medium opacity-80">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map(f => <li key={f} className="flex items-center gap-2"><span>•</span>{f}</li>)}
              </ul>
              <a href="/signup" className={`mt-6 inline-flex items-center justify-center w-full rounded-lg py-2 font-semibold ${t.highlight? 'bg-white text-blue-700':'bg-blue-600 text-white'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
