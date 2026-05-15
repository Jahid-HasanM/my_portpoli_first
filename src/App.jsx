import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import About from './components/About';



const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Portfolio />
    <About />
    <Services />
    <Pricing />
    <Contact />
    <Footer />
        </>
    
  );
};

export default App