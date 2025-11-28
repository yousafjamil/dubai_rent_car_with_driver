// In components/WhatsAppButton.tsx, updated with back-and-forth slide animation on hover and attractive gradient colors:
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface Props {
  carName?: string;
  message?: string; // Custom message override
  className?: string; // Optional extra classes
}

export default function WhatsAppButton({ 
  carName = 'a service', 
  message = `Hi, I want to book ${carName}.`, 
  className = '' 
}: Props) {
  const phone = '971547175496'; // Your WhatsApp number (without +)
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative bg-gradient-to-r from-green-400 via-green-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold block text-center shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:scale-105
        group ${className}
      `}
      style={{  // Inline for keyframe reference
        '--slide-width': '10px',  // Adjust for more/less slide
      } as React.CSSProperties}
    >
      {/* Back-and-forth slide background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Sliding overlay for back-and-forth effect */}
      <div className="absolute inset-0 bg-transparent group-hover:animate-slide-back-forth"></div>
      
      Book Now via WhatsApp
      
      {/* Rotating Arrow for extra movement */}
      <svg 
        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 ml-2 inline-block transition-all duration-300 group-hover:rotate-45 group-hover:translate-x-2"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

// // In components/WhatsAppButton.tsx, update the interface and usage:
// interface Props {
//   carName?: string
//   message?: string // New: custom message
// }

// export default function WhatsAppButton({ carName = 'a service', message = `Hi, I want to book ${carName}.` }: Props) {
//   const whatsappUrl = `https://wa.me/971547175496?text=${encodeURIComponent(message)}`

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener"
//       className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition flex items-center justify-center whitespace-nowrap"
//     >
//       Book Now
//     </a>
//   )
// }
