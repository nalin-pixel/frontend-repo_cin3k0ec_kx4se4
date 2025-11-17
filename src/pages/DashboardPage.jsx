import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'

export default function DashboardPage(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  )
}
