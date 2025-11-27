'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm) {
      router.push(`/cars?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg backdrop-blur-md">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by car type, model (e.g., SUV, Mercedes)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select className="p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </form>
  )
}