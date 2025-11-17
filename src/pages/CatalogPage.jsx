import Navbar from '../components/Navbar'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'

export default function CatalogPage(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  )
}
