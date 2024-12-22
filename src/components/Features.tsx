import React from 'react';
import { DollarSign, Bus, Phone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Best Prices, Always',
      description: 'From transport to accommodations and activities, our prices beat online rates.'
    },
    {
      icon: <Bus className="w-10 h-10" />,
      title: 'Travel Together',
      description: 'From planning to execution, we carefully group tours like pieces of a puzzle.'
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: '24/7 Support',
      description: 'Day or night, we\'re here for you. Call anytime for extra amenities, services, or assistance.'
    }
  ];

  return (
    <div className="bg-white relative">
      <div className="py-24 bg-orange-100 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-orange-500 font-bold text-center mb-12">Why we're the First Choice for Travellers</h2>
          </div>
      </div>  
      <div className="container py-16 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 rounded-full bg-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block absolute bottom-12 -left-20 z-0">
      <img 
        src="./images/flight.png" 
        alt="" 
        className="h-24 md:h-32 w-auto object-cover"
        aria-hidden="true"
      />
      </div>
      <div className="bg-white mt-16 md:mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-lg md:text-xl text-orange-500 font-semibold mb-8 md:mb-12 text-center md:text-left">
            Ready for More? Explore All Our Benefits
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end px-4 md:px-10 pb-8 md:pb-0 md:absolute md:-bottom-2">
      <a href="https://wa.me/+917994206184" target="_blank" rel="noopener noreferrer">
        <button className="bg-orange-500 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
          Start Your Adventure Now
        </button> 
      </a>
      </div>
    </div>
  );
};

export default Features;