import React from 'react';

const destinations = [
  {
    name: 'Goa',
    duration: '3N/4D',
    image: '/images/goa.png',
    rating: '$$$$'
  },
  {
    name: 'Kodaikanal',
    duration: '3N/4D',
    image: '/images/kodai.png',
    rating: '$$$$'
  },
  {
    name: 'Pondicherry',
    duration: '3N/4D',
    image: '/images/pondi.png',
    rating: '$$$$'
  }
];

const Destinations = () => {
  return (
    <div className="bg-white">
      <div className="py-32 bg-orange-100 mb-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-orange-500 font-bold text-center mb-12">Top Traveler Picks</h2>
          </div>
      </div>
      <div className="container mx-auto px-4 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`${destination.image}`}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex text-white">
                    {destination.rating}
                  </div>
                  <span className="text-white font-semibold">{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-24 bg-orange-100 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-orange-500 font-bold text-center mb-12">Didn't see your choice?</h2>
          </div>
      </div>      
    </div>
  );
};

export default Destinations;