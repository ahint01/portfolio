import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'

import './index.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} /> {/* Redirect all other paths to Home for now */}
        </Routes>
      </main>
      {/* <Footer /> We'll remove header/footer for the coming soon page for simplicity */}
    </Router>
  );
};

export default App;