export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-2xl font-bold tracking-tight text-white">
          pickle<span className="text-lime-500">.</span>
        </span>

        <div className="flex items-center gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>

        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Pickle. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
