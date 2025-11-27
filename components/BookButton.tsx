import React from 'react';

const BookButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <button
      className={`
        relative bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold 
        transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50
        group ${className}
      `}
    >
      Book Now
      {/* Arrow Icon - Rotates on hover for "movable" feel */}
      <svg 
        className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-45"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  );
};

export default BookButton;