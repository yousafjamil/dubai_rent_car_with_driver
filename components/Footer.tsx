import Link from 'next/link'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FiInstagram, href: 'https://www.instagram.com/dubaicarrantal/?igsh=a2RyNncxcjR2cmVo#', label: 'Instagram' },
    { icon: FiFacebook, href: 'https://www.facebook.com/dubai.car.rantal', label: 'Facebook' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@dubai.car.rental8?_r=1&_t=ZS-91k1LQWwbqu', label: 'TikTok' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dubai Rental Car With Driver</h3>
            <p className="text-gray-300">Premium car rental with driver in UAE. Explore Dubai in style.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/cars" className="hover:text-white transition">Our Cars</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener" className="text-2xl hover:text-secondary transition">
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Dubai Rental Car With Driver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}