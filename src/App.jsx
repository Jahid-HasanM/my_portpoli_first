import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Portfolio />
    <Services />
    <Footer />
    </>
    
  );
};

export default App