import React from 'react'
import About from './pages/About';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Bonus from './pages/Bonus';
import Books from './pages/Books';
import ProfessionalExperience from './pages/ProfessionalExperience';
import { Route, Link, BrowserRouter, Routes, HashRouter } from 'react-router-dom'
import Contact from './pages/Contact';
import UnderConstruction from './pages/UnderConstruction';
import Impatience from './pages/writing/Impatience';
import Skills from './pages/Skills';
import Testing from './pages/Testing';
import Resume from './pages/Resume';
function App() {
  return (
    <div>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/professional-exp" element={<ProfessionalExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bonus" element={<Bonus />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/books/impatience" element={<Impatience />} />
          <Route path="/construction" element={<UnderConstruction />} />
          <Route path="/testing" element={<Testing />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;