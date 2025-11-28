const reasons = [
  { title: 'Experienced Drivers', desc: 'Professional chauffeurs with UAE knowledge.' },
  { title: 'Affordable Rates', desc: 'Best prices for daily, weekly, monthly rentals.' },
  { title: 'Luxury Fleet', desc: 'Top brands: Mercedes, BMW, Range Rover.' },
  { title: '24/7 Support', desc: 'Round-the-clock assistance via WhatsApp.' },
]

export default function WhyChooseUs() {
  return (
     <section className="py-16 bg-black ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <p className="text-gray-600">Cars in Fleet</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    // <section className="py-16">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {reasons.map((reason, i) => (
    //         <div key={i} className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
    //           <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
    //             {i + 1}
    //           </div>
    //           <h3 className="font-semibold mb-2">{reason.title}</h3>
    //           <p className="text-gray-600 dark:text-gray-300">{reason.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  )
}