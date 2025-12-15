import React from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import SolutionsOverview from '../components/home/SolutionsOverview';
import HowItWorksSummary from '../components/home/HowItWorksSummary';
import Testimonials from '../components/home/Testimonials';
import ContentTeaser from '../components/home/ContentTeaser';
import FinalCTA from '../components/home/FinalCTA';
import SectionDivider from '../components/ui/SectionDivider';

const Home = () => {
  return (
    <div className="home-page">
      <div id="home"><Hero /></div>
      <div id="features"><Benefits /></div>
      
      <SectionDivider 
        image="/divider-skyline.png"
        title="Alcance Global, Atendimento Local"
        subtitle="Conectamos sua empresa aos melhores destinos de negócios com suporte em tempo real."
      />

      <div id="solucoes"><SolutionsOverview /></div>
      <div id="como-funciona"><HowItWorksSummary /></div>
      <div id="depoimentos"><Testimonials /></div>
      <div id="conteudos"><ContentTeaser /></div>
      <div id="contato"><FinalCTA /></div>
    </div>
  );
};

export default Home;
