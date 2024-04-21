import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NeglementetPage from './pages/Neglementet';
import BlogPage from './pages/Blog';
import CasesPage from './pages/Cases';
import ForsidePage from './pages/Forside';
import KontaktPage from './pages/Kontakt';
import OmPage from './pages/Om';
import ServicePage from './pages/Services';
import Navigation from './components/Navigation';
import TeamPage from './pages/Team';
import BaredygtigPage from './pages/Baredygtig';
import { Helmet } from 'react-helmet';
import Fire04Page from './components/Fire04';



function App() {
  return (
    <>
    <ScrollToTop />
     <Navigation />
     <Helmet>
        <title>Avenir</title>
        <link rel="icon" type="image/png" href="/assets/Images/logoAVENIR.png" />
      </Helmet>
     <Routes>
        <Route path="/" element={<ForsidePage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/cases" element={<CasesPage/>} />
        <Route path="/kontakt" element={<KontaktPage/>} />
        <Route path="/om" element={<OmPage/>} />
        <Route path="/baredygtig" element={<BaredygtigPage/>} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/404" element={<Fire04Page/>} />
        <Route path="/neglementet" element={<NeglementetPage/>} />    
        <Route path="*" element={<Navigate to="/"/>} />
     </Routes>
    </>
  )
}

export default App;