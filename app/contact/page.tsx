import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <ContactForm />
          </div> */}
          <div>
      <h3 className="text-xl font-bold mb-2">Email</h3>
      <p>syed894imran@gmail.com</p>
    </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">WhatsApp</h2>
            <p className="mb-4">Book instantly via WhatsApp</p>
            <a href="https://wa.me/971547175496" target="_blank" rel="noopener" className="block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition mb-8">
              Chat on WhatsApp
            </a>
            
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="mb-4"> Address : 127/1 - Omar Bin Al Khattab Street - Al baraha - Deira - Dubai</p>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.693!2d55.29213!3d25.23468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43445f%3A0x1234567890abcdef!2s127%2F1%20Omar%20Bin%20Al%20Khattab%20Street%2C%20Al%20Baraha%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sus!4v1722000000000"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen={false}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg"
/>
          
          </div>
        </div>
      </div>
    </section>
  )
}