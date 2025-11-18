export default function Footer(){
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <img src="/favicon.svg" className="w-6 h-6"/> Dlynq
          </div>
          <p className="mt-3">Smart, shareable digital identity for individuals, teams, and resellers.</p>
          <p className="mt-3 text-xs">© {new Date().getFullYear()} Dlynq. All rights reserved.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Product</p>
          <ul className="space-y-2">
            <li><a href="/features" className="hover:text-slate-900">Features</a></li>
            <li><a href="/pricing" className="hover:text-slate-900">Pricing</a></li>
            <li><a href="/use-cases" className="hover:text-slate-900">Use cases</a></li>
            <li><a href="/blog" className="hover:text-slate-900">Resources</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Company</p>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-slate-900">About</a></li>
            <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
            <li><a href="/reseller" className="hover:text-slate-900">Become a Reseller</a></li>
            <li><a href="/careers" className="hover:text-slate-900">Careers</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Legal</p>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-slate-900">Terms</a></li>
            <li><a href="/privacy" className="hover:text-slate-900">Privacy</a></li>
            <li><a href="/cookies" className="hover:text-slate-900">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
