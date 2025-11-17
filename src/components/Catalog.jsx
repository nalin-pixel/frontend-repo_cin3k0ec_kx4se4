import { useEffect, useState } from 'react'

export default function Catalog(){
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')

  useEffect(()=>{ fetchCourses() },[])

  async function fetchCourses(search){
    setLoading(true)
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const url = new URL(base + '/catalog/courses')
    if(search) url.searchParams.set('search', search)
    const res = await fetch(url)
    const data = await res.json()
    setCourses(data.items || [])
    setLoading(false)
  }

  return (
    <section className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Course Catalog</h1>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input value={q} onChange={(e)=> setQ(e.target.value)} placeholder="Search courses..." className="w-full sm:w-64 px-3 py-2 rounded-md border border-gray-300" />
            <button onClick={()=> fetchCourses(q)} className="px-3 py-2 rounded-md bg-gray-900 text-white">Search</button>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && Array.from({length:6}).map((_,i)=> (
            <div key={i} className="h-40 rounded-xl bg-gray-100 animate-pulse" />
          ))}
          {!loading && courses.map(c => (
            <div key={c._id} className="p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition">
              <div className="text-sm text-blue-600 font-medium">{(c.difficulty||'beginner').toUpperCase()}</div>
              <h3 className="mt-1 font-semibold text-lg">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-3">{c.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(c.topics||[]).slice(0,4).map((t,i)=> (
                  <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
                ))}
              </div>
              <a href={`https://example.com/course/${c._id}`} className="mt-4 inline-flex text-sm text-blue-700 hover:underline">View details</a>
            </div>
          ))}
          {!loading && courses.length===0 && (
            <div className="col-span-full text-center text-gray-600">No courses found.</div>
          )}
        </div>
      </div>
    </section>
  )
}
