import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">Individuals</h3>
            <p className="mt-2 text-slate-600">Create a beautiful digital card in minutes. Share with a tap or QR, track engagement, and collect leads.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">Teams & Enterprises</h3>
            <p className="mt-2 text-slate-600">Manage users, enforce branding, and integrate with your CRM. SSO ready for enterprise.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">Agencies & Resellers</h3>
            <p className="mt-2 text-slate-600">Offer white-label digital cards to your clients with your own domain, branding, and billing.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App