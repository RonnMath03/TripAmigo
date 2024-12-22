import React from 'react';

const Custom = () => {
  return (
    <div className="bg-white text-black text-center py-20 relative">
      <div className="container text-center mx-auto px-4">
          <div className="text-center items-center">
            <h2 className="text-3xl font-bold  mb-6 relative z-20">
                Craft Your Dream Journey.
                Personalized Just for You!
            </h2>
            <p className="text-lg  max-w-2xl mx-auto mb-8 relative z-20">
              From solo adventures to group getaways, we craft personalized itineraries 
              that match your preferences. Tell us your dream destination, and we'll handle 
              the details - flights, stays, activities, and more.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors relative z-20">
              Get your Custom Itinerary
            </button>
          </div>

        <div className="absolute bottom-0 right-0 z-0 opacity-50">
            <img 
                src="public/images/lean.png"
                alt=""
                className="h-56 object-cover rounded-lg"
            />
        </div>
        <div className="absolute bottom-0 left-0 z-0 opacity-50">
            <img 
                src="public/images/taj.png"
                alt=""
                className="h-44 object-cover rounded-lg"
            />
        </div>
        </div>
    </div>
  );
};

export default Custom;