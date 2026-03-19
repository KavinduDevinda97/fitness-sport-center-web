import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">404 Error</p>
        <h1
          className="text-[clamp(6rem,20vw,16rem)] leading-none tracking-wider text-white/10 font-display"
         
        >
          404
        </h1>
        <h2
          className="text-4xl sm:text-6xl text-white leading-none tracking-wider -mt-6 mb-5 font-display"
          
        >
          PAGE NOT <span className="text-accent">FOUND</span>
        </h2>
        <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          Looks like this page skipped leg day and disappeared. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all duration-300 hover:gap-3"
        >
          Back to Home <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
