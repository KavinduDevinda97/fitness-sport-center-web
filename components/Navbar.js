'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Dumbbell } from 'lucide-react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative  flex items-center justify-center rounded-sm rotate-0 group-hover:rotate-3 transition-transform duration-300 mt-4">
              <Image src={assets.logo} alt="FITNESS Logo" className="  text-white" width={120} height={120} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display text-2xl tracking-widest text-white"
                
              >
                FITNESS
              </span>
              <span className="text-[9px] tracking-[0.35em] font-display  font-semibold uppercase">
               SPORTs CENTER
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 group ${
                    isActive ? 'text-accent' : 'text-white hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-accent transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/pricing"
              className="relative px-5 py-2.5 bg-accent text-white text-sm font-bold uppercase tracking-widest rounded-md overflow-hidden group transition-all duration-300 hover:scale-110  hover:shadow-lg "
            >
              <span className="relative z-10">Join Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-primary border-t border-white/5 px-4 py-6 space-y-1 mt-2 ">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-semibold uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'bg-accrnt text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/plans"
              className="block text-center px-6 py-3 bg-accent text-white text-sm font-bold uppercase tracking-widest rounded-sm -light transition-colors"
            >
              Join Now — View Plans
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
