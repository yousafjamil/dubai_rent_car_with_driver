'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission (integrate with email service like EmailJS in production)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Send Message
      </button>
      {submitted && <p className="text-green-600 text-center">Message sent! We'll reply soon.</p>}
    </form>
  )
}