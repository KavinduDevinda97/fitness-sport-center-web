import { assets, services } from "@/assets/assets"
import { ChevronRight, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
   
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={assets.image_one}
            alt="Services"
            fill
            className="object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Offer</p>
          <h1
            className="text-6xl sm:text-8xl lg:text-9xl text-white leading-none tracking-wider font-display"
            
          >
            OUR <span className="text-accent">SERVICES</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Six world-class training disciplines, one extraordinary facility. Find your calling and unlock your potential.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group relative bg-primary border border-white/5 rounded-sm overflow-hidden hover-border-accent transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/50 via-transparent to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-5 left-5 w-12 h-12 bg-accent rounded-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">
                      {service.tagline}
                    </p>
                    <h3
                      className="text-3xl text-white tracking-wider mb-3 font-display"
                      
                    >
                      {service.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-5">{service.description}</p>

                    {/* Features */}
                    <ul className="grid grid-cols-2 gap-2 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-white/60 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Meta */}
                    <div className="flex items-center gap-5 pt-5 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-white/40 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/40 text-xs">
                        <Users className="w-3.5 h-3.5" />
                        {service.capacity}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl sm:text-6xl text-white tracking-wider mb-4 font-display"
            
          >
            READY TO START?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Choose a membership plan that fits your lifestyle and get unlimited access to all services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-sm  transition-all duration-300"
            >
              View Plans <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a Free Tour
            </Link>
          </div>
        </div>
      </section>
    </>
   
  )
}