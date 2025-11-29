import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script';  

const inter = Inter({ subsets: ['latin'] })

// --- COMPLETE, UPDATED METADATA ---
export const metadata: Metadata = {
  // 🚀 REVISED TITLE: Focused on core service and premium keyword (Chauffeur)
  title: 'Car Rental with Driver in Dubai & UAE | Luxury & Affordable Chauffeur Service - Book Now',
  
  // 🚀 REVISED DESCRIPTION: Clear, concise, and keyword-rich
  description: 'Affordable car rental with driver in Dubai & UAE. Rent luxury SUVs, sedans, and minibuses for daily, weekly, or monthly periods. Book your premium chauffeur service now.',
  
  // 🚀 REVISED KEYWORDS: Prioritizing high-value, specific terms
  keywords: 'car rental with driver Dubai, chauffeur service Dubai, private driver UAE, luxury car rental with driver, cheap car rental with driver Dubai, monthly car rental with driver, Dubai Airport (DXB) car hire with driver, SUV rental with driver Dubai, Land Cruiser with driver, Nissan Patrol with driver, executive chauffeur service UAE, long term car rental with driver Dubai',
  
  icons: {
    // Correctly referencing the favicon.ico file
    icon: "/favicon.ico", 
  },
  // Canonical URL
  alternates: {
    canonical: 'https://dubaicarrentalwithdriver.com',
  },
  // Robots for indexing (Perfect)
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
    title: 'Car Rental with Driver in Dubai & UAE - Luxury & Affordable Hire',
    description: 'Rent cars in Dubai & UAE with driver: SUVs, sedans, minibuses. Cheapest rates for daily, weekly, monthly. Book luxury Toyota, Nissan rentals now.',
    images: [
      {
        // 🚀 UPDATED: Using the logo/favicon for social sharing image
        url: 'https://dubaicarrentalwithdriver.com/favicon.ico', 
        width: 256, // Favicons are usually smaller
        height: 256,
        alt: 'Dubai Car Rental with Driver Logo',
      },
    ],
    url: 'https://dubaicarrentalwithdriver.com',
    siteName: 'Dubai Car Rental with Driver',
    locale: 'en_US',
    type: 'website',
  },
}

// --- ROOT LAYOUT COMPONENT ---
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
        
        {/* JSON-LD Script for Rich Snippets (Structured Data) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dubai Car Rental with Driver",
              "description": "Affordable luxury car rental in Dubai & UAE with driver services.",
              "url": "https://dubaicarrentalwithdriver.com",
              "telephone": "+971556046196",
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
              ],
              "serviceType": [
                "Car Rental",
                "Chauffeur Service",
                "Car Hire with Driver",
                "Minibus Rental"
              ]
            }),
          }}
        />
        
        {/* 🚀 Google Analytics 4 (GA4) Tracking Scripts */}
        <Script
            id="google-analytics-library"
            strategy="afterInteractive" 
            src="https://www.googletagmanager.com/gtag/js?id=G-XT6GVMX3SZ7" 
        />
        
        <Script
            id="ga-config-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XT6GVMX3SZ7'); 
                `,
            }}
        />
      </body>
    </html>
  )
}