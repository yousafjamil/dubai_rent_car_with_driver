'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Dubai Rental Car With Driver
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/cars" className="hover:text-primary transition">Cars</Link>
            <Link href="/about" className="hover:text-primary transition">About</Link>
            <Link href="/services" className="hover:text-primary transition">Services</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-2 space-y-2">
            <Link href="/" className="block hover:text-primary px-2 py-1" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/cars" className="block hover:text-primary px-2 py-1" onClick={() => setIsOpen(false)}>Cars</Link>
            <Link href="/about" className="block hover:text-primary px-2 py-1" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="block hover:text-primary px-2 py-1" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}