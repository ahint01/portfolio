import React from 'react';
import '../Portfolio.css' 
import Header from '../components/Header';
import Section from '../components/Section';
import Navbar from '../components/Navbar';

function Portfolio() {
  const currentProjects = [
    { title: 'InternetRuinsThings', description: 'Streetwear Shop' },
    { title: 'PrintDash', description: 'No printer? No problem' },
  ];

  const pastProjects = [
    { title: 'capperconnect.win', description: 'Connecting you to the top handicappers' },
  ];

  const freelanceWork = [
    { title: 'A Hint Devleopment', description: 'Self Owned Web App Development Business' },
    { title: 'Voice First Technology', description: 'Interactive Amazon Alexa Skills' },
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="main-content">
        <Section title="Coming Soon" items={currentProjects} />
        <Section title="Past Projects" items={pastProjects} />
        <Section title="Startups" items={freelanceWork} />
      </main>
    </div>
  );
}

export default Portfolio;
