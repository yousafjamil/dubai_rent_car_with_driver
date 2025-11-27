
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script';  

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dubai Car Rental with Driver | Affordable Luxury SUVs, Sedans & Minibuses in UAE - Book Now',
  description: 'Affordable car rental in Dubai & UAE with driver. Rent luxury SUVs, sedans, minibuses like Toyota Fortuner, Land Cruiser, Nissan Patrol. Daily, weekly, monthly rates. Book now for airport pickup, city tours, desert safaris.',
  keywords: 'Dubai car rental, rent a car UAE, car hire Dubai, luxury car rental Dubai, SUV rental UAE, Toyota Fortuner rental, Land Cruiser hire Dubai, Nissan Patrol rental Abu Dhabi, cheap car rental UAE, car with driver Dubai, minibus rental Dubai, Coaster bus hire UAE, Hiace van rental, Camry sedan hire, Prado SUV rental, Sunny economy car Dubai, Armada luxury SUV UAE, car rental with driver Abu Dhabi, airport car hire Dubai, desert safari car rental, monthly car lease UAE, weekly car rental Dubai, daily car hire Abu Dhabi, premium car rental UAE, 4x4 SUV rental Dubai, family minivan rental UAE, executive sedan hire, budget car rental Dubai, premium chauffeur service UAE, Toyota rental Dubai, Nissan car hire UAE, self-drive car rental Dubai, corporate car rental Abu Dhabi, wedding car rental UAE, tourist car hire Dubai, long-term car lease UAE, electric car rental Dubai, hybrid car hire Abu Dhabi, sports car rental UAE, chauffeur service Dubai, VIP car rental UAE, economy car hire Abu Dhabi',
  icons: {
    icon: "/logo.png",
  },
  // Canonical URL to prevent duplicates
  alternates: {
    canonical: 'https://dubaicar-rental.com',
  },
  // Robots for indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dubai Car Rental with Driver - Luxury & Affordable Hire in UAE',
    description: 'Rent cars in Dubai & UAE with driver: SUVs, sedans, minibuses. Cheapest rates for daily, weekly, monthly. Book luxury Toyota, Nissan rentals now.',
    images: [
      {
        url: '/hero_section_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dubai Car Rental with Driver - Luxury SUVs in UAE',
      },
    ],
    url: 'https://dubaicar-rental.com',
    siteName: 'Dubai Car Rental',
    locale: 'en_US',
    type: 'website',
  },
  // Twitter Cards for X (Twitter) shares
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Car Rental with Driver - Affordable UAE Hire',
    description: 'Rent luxury cars like Toyota Fortuner & Nissan Patrol in Dubai. With driver, daily/weekly/monthly. Book now!',
    images: ['/hero_section_image.jpg'],
    site: '@dubai_car_rental', // Add your Twitter handle if available
  },
  // Verification for Google Search Console (add your code)
  verification: {
    google: 'your-google-verification-code.html', // Replace with actual
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        {/* JSON-LD Script for Rich Snippets */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dubai Car Rental with Driver",
              "description": "Affordable luxury car rental in Dubai & UAE with driver services.",
              "url": "https://dubaicar-rental.com",
              "telephone": "+971 54 717 5496",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "127/1 Omar Bin Al Khattab Street, Al Baraha, Deira",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.23468,
                "longitude": 55.29213
              },
              "openingHours": "Mo-Su 09:00-22:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/dubaicarrantal/?igsh=a2RyNncxcjR2cmVo#",
                "https://www.facebook.com/dubai.car.rantal",
                "https://www.tiktok.com/@dubai.car.rental8?_r=1&_t=ZS-91k1LQWwbqu"
              ]
            }),
          }}
        />
      </body>
    </html>
  )
}

// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import Script from 'next/script';  // Import Script for inline JSON-LD
// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Dubai Rental Car with Driver - Rent a Car UAE',
//   description: 'Cheapest Car Hire in UAE. Rent luxury cars, SUVs, sedans in Dubai with driver. Daily, weekly, monthly rates.',
//   keywords: 'Rent a Car UAE, Dubai Car Rental, Cheapest Car Hire UAE',
//     icons: {
//     icon: "/logo.png",
//   },
//   openGraph: {
//     title: 'Dubai Rental Car with Driver',
   
//     description: 'Premium car rental services in UAE.',
//     images: '/hero_section_image.jpg',
//     url: 'https://dubaicar-rental.com', // Replace with your domain
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }
