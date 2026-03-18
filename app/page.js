import { assets, features, galleryImages, testimonials } from "@/assets/assets";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex  justify-start overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.hero_image}
            alt="FITNESS Gym Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative flex ml-4 sm:ml-8 lg:ml-16 items-center z-10 max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4 animate-fade-in">
              ✦ Now Open in Colombo ✦
            </p>

            <h1
              className="text-[clamp(4rem,12vw,10rem)] leading-none tracking-wide text-white mb-2 animate-fade-up"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              FIT
              <span className="text-accent">NESS</span>
            </h1>
            <h2
              className="text-[clamp(1.5rem,4vw,3.5rem)] leading-none tracking-widest text-white/80 mb-8 animate-fade-up"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                animationDelay: "0.1s",
                animationFillMode: "both",
              }}
            >
              SPORTS CENTER
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up">
              Sri Lanka's most advanced fitness destination. Premium equipment,
              elite coaching, and a community that pushes you beyond every limit
              you've ever set.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-lg -light transition-all duration-300 shadow-lg   hover:gap-3 animate-pulse-red"
              >
                Join Now <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-24 lg:py-32  relative overflow-hidden" id="about">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full  blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left image grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-sm overflow-hidden group">
                    <Image
                      src={assets.image_two}
                      alt="Gym equipments"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative h-40 rounded-sm overflow-hidden group">
                    <Image
                      src={assets.image_one}
                      alt="Gym equipments machines"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-40 rounded-sm overflow-hidden group">
                    <Image
                      src={assets.image_five}
                      alt="GYm full area"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative h-64 rounded-sm overflow-hidden group">
                    <Image
                      src={assets.image_three}
                      alt="GYM crossfit area"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-full flex flex-col items-center justify-center text-white z-10 shadow-2xl ">
                <span className="text-3xl leading-none tracking-wide font-display">
                  EST.
                </span>
                <span className="text-xl leading-none tracking-wide font-display">
                  2026
                </span>
              </div>
            </div>

            {/* Right content */}
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
                About FST
              </p>
              <h2 className="text-5xl font-display sm:text-6xl lg:text-7xl text-white leading-none tracking-wider mb-6">
                MORE THAN
                <br />
                <span className="text-accent">A GYM</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                FITNESS SPORTS CENTER isn't just a fitness center — it's a
                transformation hub where athletes, beginners, and everyone in
                between come to shatter limits. Built on the philosophy that
                every person deserves elite-level resources, we've created a
                space that rivals the world's best training facilities.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Our 15,000 sq ft facility houses over 300 pieces of premium
                equipment, 6 dedicated training zones, a recovery lounge, and
                Sri Lanka's first dedicated CrossFit box — all under one roof.
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-10">
                {[
                  "300+ Premium Machines & Free Weights",
                  "Dedicated CrossFit & Functional Training Box",
                  "Private Training Studios & Group Class Zones",
                  "Recovery Lounge with Sauna & Ice Bath",
                  "Certified Nutrition Coaches On-Site",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/70 text-sm"
                  >
                    <Star className="w-4 h-4 text-accent fill-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm rounded-lg  transition-all duration-300 hover:gap-3"
              >
                Explore Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="relative p-8 bg-secondary border border-accent rounded-sm group hover-accent hover-border-accent  transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center  border border-accent rounded-sm mb-5  transition-colors">
                  <Icon className="w-6 h-6 " />
                </div>
                <h3 className="text-white font-display text-base mb-2 tracking-wide">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Our Facility
            </p>
            <h2
              className="text-5xl sm:text-7xl text-white leading-none tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              THE FITNESS
              <span className="text-accent"> KINGDOM</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group ${
                  i === 0 || i === 5
                    ? "md:col-span-1 h-64 md:h-80"
                    : "h-52 md:h-64"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-accent rounded-full flex items-center justify-center">
                    <span className="text-accent text-xl">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Member Stories
            </p>
            <h2 className="text-5xl sm:text-7xl text-white leading-none tracking-wider font-display">
              REAL RESULTS,
              <br />
              <span className="text-accent">REAL PEOPLE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative p-8 bg-primary border border-white/5 rounded-sm group border-accent transition-all duration-300 hover:-translate-y-1"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-brand-red fill-white"
                    />
                  ))}
                </div>
                <blockquote className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-6xl leading-none text-secondary font-display">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
