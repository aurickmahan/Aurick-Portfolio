/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-on-surface selection:bg-secondary selection:text-on-secondary flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
          
          <ContactSection />
        </main>

        <Footer />
      </div>
    </Router>
  );
}
