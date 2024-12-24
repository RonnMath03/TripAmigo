import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Custom from './components/Custom';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Destinations />
      <Custom />
      <Features />
      <About />
      <Stats />
      <Testimonials />
      <CallToAction />
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Contact Information */}
            <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-h3 font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-body">
                <p className="mb-2">TripAmigo, Gyan Prayag, Old Block, RCSS,</p>
                <p className="mb-2">Kalamassery, Ernakulam, Kerala</p>
              </address>
            </div>
            
            {/* Social Links */}
            <div className="w-full md:w-auto text-center md:text-right">
              <h3 className="text-h3 font-semibold mb-4">Connect With Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="mailto:contact.tripamigos@gmail.com" className="hover:text-blue-400 transition-colors">
                  <FaEnvelope size={24} />
                </a>
                <a href="https://instagram.com/tripamigo.in" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://wa.me/+917994206184" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <FaWhatsapp size={24} />
                </a>
                <a href="tel:+917994206184" className="hover:text-blue-400 transition-colors">
                  <FaPhone size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4 mt-4 text-center">
            <p className="text-small">Copyright © TripAmigo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;