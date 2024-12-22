import React from 'react';

interface TestimonialData {
  name: string;
  quote: string;
  rating: number;
  bgColor: string;
  textColor: string;
  q: string;
}

const TestimonialCard = ({ data }: { data: TestimonialData }) => (
  <div className={`${data.bgColor} rounded-lg p-6 transition-transform hover:scale-105`}>
    <div className="flex flex-col items-center mb-4">
      <img 
        src={`${data.q}`} 
        alt={`${data.name}'s quote`} 
        className="w-12 h-14 object-cover mb-3"
      />
      <h3 className={`text-xl font-semibold ${data.textColor}`}>{data.name}</h3>
    </div>
    <div className={`${data.textColor} text-4xl text-center mb-4`}>
      {'★'.repeat(data.rating)}
    </div>
    <p className={`${data.textColor} text-center`}>{data.quote}</p>
  </div>
);

const testimonials: TestimonialData[] = [
  {
    name: "Aarsh",
    quote: "The custom itinerary was perfect! They managed everything — flights, hotels, and activities.",
    rating: 5,
    bgColor: "bg-orange-100",
    textColor: "text-orange-500",
    q: "public/images/quoteo.png"
  },
  {
    name: "Marita",
    quote: "Amazing experience from start to finish. Highly recommended for group travel!",
    rating: 5,
    bgColor: "bg-orange-500",
    textColor: "text-white",
    q: "public/images/quotew.png"
  },
  {
    name: "Shervin",
    quote: "Professional service with attention to detail. Will definitely use again!",
    rating: 5,
    bgColor: "bg-orange-100",
    textColor: "text-orange-500",
    q: "public/images/quoteo.png"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white relative">
      <div className="absolute -bottom-4 -left-40 z-0">
        <img 
          src="public/images/tower.png" 
          alt="" 
          className="h-svh w-96 object-cover opacity-100"
          aria-hidden="true"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-12">
          What They're Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} data={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;