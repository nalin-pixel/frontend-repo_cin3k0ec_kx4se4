import { useEffect, useState } from 'react'

export default function Dashboard(){
  const [email, setEmail] = useState('student@example.com')
  const [user, setUser] = useState(null)
  const [recs, setRecs] = useState([])
  const [path, setPath] = useState(null)
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ /* auto sign up and bootstrap */ init() },[])

  async function init(){
    await fetch(base + '/bootstrap', { method: 'POST' })
    const u = await fetch(base + '/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Student', email }) }).then(r=> r.json())
    setUser(u.user)
    await fetch(base + `/path/init`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: u.user._id, goals: 'Master DSA', interests: ['arrays','sorting'] }) })
    const p = await fetch(base + `/path?userId=${u.user._id}`).then(r=> r.json())
    setPath(p)
    const rec = await fetch(base + `/recommendations?userId=${u.user._id}`).then(r=> r.json())
    setRecs(rec.items || [])
  }

  return (
    <section className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-teal-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome{user ? `, ${user.name}` : ''}</h1>
            <p className="text-gray-600">Your dynamic learning hub with tailored recommendations.</p>
          </div>
          <div className="text-sm text-gray-600">{user?.email}</div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Recommendations</h2>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {recs.length === 0 && (
                <div className="text-gray-500">No recommendations yet. Completing assessments will unlock better picks.</div>
              )}
              {recs.map((it, i)=> (
                <div key={i} className="p-4 rounded-lg border border-gray-200">
                  <div className="text-xs text-blue-600 font-medium">{it.type.toUpperCase()}</div>
                  <div className="mt-1 font-semibold">{it.id}</div>
                  <div className="mt-1 text-sm text-gray-600">{it.explanation}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white border border-gray-200">
            <h2 className="font-semibold">Your Path</h2>
            <div className="mt-3 space-y-3">
              {!path && <div className="text-gray-500 text-sm">Loading your path...</div>}
              {path && path.items && path.items.map((pi)=> (
                <div key={pi.id} className="p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div className="text-sm font-medium">{pi.type}: {pi.id.slice(0,6)}...</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{pi.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
