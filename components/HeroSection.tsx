import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
    <Image
        src="/images/hero_section_image.png"
        alt="Dubai luxury car rental background"
        fill
        className="object-cover"
        priority 
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Rent a Car with Driver in Dubai</h1>
        <p className="text-xl mb-8">Explore UAE's luxury rides. Affordable daily, weekly, monthly rentals.</p>
        <Link href="/cars" className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition text-lg">
          Browse Cars
        </Link>
      </div>
    </section>
  )
}