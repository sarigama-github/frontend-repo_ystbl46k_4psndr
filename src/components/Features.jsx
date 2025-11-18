export default function Features(){
  const items = [
    { title: 'Beautiful templates', desc: 'Pick from modern templates tuned for conversion.' },
    { title: 'Team management', desc: 'Invite teammates, lock branding, and manage permissions.' },
    { title: 'Lead capture', desc: 'Collect leads from your card with enriched details.' },
    { title: 'Analytics', desc: 'Track views, taps, and conversions in real-time.' },
    { title: 'Reseller white-label', desc: 'Your domain, your branding, your billing.' },
    { title: 'Integrations', desc: 'Connect CRM, Zapier, GA4, Meta pixel, and webhooks.' },
  ]
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold text-center">Features</h1>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mt-2">Everything you need to create, manage, and scale digital business cards.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map(i => (
            <div key={i.title} className="rounded-2xl border p-6 bg-white shadow-sm">
              <p className="font-semibold">{i.title}</p>
              <p className="text-slate-600 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
