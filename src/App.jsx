import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services.jsx';
import About from './components/About.jsx';

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    </>
  );
};

export default App;
