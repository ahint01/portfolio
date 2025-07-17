import React from 'react';
import '../Portfolio.css' 
import Header from '../components/Header';
import Section from '../components/Section';
import Navbar from '../components/Navbar';

function Portfolio() {
  const currentProjects = [
    { title: 'Capper Connect', description: 'Connecting you to the top handicappers' },
    { title: 'InternetRuinsThings', description: 'Streetwear Shop' },
    { title: 'Superb Barbershop', description: 'Finest cuts in the city' },
    { title: 'QuickDocs', description: 'No printer? No problem' },
  ];

  const freelanceWork = [
    { title: 'A Hint Devleopment', description: 'Secure, high-performance web applications' },
    { title: 'Voice First Technology', description: 'Interactive Amazon Alexa Skills' },
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="main-content">
        <Section title="Coming Soon" items={currentProjects} />
        <Section title="Startups" items={freelanceWork} />
      </main>
    </div>
  );
}

export default Portfolio;
