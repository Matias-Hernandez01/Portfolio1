import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Home, Aboutme, Projects, Tecnologias } from './view';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/technologies' element={<Tecnologias />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
