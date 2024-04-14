import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import BlogPage from './pages/Blog';
import CasesPage from './pages/Cases';
import ForsidePage from './pages/Forside';
import KontaktPage from './pages/Kontakt';
import OmPage from './pages/Om';
import ServicePage from './pages/Services';
import Navigation from './components/Navigation';
function App() {

  return (
    <>
     <Navigation />
     <Routes>
        <Route path="/" element={<ForsidePage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/cases" element={<CasesPage/>} />
        <Route path="/kontakt" element={<KontaktPage/>} />
        <Route path="/om" element={<OmPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="*" element={<Navigate to="/"/>} />
     </Routes>
    </>
  )
}

export default App;