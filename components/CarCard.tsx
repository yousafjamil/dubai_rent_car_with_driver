import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

interface Car {
  id: string
  name: string
  model: string
  year: number
  price: { daily: number; weekly: number; monthly: number }
  image: string
  type: string
}

interface Props {
  car: Car
}

export default function CarCard({ car }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={`/images/cars/${car.image}`} alt={car.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{car.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">{car.model} - {car.year}</p>
        <p className="text-secondary font-semibold mb-4">{car.type}</p>
        <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
          <p>Daily: AED {car.price.daily}</p>
          <p>Weekly: AED {car.price.weekly}</p>
          <p>Monthly: AED {car.price.monthly}</p>
        </div>
        <div className="flex space-x-2 mt-4">
          <Link href={`/cars/${car.id}`} className="flex-1 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 transition text-center">
            View Details
          </Link>
          <WhatsAppButton carName={car.name} />
        </div>
      </div>
    </div>
  )
}