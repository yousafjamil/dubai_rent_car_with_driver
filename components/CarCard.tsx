import Image from 'next/image'
import Link from 'next/link'
import { FiUsers, FiCalendar, FiBriefcase, FiClock, FiChevronRight } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'

interface Car {
  id: string
  name: string
  model: string
  year: number
  price: { daily: number; halfDay: number; additionalHour?: number }
  image: string
  type: string
  seats?: number
  availability?: string // e.g., "2022-25"
}

interface Props {
  car: Car
}

export default function CarCard({ car }: Props) {
  const additionalHour = car.price.additionalHour || 150 // Default if not in JSON

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col max-w-sm mx-auto">
      {/* Car Image */}
      <div className="relative h-48 w-full">
        <Image src={`/images/cars/${car.image}`} alt={car.name} fill className="object-cover" />
      </div>

      {/* Car Name Header */}
      <div className="bg-primary text-white p-4">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-sm opacity-90">{car.model} {car.year}</p>
      </div>

      {/* Icons Row */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2">
          <FiUsers className="text-primary" />
          <span>{car.seats || 7}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiCalendar className="text-primary" />
          <span>{car.availability || '2022-25'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiBriefcase className="text-primary" />
          <span className="font-bold text-secondary">Full Day</span>
        </div>
      </div>

      {/* Pricing Row */}
      <div className="p-4 grid grid-cols-3 gap-2 text-center text-sm">
        <div className="bg-white dark:bg-gray-800 rounded p-2 border">
          <p className="font-semibold text-primary">Full Day</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">AED {car.price.daily} </p>
                    <p className="font-semibold text-primary">With driver </p>

        </div>
        <div className="bg-white dark:bg-gray-800 rounded p-2 border">
          <p className="font-semibold text-primary">Half Day </p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">AED {car.price.halfDay} </p>
          <p className="font-semibold text-primary">With driver </p>

        </div>
        <div className="bg-white dark:bg-gray-800 rounded p-2 border">
          <p className="font-semibold text-primary">after 10  Hours</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">Extra Charges</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex space-x-2">
        <WhatsAppButton carName={`${car.name} ${car.model}`} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold flex items-center justify-center space-x-2" />
        <Link href={`/cars/${car.id}`} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-semibold flex items-center justify-center space-x-2">
          <FiClock />
          <span>Call Now</span>
        </Link>
      </div>

      {/* View More */}
      <div className="p-4 border-t text-center">
        <Link href={`/cars/${car.id}`} className="text-primary hover:underline flex items-center justify-center space-x-1 text-sm">
          <span>View More</span>
          <FiChevronRight />
        </Link>
      </div>
    </div>
  )
}