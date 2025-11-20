import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-tight">Priya Sharma</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15">Let’s talk</a>
      </div>
    </header>
  )
}

export default Navbar
