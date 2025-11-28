 "use client" 
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

const heroSlides = [
  {
    id: 1, // Added ID for key prop in React
    bgImage: "/images/cars/nissan-patrol-black-front.jpeg", 
    heroImage: "/images/cars/mercedes_s_class.jpeg",
    alt: 'Luxury Mercedes S-Class with Chauffeur in Dubai', // Added alt text for accessibility
    title: 'Rent a Luxury Sedan with Driver',
    subtitle: 'Experience comfort and style in Dubai.',
    linkText: 'Explore Sedans',
    linkHref: '/cars?type=Luxury Sedan', 
  },
  {
    id: 2, // Added ID
      bgImage: "/images/cars/nissan-patrol-black-front1.jpeg", 
    heroImage: "/images/cars/nissan-patrol-black-front1.jpeg",
    alt: 'Powerful Toyota Land Cruiser SUV for Desert Safaris', // Added alt text
    title: 'Adventure Awaits with Our SUVs',
    subtitle: 'Perfect for desert safaris and city tours.',
    linkText: 'Browse SUVs',
    linkHref: '/cars?type=SUV',
  },
  {
    id: 3, // Added ID
     bgImage: "/images/cars/toyota-landcruiser-vxr-white-rear.jpeg", 
    heroImage: "/images/carstoyota-landcruiser-vxr-white-rear.jpeg",
    alt: 'Premium Minibus for Group Travel in UAE', // Added alt text
    title: 'Group Travel in Ultimate Comfort',
    subtitle: 'VIP Vans & Minibuses for all occasions.',
    linkText: 'View Minibuses',
    linkHref: '/cars?type=Minibus',
  },
   {
    id: 4, // Added ID
     bgImage: "/images/cars/nissan-patrol-black-front.jpeg", 
    heroImage: "/images/cars/toyota-landcruiser-vxr-white2.jpeg",
    alt: 'Premium Minibus for Group Travel in UAE', // Added alt text
    title: 'Group Travel in Ultimate Comfort',
    subtitle: 'VIP Vans & Minibuses for all occasions.',
    linkText: 'View Minibuses',
    linkHref: '/cars?type=Minibus',
  }
];

// Now, generating the images:

export default function HeroSection() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="h-screen w-full"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section className="relative h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('${slide.bgImage}')` }}>
            <Image
              src={slide.heroImage}
              alt={`Dubai luxury car rental background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0} // Only priority the first image for performance
            />
            <div className="absolute inset-0 bg-black/40" />
            <motion.div
              className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                key={`title-${index}`} // Key for remounting animation per slide
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-xl mb-8"
                key={`desc-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* {slide.description} */}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/cars"
                  className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition text-lg"
                >
                  Browse Cars
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


// import Image from 'next/image'
// import Link from 'next/link'

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
//     <Image
//         src="/images/hero_section_image.png"
//         alt="Dubai luxury car rental background"
//         fill
//         className="object-cover"
//         priority 
//       />
//       <div className="absolute inset-0 bg-black/40" />
//       <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">Rent a Car with Driver in Dubai</h1>
//         <p className="text-xl mb-8">Explore UAE's luxury rides. Affordable daily, weekly, monthly rentals.</p>
//         <Link href="/cars" className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition text-lg">
//           Browse Cars
//         </Link>
//       </div>
//     </section>
//   )
// }