import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Services from './components/Services';
import Footer from './components/footer';
import Hero from './components/Banner';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <toolbar />
        <Hero />
        <Team />
        <Services id="services" />
        <Contact id="contacto" />
        <Footer />
      </main>

    </HashRouter>
  );
}

export default App;
