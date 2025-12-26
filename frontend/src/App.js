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
import HomeRenovation from './pages/HomeRenovation';
import CustomFurniture from './pages/CustomFurniture';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import ProjectDetail from './pages/ProjectDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import WarrantyPolicy from './pages/WarrantyPolicy';
import DesignIdeas from './pages/DesignIdeas';
import DesignCategory from './pages/DesignCategory';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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
            <Route path="/home-renovation" element={<HomeRenovation />} />
            <Route path="/custom-furniture" element={<CustomFurniture />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
            <Route path="/design-ideas" element={<DesignIdeas />} />
            <Route path="/design-ideas/:slug" element={<DesignCategory />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;