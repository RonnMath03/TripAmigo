import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="pb-10 bg-white relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-32 bg-orange-100 mb-10 relative z-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-h2 font-bold text-orange-500"
          >
            BTW, Who are you?
          </motion.p>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src='./images/team.png'
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h2 
              variants={textVariants}
              className="text-h3 md:text-h2 font-bold mb-6"
            >
              ABOUT US
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-body mb-6"
            >
              We're a bunch of seasoned travelers. When we mapped out our trips, we found that travel agencies tend to charge sky-high rates. But hey, we're not ones to settle for that! By handling our bookings ourselves - hotels, buses, and dining - we slashed costs by nearly 50%. And guess what? We indulged in even fancier stays and dining spots! 
            </motion.p>
            <motion.p 
              variants={textVariants}
              className="text-body mb-8"
            >
              Realising this gap, Trip Amigo was born. Our mission? To dish out affordable travel options for all. With Trip Amigo, we craft tailor-made adventures that go beyond the ordinary. And the kicker? Our prices? They beat all the ones you stumble upon online. 
            </motion.p>
            <motion.p 
              variants={textVariants}
              className="text-body mb-8"
            >
              Ready to join us? Let's make unforgettable memories, one adventure at a time, without breaking the bank!
            </motion.p>
            <motion.div
              variants={textVariants}
            >
              <a href="https://wa.me/917994206184/?text=Hi,+I+would+like+to+plan+a+trip+with+your+team.+Please+guide+me+on+how+to+get+started+?" 
                 target="_blank" 
                 rel="noopener noreferrer"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white text-button px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Lets Plan Your Trip
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 right-0 z-0"
      >
        <img 
          src="./images/mount.png" 
          alt="" 
          className="h-56 w-auto object-cover"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
};

export default About;