import React from 'react'

const cases = [
  {
    title: 'Camera-as-a-Service: Monetization Strategy',
    desc: 'Built a pricing blueprint and tiering model for a prosumer camera platform with AI editing tools.',
    tags: ['Pricing', 'Monetization', 'SaaS'],
    link: '#'
  },
  {
    title: 'Go-to-Market: Creator Analytics',
    desc: 'Planned a GTM motion leveraging communities, content partnerships, and a PLG trial funnel.',
    tags: ['GTM', 'PLG', 'Segmentation'],
    link: '#'
  },
  {
    title: 'Ops Dashboard: Photography Marketplace',
    desc: 'Designed a KPI dashboard aligning marketplace health with supply-demand balance.',
    tags: ['Dashboards', 'Unit Economics', 'Ops'],
    link: '#'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-sm text-blue-300 hover:text-blue-200">Request full portfolio →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <a key={c.title} href={c.link} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-300">{c.title}</h3>
              <p className="mt-1 text-blue-100/90">{c.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-white/10 px-2.5 py-1 text-blue-200 ring-1 ring-white/15">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
