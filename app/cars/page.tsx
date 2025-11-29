'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import CarCard from '@/components/CarCard'
import carsData from '@/data/cars.json'

const cars = carsData.cars

interface Car {
  id: string
  name: string
  model: string
  year: number
  price: { daily: number; halfDay: number }
  image: string
  type: string
}

// Main page component
export default function CarsListing() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading cars...</div>}>
      <CarsContent />
    </Suspense>
  )
}

// Sub-component with useSearchParams (safe inside Suspense)
function CarsContent() {
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
        if (filters.price === 'under-1000') return dailyPrice < 1000
        if (filters.price === '1000-2000') return dailyPrice >= 1000 && dailyPrice <= 2000
        return dailyPrice > 2000
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

  const types = ['SUV', 'Minibus', 'Van', 'Bus/Coach', 'Luxury SUV', 'VIP Van']
  const brands = ['Toyota', 'GMC', 'Nissan', 'Range Rover', 'King Long', 'Mercedes']

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
            <option value="under-1000">Under AED 1000/day</option>
            <option value="1000-2000">AED 1000-2000/day</option>
            <option value="over-2000">Over AED 2000/day</option>
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

