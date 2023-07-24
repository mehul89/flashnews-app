import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';



function App() {

  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#110f16';
    } else {
      document.body.style.backgroundColor = 'aliceblue';
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Router>
      <Analytics />
        <Navbar handleDarkModeToggle={handleDarkModeToggle} darkMode={darkMode} />
        <Routes>
          <Route exact path="/" element={<News pageSize={5} country="in" key="general" category="general" darkMode={darkMode} />} />
          <Route exact path="/business" element={<News pageSize={5} country="in" key="business" category="business" darkMode={darkMode} />} />
          <Route exact path="/entertainment" element={<News pageSize={5} country="in" key="entertainment" category="entertainment" darkMode={darkMode} />} />
          <Route exact path="/health" element={<News pageSize={5} country="in" key="health" category="health" darkMode={darkMode} />} />
          <Route exact path="/science" element={<News pageSize={5} country="in" key="science" category="science" darkMode={darkMode} />} />
          <Route exact path="/sports" element={<News pageSize={5} country="in" key="sports" category="sports" darkMode={darkMode} />} />
          <Route exact path="/technology" element={<News pageSize={5} country="in" key="technology" category="technology" darkMode={darkMode} />} />
        </Routes>
      </Router>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
