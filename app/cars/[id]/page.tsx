import { notFound } from 'next/navigation'
import Image from 'next/image'
import CarGallery from '@/components/CarGallery'
import WhatsAppButton from '@/components/WhatsAppButton'
import carsData from '@/data/cars.json' // Assuming your alias is working now

const cars = carsData.cars

interface Car {
  id: string
  name: string
  model: string
  year: number
  price: { 
    daily: number; 
    halfDay: number;
    additionalHour?: number; // Optional based on previous code
  } 
  image: string
  type: string // This MUST be present in all JSON objects
  features: string[]
  gallery: string[]
  // THESE MUST BE INCLUDED AND MARKED OPTIONAL TO MATCH YOUR JSON
  drivetrain?: string 
  fuelType?: string 
  transmission?: string
}

interface Props {
  params: Promise<{ id: string }> 
}

export default async function CarDetails({ params }: Props) { // Made async
  const { id } = await params; // Await and destructure

 const car: Car | undefined = cars.find(c => c.id === id) 

  
  if (!car) {
    notFound()
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src={`/images/cars/${car.image}`} alt={car.name} fill className="object-cover" />
            </div>
            <CarGallery images={car.gallery} />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{car.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{car.model} | {car.year} | {car.type}</p>
            
            <div className="bg-gray-90 bg-black p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Pricing</h3>
              <div className="space-y-2">
                <p className="text-lg text-white">Daily: <span className="font-bold text-secondary">AED {car.price.daily}</span></p>
                <p className="text-lg text-white">Half Day: <span className="font-bold text-secondary">AED {car.price.halfDay}</span></p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                {car.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <WhatsAppButton carName={`${car.name} ${car.model}`} />
              {/* <button className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition">
                Call Us
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}