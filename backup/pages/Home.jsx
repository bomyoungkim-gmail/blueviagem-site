import React from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import SolutionsOverview from '../components/home/SolutionsOverview';
import HowItWorksSummary from '../components/home/HowItWorksSummary';
import Testimonials from '../components/home/Testimonials';
import ContentTeaser from '../components/home/ContentTeaser';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Benefits />
      <SolutionsOverview />
      <HowItWorksSummary />
      <Testimonials />
      <ContentTeaser />
      <FinalCTA />
    </div>
  );
};

export default Home;
