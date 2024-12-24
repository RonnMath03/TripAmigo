import React from 'react';

const destinations = [
  {
    name: 'Goa',
    duration: '2N/3D',
    image: './images/goa.webp',
    rating: '₹3699',
    url: 'https://wa.me/917994206184/?text=Hi,+I+am+interested+in+the+Goa+package+for+₹3499+(2+nights).+Can+you+share+more+details+?'
  },
  {
    name: 'Dandeli',
    duration: '1N/2D',
    image: './images/dandeli.webp',
    rating: '₹3499',
    url: 'https://wa.me/917994206184/?text=Hi,+I+am+interested+in+the+Kodaikanal+package+for+₹3499+(2+nights).+Can+you+share+more+details+?'
  },
  {
    name: 'Gokarna',
    duration: '1N/2D',
    image: './images/gokarna.webp',
    rating: '₹3499',
    url: 'https://wa.me/917994206184/?text=Hi,+I+am+interested+in+the+Pondicherry+package+for+₹2699+(1+night).+Can+you+share+more+details+?'
  }
];

const Destinations = () => {
  return (
    <div className="bg-white">
      <div className="py-32 bg-orange-100 mb-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-h2 text-orange-500 font-bold text-center mb-12">Top Traveler Picks</h2>
          </div>
      </div>
      <div className="container mx-auto px-4 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <a 
              key={index} 
              href={destination.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`${destination.image}`}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-h3 font-bold text-white">{destination.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex text-white text-body">
                    {destination.rating}
                  </div>
                  <span className="text-white font-semibold text-body">{destination.duration}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="py-24 bg-orange-100 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-h2 text-orange-500 font-bold text-center mb-12">Didn't see your choice?</h2>
          </div>
      </div>      
    </div>
  );
};

export default Destinations;