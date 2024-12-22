import React from 'react';

const About = () => {
  return (
    <div className="pb-10 bg-white relative">
      <div className="py-32 bg-orange-100 mb-10 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-orange-500">
            BTW, Who are you?
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src='public/images/team.png'
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
            <p className="text-black-600 mb-6">
              We're a bunch of seasoned travelers. When we mapped out our trips, we found that travel agencies tend to charge sky-high rates. But hey, we're not ones to settle for that! By handling our bookings ourselves - hotels, buses, and dining - we slashed costs by nearly 50%. And guess what? We indulged in even fancier stays and dining spots! 
            </p>
            <p className="text-black-600 mb-8">
              Realising this gap, Trip Amigo was born. Our mission? To dish out affordable travel options for all. With Trip Amigo, we craft tailor-made adventures that go beyond the ordinary. And the kicker? Our prices? They beat all the ones you stumble upon online. 
            </p>
            <p className="text-black-600 mb-8">
              Ready to join us? Let's make unforgettable memories, one adventure at a time, without breaking the bank!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Lets Plan Your Trip
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <img 
          src="public/images/mount.png" 
          alt="" 
          className="h-56 w-auto object-cover opacity-90"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default About;