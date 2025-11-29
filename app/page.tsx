
import HeroSection from '@/components/HeroSection'
import SearchBar from '@/components/SearchBar'
import FeaturedCars from '@/components/FeaturedCars'
import WhyChooseUs from '@/components/WhyChooseUs'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      
      <FeaturedCars />
      <FAQ  />

{/* CTA Hero Banner */}
<section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero_section_image.jpg')" }}>
  <div className="bg-black bg-opacity-50 py-16 text-center text-white">
    <h2 className="text-4xl font-bold mb-4">Ready to Explore Dubai?</h2>
    <p className="text-xl mb-6">Rent a Fortuner or Patrol with driver—starting AED 600/day.</p>
    <button className="bg-blue-500 px-8 py-3 rounded-lg font-semibold">Get Quote</button>
  </div>
</section>
      <WhyChooseUs />
    </>
  )
}
