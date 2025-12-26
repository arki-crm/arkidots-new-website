import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModularKitchen from './pages/ModularKitchen';
import FullHomeInteriors from './pages/FullHomeInteriors';
import KozhikodeInteriors from './pages/KozhikodeInteriors';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modular-kitchen" element={<ModularKitchen />} />
            <Route path="/full-home-interiors" element={<FullHomeInteriors />} />
            <Route path="/interior-designers-kozhikode" element={<KozhikodeInteriors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;