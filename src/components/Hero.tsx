import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const images = [
  { url: './images/1.webp', fallback: './images/1.jpg' },
  { url: './images/2.webp', fallback: './images/2.jpg' },
  { url: './images/4.webp', fallback: './images/4.jpg' }
];

const Hero = () => {
  const [imageStates, setImageStates] = useState(
    images.map(img => ({ loaded: false, error: false, currentSrc: img.url }))
  );

  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.url;
      
      img.onload = () => {
        setImageStates(prev => prev.map((state, i) => 
          i === index ? { ...state, loaded: true, currentSrc: image.url } : state
        ));
      };

      img.onerror = () => {
        const fallbackImg = new Image();
        fallbackImg.src = image.fallback;
        
        fallbackImg.onload = () => {
          setImageStates(prev => prev.map((state, i) => 
            i === index ? { ...state, loaded: true, currentSrc: image.fallback } : state
          ));
        };
      };
    });
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/70">
        <div className="grid grid-cols-3 h-full overflow-hidden">
          {imageStates.map((imageState, i) => (
            <AnimatePresence key={i}>
              {imageState.loaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  style={{
                    backgroundImage: `url(${imageState.currentSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.5)'
                  }}
                  className="h-full w-full transform-gpu"
                />
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div className="max-w-2xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6 }}
            className="text-h2 sm:text-h1 md:text-display font-bold text-white mb-6"
          >
            Memorable Group Journeys, Expertly Crafted By TripAmigo
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-large text-white mb-8"
          >
            More than trip planners — we're your travel partners. From start to finish, we've got your back.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://wa.me/917994206184/?text=Hi,+I+am+interested+in+planning+a+trip+with+your+assistance+.+Can+you+help+me+get+started+?" 
               target="_blank" 
               rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white text-button px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Plan Your Trip
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        onClick={scrollToNext}
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-white"
      >
        <FaChevronDown size={24} />
      </motion.div>
    </div>
  );
};

export default Hero;