import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

import './index.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} /> {/* Redirect all other paths to Home for now */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;