import React from 'react';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
};

export default Home;