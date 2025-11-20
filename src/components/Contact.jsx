import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Mock submit
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s Connect</h2>
        <p className="mt-2 text-blue-100/90">Interested in collaborating or discussing opportunities? Drop a note.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/10 focus:ring-blue-400/50" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/10 focus:ring-blue-400/50" />
          </div>
          <textarea required placeholder="Message" rows={5} className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-blue-200/60 outline-none ring-1 ring-white/10 focus:ring-blue-400/50" />
          <button className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 w-fit">Send Message</button>
          {status && <p className="text-sm text-blue-200/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
