
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
     {/* Partners Section */}
{/* Newsletter Section */}
{/* <section className="py-16 bg-gray-900 text-white">
  <div className="container mx-auto px-4 max-w-2xl text-center">
    <h2 className="text-3xl font-bold mb-4">Get Exclusive Rental Deals</h2>
    <p className="mb-6">Sign up for tips on UAE drives and discounts on Fortuner hires.</p>
    <form className="flex flex-col sm:flex-row gap-2 justify-center">
      <input type="email" placeholder="Your Email" className="p-3 rounded flex-1" required />
      <button type="submit" className="bg-blue-500 px-6 py-3 rounded font-semibold">Subscribe</button>
    </form>
  </div>
</section> */}
{/* Quick CTA Banner */}
{/* CTA Hero Banner */}
<section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero_section_image.jpg')" }}>
  <div className="bg-black bg-opacity-50 py-16 text-center text-white">
    <h2 className="text-4xl font-bold mb-4">Ready to Explore Dubai?</h2>
    <p className="text-xl mb-6">Rent a Fortuner or Patrol with driver—starting AED 250/day.</p>
    <button className="bg-blue-500 px-8 py-3 rounded-lg font-semibold">Get Quote</button>
  </div>
</section>
      <WhyChooseUs />
    </>
  )
}
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
