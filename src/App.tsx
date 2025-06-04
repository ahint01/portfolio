// App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './index.css'; 

const App: React.FC = () => {
  return (
    <Router> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;