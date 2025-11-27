export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company Info</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Dubai Rental Car with Driver is your premier choice for luxury car rentals in the UAE. 
              Founded in 2015, we specialize in providing high-end vehicles with professional drivers 
              for business travelers, tourists, and locals alike.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To deliver exceptional transportation experiences that blend luxury, safety, and affordability. 
              We aim to make exploring Dubai and the UAE seamless and memorable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Coverage</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We serve all major cities in the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, 
              Fujairah, and Umm Al Quwain. Airport transfers, city tours, and long-distance trips available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}