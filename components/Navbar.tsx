'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiPhone, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 navbar bg-black/80 backdrop-blur-md border-b border-gold/20 h-16 flex items-center px-4">
      {/* Left Icons (Back Arrow & Phone - Like Pic) */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="navbar-icon p-2 rounded-full bg-black/20 text-gold hover:bg-gold/10">
          <FiArrowLeft className="w-5 h-5" />
        </Link>
        <Link href="tel:+971556046196" className="navbar-icon p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30">
          <FiPhone className="w-5 h-5" />
        </Link>
      </div>

      {/* Centered Logo */}
      <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-gold uppercase tracking-wide">
       Dubai Car Rental With Driver
      </Link>

      {/* Right Menu Toggle */}
      <div className="ml-auto flex items-center">
        <button
          className="navbar-icon p-2 rounded-full bg-black/20 text-gold hover:bg-gold/10 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 py-4 space-y-2 text-white border-t border-gold/20">
          <Link href="/" className="block px-4 py-2 hover:bg-gold/10 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/cars" className="block px-4 py-2 hover:bg-gold/10 transition" onClick={() => setIsOpen(false)}>Cars</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gold/10 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gold/10 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gold/10 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}