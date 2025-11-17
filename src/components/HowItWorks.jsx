export default function HowItWorks(){
  const steps = [
    {title: 'Assess', desc: 'Start with a quick placement to calibrate your level and goals.'},
    {title: 'Recommend', desc: 'We suggest courses and resources that target your mastery gaps.'},
    {title: 'Adapt', desc: 'As you learn, the path updates with fresh recommendations.'},
  ]
  return (
    <section id="how" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {steps.map((s,i)=> (
            <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur">
              <div className="text-sm font-semibold text-blue-600">Step {i+1}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
