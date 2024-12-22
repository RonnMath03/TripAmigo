import React from 'react';
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
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-sm">Copyright © TripAmigo</p>
      </footer>
    </div>
  );
}

export default App;