import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const destinations = [
  {
    name: 'Goa',
    image: './images/goa.webp',
    url: 'https://wa.me/917994206184/?text=Hi,+I+am+interested+in+the+Goa+package.+Can+you+share+more+details+?'
  },
  {
    name: 'Munnar',
    image: './images/munnar.webp',
    url: 'https://wa.me/917994206184/?text=Hi,+I+am+interested+in+the+Munnar+package.+Can+you+share+more+details+?'
  },
  {
    name: 'Gokarna',
    image: './images/gokarna.webp',
    url: 'https://wa.me/917994206184/?text=Hi,+I+am+interested+in+the+Gokarna+package.+Can+you+share+more+details+?'
  }
];

const Destinations = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <div className="py-32 bg-orange-100 mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-h2 text-orange-500 font-bold text-center mb-12">Top Traveler Picks</h2>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 mb-14">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.a 
              key={index}
              variants={cardVariants}
              href={destination.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div 
                className="aspect-w-16 aspect-h-9"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`${destination.image}`}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                animate={{
                  y: hoveredIndex === index ? 0 : 5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-h3 font-bold text-white">{destination.name}</h3>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div className="py-24 bg-orange-100 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-h2 text-orange-500 font-bold text-center mb-12">Didn't see your choice?</h2>
        </motion.div>
      </div>      
    </div>
  );
};

export default Destinations;