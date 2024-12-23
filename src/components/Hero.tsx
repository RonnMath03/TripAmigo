import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/70">
        <div className="grid grid-cols-3 h-full">
          {/* Background images */}
          <div className="bg-[url('/images/1.webp')] bg-cover brightness-50"></div>
          <div className="bg-[url('/images/2.webp')] bg-cover brightness-50"></div>
          <div className="bg-[url('/images/4.webp')] bg-cover brightness-50"></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-h2 sm:text-h1 md:text-display font-bold text-white mb-6">
            Memorable Group Journeys, Expertly Crafted By TripAmigo
          </h1>
          <p className="text-large text-white mb-8">
            More than trip planners — we're your travel partners. From start to finish, we've got your back.
          </p>
          <a href="https://wa.me/917994206184/?text=Hi,+I+am+interested+in+planning+a+trip+with+your+assistance+.+Can+you+help+me+get+started+?" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 text-white text-button px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Plan Your Trip
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;