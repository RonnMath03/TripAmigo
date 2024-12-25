import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Bus, Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24 bg-orange-100 mb-8"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-h2 text-orange-500 font-bold text-center mb-12">
            Why we're the First Choice for Travellers
          </h2>
        </div>
      </motion.div>  
      <div className="container py-16 mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center"
            >
              <motion.div 
                whileHover="hover"
                variants={iconVariants}
                className="inline-block p-3 rounded-full bg-white mb-4"
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-h3 font-semibold mb-2"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-body text-gray-600"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block absolute bottom-12 -left-20 z-0"
      >
        <img 
          src="./images/flight.png" 
          alt="" 
          className="h-24 md:h-32 w-auto object-cover"
          aria-hidden="true"
        />
      </motion.div>
      <div className="bg-white mt-16 md:mt-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-h3 text-orange-500 font-semibold mb-8 md:mb-12 text-center md:text-left">
            Ready for More? Explore All Our Benefits
          </h2>
        </motion.div>
      </div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center md:justify-end px-4 md:px-10 pb-8 md:pb-0 md:absolute md:-bottom-2"
      >
        <a href="https://wa.me/917994206184/?text=Hi,+I'm+excited+to+learn+more+about+the+benefits+you+offer.+Can+you+guide+me+on+how+to+get+started+?" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white text-button px-6 md:px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Start Your Adventure Now
          </motion.button> 
        </a>
      </motion.div>
    </div>
  );
};

export default Features;