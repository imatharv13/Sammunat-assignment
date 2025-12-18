import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm"; // New
import { InlineCTA } from "./components/InlineCTA"; // New
import FinalCTA from "./components/FinalCTA"; // New
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 1. Theme Initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
    }
  }, []);

  // 2. Persist Theme Choice
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Main Wrapper: 
          - transition-colors duration-700 makes the theme switch feel luxury/smooth 
          - bg-[#FAF9F6] is a 'Linen' white which looks more premium than pure white
      */}
      <div className="min-h-screen font-sans bg-[#FAF9F6] text-slate-900 dark:bg-[#0A0A0B] dark:text-slate-100 transition-colors duration-700 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          
          {/* Subtle secondary CTA between Hero and Stats */}
          <Stats />
          
          <InlineCTA /> 
          
          <Features />
          
          {/* The main conversion point */}
          <ContactForm />
          
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}