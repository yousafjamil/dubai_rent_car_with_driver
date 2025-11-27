'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import CarCard from '@/components/CarCard'
import { cars } from '@/data/cars.json'

interface Car {
  id: string
  name: string
  model: string
  year: number
  price: { daily: number; weekly: number; monthly: number }
  image: string
  type: string
}

export default function CarsListing() {
  const searchParams = useSearchParams()
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars)
  const [filters, setFilters] = useState({
    price: '',
    brand: '',
    type: '',
  })

  useEffect(() => {
    let filtered = cars

    if (searchParams.get('search')) {
      const search = searchParams.get('search')!.toLowerCase()
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(search) || 
        car.model.toLowerCase().includes(search) ||
        car.type.toLowerCase().includes(search)
      )
    }

    if (filters.price) {
      filtered = filtered.filter(car => {
        const dailyPrice = car.price.daily
        if (filters.price === 'under-500') return dailyPrice < 500
        if (filters.price === '500-1000') return dailyPrice >= 500 && dailyPrice <= 1000
        return dailyPrice > 1000
      })
    }

    if (filters.brand) {
      filtered = filtered.filter(car => car.name.includes(filters.brand))
    }

    if (filters.type) {
      filtered = filtered.filter(car => car.type === filters.type)
    }

    setFilteredCars(filtered)
  }, [searchParams, filters])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const types = ['SUV', 'Sedan', 'Luxury', 'Sports']
  const brands = ['Mercedes', 'Range Rover', 'BMW', 'Porsche']

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Our Cars</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select 
            value={filters.price} 
            onChange={(e) => handleFilterChange('price', e.target.value)}
            className="p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="">All Prices</option>
            <option value="under-500">Under AED 500/day</option>
            <option value="500-1000">AED 500-1000/day</option>
            <option value="over-1000">Over AED 1000/day</option>
          </select>
          <select 
            value={filters.brand} 
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="">All Brands</option>
            {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
          </select>
          <select 
            value={filters.type} 
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="">All Types</option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {filteredCars.length === 0 && <p className="text-center text-gray-500 mt-8">No cars found. Try adjusting filters.</p>}
      </div>
    </section>
  )
}