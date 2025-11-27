'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ServicesCard from '@/components/ServicesCard'
import servicesData from '@/data/services.json'

const services = servicesData.services

interface Service {
  id: string
  name: string
  description: string
  category: string
  image: string
  whatsappMessage: string
}

export default function ServicesListing() {
  const searchParams = useSearchParams()
  const [filteredServices, setFilteredServices] = useState<Service[]>(services)
  const [filters, setFilters] = useState({ category: '' })

  useEffect(() => {
    let filtered = services

    if (searchParams.get('search')) {
      const search = searchParams.get('search')!.toLowerCase()
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(search) || 
        service.description.toLowerCase().includes(search) ||
        service.category.toLowerCase().includes(search)
      )
    }

    if (filters.category) {
      filtered = filtered.filter(service => service.category === filters.category)
    }

    setFilteredServices(filtered)
  }, [searchParams, filters])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const categories = [...new Set(services.map(s => s.category))] // Unique categories: Tours, Transfers, etc.

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Our Services</h1>
        
        {/* Filters */}
        <div className="mb-8">
          {/* <input
            type="text"
            placeholder="Search services..."
            className="w-full md:w-1/3 p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary mb-4 md:mb-0"
            onChange={(e) => searchParams.set('search', e.target.value)} // Simple search
          /> */}
          <select 
            value={filters.category} 
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 ml-0 md:ml-4"
          >
            <option value="">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
        {filteredServices.length === 0 && <p className="text-center text-gray-500 mt-8">No services found. Try adjusting filters.</p>}
      </div>
    </section>
  )
}