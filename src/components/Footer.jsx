export default function Footer(){
  return (
    <footer className="mt-20 border-t border-gray-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} DynLearn. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="/catalog" className="hover:text-gray-900">Catalog</a>
          <a href="/test" className="hover:text-gray-900">System</a>
        </nav>
      </div>
    </footer>
  )
}
