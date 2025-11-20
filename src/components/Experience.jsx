import React from 'react'

const roles = [
  {
    company: 'TechLens Labs',
    role: 'Product Strategy Intern',
    period: 'Summer 2025',
    points: [
      'Defined north-star metrics and a KPI stack for a new B2B product line',
      'Led customer discovery across 12 enterprise interviews to shape MVP scope',
      'Built a bottoms-up model to size a $180M serviceable obtainable market'
    ],
  },
  {
    company: 'Frame & Co.',
    role: 'Growth Analyst',
    period: '2022 – 2024',
    points: [
      'Launched 3 experiments improving activation by 18% MoM',
      'Partnered with design to streamline onboarding, reducing TTV by 23%',
      'Owned monthly reporting across CAC, LTV, and contribution margin'
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Experience</h2>
        <div className="grid gap-6">
          {roles.map((r) => (
            <div key={r.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{r.role} · <span className="text-blue-300/90">{r.company}</span></h3>
                <span className="text-sm text-blue-200/70">{r.period}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-blue-100/90">
                {r.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
