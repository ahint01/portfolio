import React from 'react';
import '../Portfolio.css' 
import Header from '../components/Header';
import Section from '../components/Section';
import Navbar from '../components/Navbar';

function Portfolio() {
  const upcomingProjects = [
    { title: 'Capper Connect', description: 'Connecting you to the top handicappers', link: 'https://youtu.be/SPNaL2Fjh1k' },
    { title: 'Superb Barbershop', description: 'Finest cuts in the city' },
  ];

  const currentProjects = [
    { title: 'Internet Ruins Things', description: 'Streetwear Shop', link: 'https://www.internetruinsthings.net' }
  ]

  const freelanceWork = [
    { title: 'A Hint Devleopment', description: 'Secure, high-performance web applications' },
    { title: 'Voice First Technology', description: 'Interactive Amazon Alexa Skills' },
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="main-content">
        <Section title="Coming Soon" items={upcomingProjects} />
        <Section title="Projects" items={currentProjects} />
        <Section title="Startups" items={freelanceWork} />
      </main>
    </div>
  );
}

export default Portfolio;
