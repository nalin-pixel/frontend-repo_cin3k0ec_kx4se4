export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Dynamic Learning Paths, Tailored to You
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Assess → Recommend → Adapt. A personalized journey through courses and resources, powered by data and designed for momentum.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#how" className="px-4 py-2 rounded-md bg-gray-900 text-white">How it works</a>
              <a href="/dashboard" className="px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-200 hover:bg-gray-50">Go to Dashboard</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <iframe
                src="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
                frameBorder="0"
                className="w-full h-full"
                title="Futuristic Education Spline"
                aria-label="Interactive 3D education scene"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
