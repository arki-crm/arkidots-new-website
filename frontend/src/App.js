import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModularKitchen from './pages/ModularKitchen';
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
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;