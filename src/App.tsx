import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import { ThemeProvider } from './context/ThemeContext';
import VapiChatWidget from './components/VapiChatWidget';
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  // VAPI configuration
  const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
  const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <LanguageProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Navbar scrolling={scrolling} />
            <main>
              <Routes>
                {/* Redirect root to Greek homepage */}
                <Route path="/" element={<Navigate to="/en" replace />} />

                {/* English routes */}
                <Route path="/en" element={<Home />} />
                <Route path="/en/portfolio" element={<Portfolio />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/legal" element={<Legal />} />

                {/* Greek routes */}
                <Route path="/el" element={<Home />} />
                <Route path="/el/portfolio" element={<Portfolio />} />
                <Route path="/el/contact" element={<Contact />} />
                <Route path="/el/legal" element={<Legal />} />
              </Routes>
            </main>
            <Footer />

            {/* Global Chat Widget - visible on all pages */}
            <VapiChatWidget
              apiKey={vapiApiKey}
              assistantId={assistantId}
            />

            <Analytics />
            <SpeedInsights />
          </div>
        </LanguageProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
