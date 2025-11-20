import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/60" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-40">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide text-blue-200 ring-1 ring-white/15 backdrop-blur">
            Camera • Creative • Technology • Minimalist
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Priya Sharma
          </h1>
          <p className="mt-3 text-lg text-blue-100/90 sm:mt-4 sm:text-xl max-w-2xl">
            MBA Candidate • Strategy & Product • Data-driven storyteller with a creative edge.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
              View Case Studies
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
