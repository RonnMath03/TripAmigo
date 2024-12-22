import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4 text-center mb-10 mt-16 relative z-20">
        <h2 className="text-3xl text-orange-500 font-bold mb-6">
          Get Your Free, Fully Customized Itinerary
        </h2>
        <p className="text-orange-500 mb-8 max-w-2xl mx-auto">
          Tell us where you're headed, and we'll send you a tailored itinerary, including
          transport, accommodation, activities, and more — your entire travel blueprint for free!
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
          Get My Free Itinerary
        </button>
      </div>
      <div className="absolute top-3 right-0 z-0">
        <img 
          src="./images/suit.png" 
          alt="" 
          className="h-32 w-auto object-cover opacity-70"
          aria-hidden="true"
        />
      </div>
      <div className="absolute -bottom-2 -left-10 z-0">
        <img 
          src="./images/train.png" 
          alt="" 
          className="h-52 w-auto object-cover opacity-70"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default CallToAction;