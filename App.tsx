import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Counters from './components/Counters';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Counters />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;