import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-blue-200/70 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Priya Sharma. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:priya@example.com" className="hover:text-white">Email</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Resume</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
