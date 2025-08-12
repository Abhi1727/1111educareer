import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProgramDetail from './pages/ProgramDetail';

const App = () => {
  return (
    <Router>
      <Layout>
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs/:programId" element={<ProgramDetail />} />
          </Routes>
        </main>
      </Layout>
    </Router>
  );
};

export default App;
