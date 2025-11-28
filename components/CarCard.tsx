"use client"; // <-- ADD THIS LINE AT THE VERY TOP
import Image from 'next/image'
import Link from 'next/link'
import { FiUsers, FiCalendar, FiBriefcase, FiClock, FiChevronRight, FiSettings, FiDroplet, FiActivity } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react'; // Added React import for type checking

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
  transmission?: string
  fuelType?: string
  drivetrain?: string
}

interface Props {
  car: Car
}

export default function CarCard({ car }: Props) {
  const additionalHour = car.price.additionalHour || 150 // Default if not in JSON
  const phone = '971547175496'; // Your WhatsApp number (without +)
  const whatsappUrl = `https://wa.me/${phone}`; // No pre-filled message

  // >>> CHANGE 1: Function to stop click event propagation <<<
  const handleWhatsappClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevents the click from reaching the parent <Link>
  };

  return (
    // >>> CHANGE 2: Add hover and shadow effects to the card <<<
    <div className="max-w-sm "> 
      <Link 
        href={`/cars/${car.id}`} 
        className="block 
          bg-[#252121] 
          dark:bg-gray-900 
          rounded-lg 
          shadow-lg 
          shadow-gray-800/50 
          overflow-hidden 
          flex flex-col 
          transition-transform 
          duration-300 
          ease-in-out 
          hover:shadow-xl 
          hover:scale-[1.02]
          border border-transparent hover:border-gray-600"
      >
        
        {/* Car Image - Full cover to card border */}
        <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
          <Image
            src={`/images/cars/${car.image}`}
            alt={car.name}
            fill
            // >>> CHANGE 3: Add image hover effect <<<
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-[1.05]"
          />
          {/* Bottom left overlay text */}
          <div className="absolute bottom-2 left-2 p-3 bg-black/60 text-white rounded-tr-md">
            <p className="text-sm font-bold">AED {car.price.daily} /per Day</p>
          </div>
          {/* Top right WhatsApp icon */}
          <div className="absolute top-2 right-2 p-2 bg-green-500 rounded-full hover:bg-green-600 transition duration-200 z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              // >>> CHANGE 1: Attach the click handler <<<
              onClick={handleWhatsappClick} 
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Car Model & Year */}
        <div className="p-3 bg-[#252121]/90 text-white">
          <p className="text-lg font-semibold">{car.name} {car.model} {car.year}</p>
        </div>

        {/* Icons Row */}
        <div className="flex items-center justify-around space-x-10 bg-[#252121]/90 text-white p-4">
          {/* Engine Icon */}
          <div className="flex flex-col items-center space-y-1">
            <FiSettings className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-300">{car.drivetrain}</span>
          </div>

          {/* Fuel Icon */}
          <div className="flex flex-col items-center space-y-1">
            <FiDroplet className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-300">{car.fuelType}</span>
          </div>

          {/* Transmission Icon */}
          <div className="flex flex-col items-center space-y-1">
            <FiActivity className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-300">{car.transmission}</span>
          </div>
        </div>

      </Link>
    </div>
  )
}
// import Image from 'next/image'
// import Link from 'next/link'
// import { FiUsers, FiCalendar, FiBriefcase, FiClock, FiChevronRight, FiSettings, FiDroplet, FiActivity } from 'react-icons/fi'
// import WhatsAppButton from './WhatsAppButton'
// import { FaWhatsapp } from 'react-icons/fa';

// interface Car {
//   id: string
//   name: string
//   model: string
//   year: number
//   price: { daily: number; halfDay: number; additionalHour?: number }
//   image: string
//   type: string
//   seats?: number
//   availability?: string // e.g., "2022-25"
//   transmission?: string
//   fuelType?: string
//   drivetrain?: string
// }

// interface Props {
//   car: Car
// }

// export default function CarCard({ car }: Props) {
//   const additionalHour = car.price.additionalHour || 150 // Default if not in JSON
//   const phone = '971547175496'; // Your WhatsApp number (without +)
//   const whatsappUrl = `https://wa.me/${phone}`; // No pre-filled message
//   return (
//     <Link href={`/cars/${car.id}`} className="block">
//       <div className="bg-[#252121] dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col max-w-sm mx-auto">
//         {/* Car Image - Full cover to card border */}
//         <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
//           <Image
//             src={`/images/cars/${car.image}`}
//             alt={car.name}
//             fill
//             className="object-cover w-full h-full"
//           />
//           {/* Bottom left overlay text */}
//           <div className="absolute bottom-2 left-2 p-3 bg-black/60 text-white rounded-tr-md">
//             <p className="text-sm font-bold">AED {car.price.daily} /per Day</p>
//           </div>
//           {/* Top right WhatsApp icon */}
//           <div className="absolute top-2 right-2 p-2 bg-green-500 rounded-full">
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white"
//             >
//               <FaWhatsapp className="w-6 h-6" />
//             </a>
//           </div>
//         </div>

//         {/* Car Model & Year */}
//         <div className="p-3 bg-[#252121]/90 text-white">
//           <p className="text-sm">{car.model} {car.year}</p>
//         </div>

//         {/* Icons Row */}
//         {/* <div className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-between items-center text-sm">
//           <div className="flex items-center space-x-2">
//             <FiUsers className="text-primary" />
//             <span>{car.seats || 7}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FiCalendar className="text-primary" />
//             <span>{car.availability || '2022-25'}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FiBriefcase className="text-primary" />
//             <span className="font-bold text-secondary">Full Day</span>
//           </div>
//         </div> */}

// <div className="flex items-center justify-around space-x-10 bg-[#252121]/90 text-white p-4 rounded-lg">
//       {/* Engine Icon */}
//       <div className="flex flex-col items-center space-y-1">
//         <FiSettings className="w-6 h-6 text-gray-400" />
//         <span className="text-xs text-gray-300">{car.drivetrain}</span>
//       </div>

//       {/* Fuel Icon */}
//       <div className="flex flex-col items-center space-y-1">
//         <FiDroplet className="w-6 h-6 text-gray-400" />
//         <span className="text-xs text-gray-300">{car.fuelType}</span>
//       </div>

//       {/* Transmission Icon */}
//       <div className="flex flex-col items-center space-y-1">
//         <FiActivity className="w-6 h-6 text-gray-400" />
//         <span className="text-xs text-gray-300">{car.transmission}</span>
//       </div>
//     </div>

//         {/* Action Buttons */}
//         {/* <div className="p-4 flex space-x-2">
//           <WhatsAppButton carName={`${car.name} ${car.model}`} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold flex items-center justify-center space-x-2" />
//         </div> */}
//       </div>
//     </Link>
//   )
// }