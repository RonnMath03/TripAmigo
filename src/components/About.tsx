import React from 'react';

const About = () => {
  return (
    <div className="pb-10 bg-white relative">
      <div className="py-32 bg-orange-100 mb-10 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-h2 font-bold text-orange-500">
            BTW, Who are you?
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src='./images/team.png'
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-h3 md:text-h2 font-bold mb-6">ABOUT US</h2>
            <p className="text-body mb-6">
              We're a bunch of seasoned travelers. When we mapped out our trips, we found that travel agencies tend to charge sky-high rates. But hey, we're not ones to settle for that! By handling our bookings ourselves - hotels, buses, and dining - we slashed costs by nearly 50%. And guess what? We indulged in even fancier stays and dining spots! 
            </p>
            <p className="text-body mb-8">
              Realising this gap, Trip Amigo was born. Our mission? To dish out affordable travel options for all. With Trip Amigo, we craft tailor-made adventures that go beyond the ordinary. And the kicker? Our prices? They beat all the ones you stumble upon online. 
            </p>
            <p className="text-body mb-8">
              Ready to join us? Let's make unforgettable memories, one adventure at a time, without breaking the bank!
            </p>
            <a href="https://wa.me/917994206184/?text=Hi,+I+would+like+to+plan+a+trip+with+your+team.+Please+guide+me+on+how+to+get+started+?" target="_blank" rel="noopener noreferrer">
              <button className="bg-orange-500 text-white text-button px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Lets Plan Your Trip
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <img 
          src="./images/mount.png" 
          alt="" 
          className="h-56 w-auto object-cover opacity-90"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default About;