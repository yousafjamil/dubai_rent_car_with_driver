import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

interface Service {
  id: string
  name: string
  description: string
  category: string
  image: string
  whatsappMessage: string
}

interface Props {
  service: Service
}

export default function ServicesCard({ service }: Props) {
  return (
    <div className=" bg-[#252121]  dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={`/images/services/${service.image}`} alt={service.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{service.category}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{service.description}</p>
        <div className="flex space-x-2">
          {/* <Link href={`/services/${service.id}`} className="flex-1 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 transition text-center">
            Details
          </Link> */}
          <WhatsAppButton carName={service.name} message={service.whatsappMessage} />
        </div>
      </div>
    </div>
  )
}