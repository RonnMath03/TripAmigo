import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialData {
  name: string;
  quote: string;
  rating: number;
  bgColor: string;
  textColor: string;
  q: string;
}

const QuoteImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.img 
    src={src} 
    alt={alt} 
    className="w-12 h-14 object-cover mb-3"
    animate={{
      y: [-5, 5, -5],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const TestimonialCard = ({ data, index }: { data: TestimonialData; index: number }) => (
  <motion.div 
    className={`${data.bgColor} rounded-lg p-6 transition-transform hover:scale-105`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="flex flex-col items-center mb-4">
      <QuoteImage src={data.q} alt={`${data.name}'s quote`} />
      <h3 className={`text-h3 font-semibold ${data.textColor} text-center w-full`}>{data.name}</h3>
    </div>
    <div className={`${data.textColor} text-4xl text-center mb-4`}>
      {'★'.repeat(data.rating)}
    </div>
    <p className={`${data.textColor} text-body text-center`}>{data.quote}</p>
  </motion.div>
);

const testimonials: TestimonialData[] = [
  {
    name: "George Kattamapally",
    quote: "I recently had the pleasure of booking a trip through Trip Amigo and couldn't be more impressed with their service.",
    rating: 5,
    bgColor: "bg-orange-100",
    textColor: "text-orange-500",
    q: "./images/quoteo.png"
  },
  {
    name: "Sabrinath B",
    quote: "I had an amazing trip with my college classmates, all thanks to Trip Amigo, The travel agency made everything seamless, from planning to execution.",
    rating: 5,
    bgColor: "bg-orange-500",
    textColor: "text-white",
    q: "./images/quotew.png"
  },
  {
    name: "Allen Biju",
    quote: "Everything was seamless, from the train booking and accommodations to the perfectly curated itinerary.",
    rating: 5,
    bgColor: "bg-orange-100",
    textColor: "text-orange-500",
    q: "./images/quoteo.png"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white relative">
      <motion.div 
        className="absolute -bottom-4 -left-40 z-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="./images/tower.png" 
          alt="" 
          className="h-svh w-96 object-cover opacity-100"
          aria-hidden="true"
        />
      </motion.div>
      <div className="container mx-auto px-4 relative z-20">
        <motion.h2 
          className="text-h2 text-orange-500 font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What They're Saying
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} data={testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;