import React from 'react';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

const Portfolio: React.FC = () => {

  return (
    <>
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </>
  );
};

export default Portfolio;
