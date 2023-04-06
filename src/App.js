import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { NotFound } from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
     <Footer />
    </Router>
  );
}

export default App;
