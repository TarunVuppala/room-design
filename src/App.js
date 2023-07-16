import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import NavigationBar from './NavigationBar';

import Carousel from './Carousel';
import Design from './Design';
import Cards from './cards';

import About from './about';

import ContactForm from './contact';

import ProductsPage from './products';

import FAQPage from './faq';

import TACPage from './termsAndCondn';

import PrivacyPolicyPage from './PrivacyPolicy';

import Room3D from './roomDesigning';

import Footer from './footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/termsAndCondn" element={<TACPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/roomDesigning" element={<Room3D />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <Carousel />
      <Design />
      <Cards />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default App;
