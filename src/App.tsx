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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">123 Travel Street</p>
                <p className="mb-2">Adventure City, AC 12345</p>
                <p className="mb-2">United States</p>
              </address>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="mailto:info@tripamigo.com" className="hover:text-blue-400 transition-colors">
                  <FaEnvelope size={24} />
                </a>
                <a href="https://instagram.com/tripamigo" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <FaWhatsapp size={24} />
                </a>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  <FaPhone size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4 text-center">
            <p className="text-sm">Copyright © TripAmigo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;