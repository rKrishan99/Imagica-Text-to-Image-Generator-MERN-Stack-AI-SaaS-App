import React from 'react'
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import IntroSection from '../components/IntroSection';
import Testimonals from '../components/Testimonals';

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <IntroSection />
      <Testimonals />
    </div>
  )
}

export default Home;