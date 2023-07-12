import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, Aboutme, Projects, Tecnologias } from './view';
import { useLocation } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/technologies' element={<Tecnologias />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
