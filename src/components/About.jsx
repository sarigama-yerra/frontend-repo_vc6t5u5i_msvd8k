import React from 'react'

const bullets = [
  { title: 'Strategy', desc: 'Competitive analysis, go-to-market planning, and growth experimentation.'},
  { title: 'Product', desc: 'Roadmapping, discovery, and data-informed decision-making.'},
  { title: 'Finance', desc: 'Valuation, unit economics, and KPI dashboards for clarity at a glance.'},
]

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-blue-100/90">
              I’m an MBA candidate blending strategy, product thinking, and creativity. I enjoy translating insights into action—crafting crisp narratives, shaping products, and enabling teams to move fast with clarity.
            </p>
            <div className="mt-8 grid gap-4">
              {bullets.map((b) => (
                <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-blue-100/80 text-sm mt-1">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/5 to-transparent p-1">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <p className="text-xs text-blue-200/70 mt-3">Photo credit: Unsplash</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
