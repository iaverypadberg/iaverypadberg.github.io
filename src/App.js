import React from 'react'
import About from './pages/About';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Bonus from './pages/Bonus';
import Books from './pages/Books';
import ProfessionalExperience from './pages/ProfessionalExperience';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import UnderConstruction from './pages/UnderConstruction';
function App() {
  return (
    <BrowserRouter basename='/iap'>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/task" element={<About />} />
        <Route path="/professional-exp" element={<ProfessionalExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/construction" element={<UnderConstruction />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;