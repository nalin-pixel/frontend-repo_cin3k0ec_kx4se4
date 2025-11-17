import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (p) => location.pathname === p
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/60 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 shadow-inner" />
          <span className="font-semibold tracking-tight">DynLearn</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link>
          <Link to="/catalog" className={`text-sm ${isActive('/catalog') ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}>Catalog</Link>
          <Link to="/dashboard" className={`text-sm ${isActive('/dashboard') ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}>Dashboard</Link>
          <a href="/test" className="text-sm text-gray-700 hover:text-gray-900">System</a>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 shadow hover:opacity-95">Get Started</Link>
        </div>
      </nav>
    </header>
  )
}
