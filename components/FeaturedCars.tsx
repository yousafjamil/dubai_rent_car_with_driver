import { cars } from '@/data/cars.json' // Import dummy data
import CarCard from './CarCard'

export default function FeaturedCars() {
  const featured = cars // First 3 cars

  return (
    <section className="py-16 bg-black-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Cars</h2>
        
        {/*
          UPDATED GRID CONTAINER:
          1. grid-cols-1: Single column on mobile.
          2. justify-items-center: Centers the single item horizontally on mobile.
          3. md:grid-cols-2 lg:grid-cols-3: Standard responsive layout on larger screens.
        */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}