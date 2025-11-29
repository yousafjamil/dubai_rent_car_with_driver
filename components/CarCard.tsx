"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FiSettings, FiDroplet, FiActivity } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

interface Car {
  id: string
  name: string
  model: string
  year: number
  price: { daily: number; halfDay: number; additionalHour?: number }
  image: string
  type: string
  seats?: number
  availability?: string 
  transmission?: string
  fuelType?: string
  drivetrain?: string
}

interface Props {
  car: Car
}

export default function CarCard({ car }: Props) {
  const phone = '971556046196'; // Your WhatsApp number (without +)
  const whatsappUrl = `https://wa.me/${phone}`; 

  const handleWhatsappClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    window.open(whatsappUrl, '_blank'); 
  };

  return (
    <div className="w-full h-full"> 
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
          h-full                                  /* << ADDED: Ensures card fills the grid height */
          transition-transform 
          duration-300 
          ease-in-out 
          hover:shadow-xl 
          hover:scale-[1.02]
          border border-transparent hover:border-gray-600"
      >
        
        {/* Car Image - Set a consistent height */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-lg"> {/* << ADJUSTED: Consistent height for all images */}
          <Image
            src={`/images/cars/${car.image}`}
            alt={car.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-[1.05]"
          />
          {/* Bottom left overlay text */}
          <div className="absolute bottom-2 left-2 p-3 bg-black/60 text-white rounded-tr-md">
            <p className="text-sm font-bold">AED {car.price.daily} (10 Hours)/per Day</p>
          </div>
          
          {/* Top right WhatsApp icon */}
          <div 
            className="absolute top-2 right-2 p-2 bg-green-500 rounded-full hover:bg-green-600 transition duration-200 z-10 cursor-pointer"
            onClick={handleWhatsappClick}
          >
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Car Model & Year */}
        <div className="p-3 bg-[#252121]/90 text-white flex-shrink-0">
          <p className="text-lg font-semibold">{car.name} {car.model} {car.year}</p>
        </div>

        {/* Icons Row - Set a consistent height and spacing to enforce equal card size */}
        <div className="flex items-center justify-around space-x-4 bg-[#252121]/90 text-white p-4 mt-auto flex-shrink-0"> {/* << ADJUSTED: Added mt-auto to push to bottom */}
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
