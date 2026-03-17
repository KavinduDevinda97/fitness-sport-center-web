'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from "@/assets/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-primary text-white font-body shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <Image src={assets.logo} alt="Gym Logo" className="h-10 w-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-accent gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-6 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white font-body hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}