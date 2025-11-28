'use client';  // For client-side state in Next.js

import React, { useState } from 'react';
import { cars } from '@/data/cars.json';  // Your JSON file path

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does it cost to rent a car in Dubai?',
      answer: `Our rates start at AED 150/day for economy sedans like Nissan Sunny. Luxury SUVs like Toyota Fortuner are AED 250/day, and premium options like Nissan Patrol are AED 500/day. Weekly/monthly discounts available—check our fleet for details.`,
    },
    {
      question: 'Do you offer car rental with driver in UAE?',
      answer: `Yes! All rentals include an English-speaking driver for safety. Perfect for airport transfers or desert safaris with vehicles like Toyota Land Cruiser (AED 600/day). Free within Dubai; extra for Abu Dhabi.`,
    },
    {
      question: 'What types of cars do you have for rental?',
      answer: `We have a diverse fleet: SUVs (Toyota Fortuner, Nissan Patrol, Land Cruiser), minibuses (Toyota Coaster, Hiace), sedans (Toyota Camry, Nissan Sunny), and more. All models from 2022-2024, fully insured.`,
    },
    {
      question: 'Can I rent a minibus for groups in Dubai?',
      answer: `Absolutely! Our Toyota Coaster (AED 800/day) seats 20+ and is ideal for tours or events. Includes AC and driver—book for city sightseeing or desert trips.`,
    },
    {
      question: 'What documents do I need to rent a car?',
      answer: `UAE residents: Emirates ID, driving license, and credit card. Tourists: Passport, visa, international license. No deposit for standard rentals—insurance covers everything.`,
    },
    {
      question: 'How do I book a car online?',
      answer: `Easy! Use our search bar for dates/location, select from fleet (e.g., Prado SUV at AED 300/day), fill form, and pay securely. Confirmation via email/SMS. 24/7 support at +971-50-1234567.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#252121]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 font-semibold hover:bg-red-100 transition-colors"
              >
                 <p className="text-1xl font-bold  text-white"> {faq.question}</p>
        
               
                <span className={`float-right bg-grey-300 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-white-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;