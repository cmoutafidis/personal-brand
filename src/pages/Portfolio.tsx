import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';

const Portfolio: React.FC = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Certifications />
    </>
  );
};

export default Portfolio;