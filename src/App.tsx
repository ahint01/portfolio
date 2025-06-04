// App.tsx
import React from 'react';
// Make sure you import HashRouter here
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './index.css'; 

const App: React.FC = () => {
  return (
    // And use it here
    <Router> 
      <main>
        <Routes>
          {/* Your routes remain the same */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;