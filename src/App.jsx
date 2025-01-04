import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from 'react';
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorBoundary from './Components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Convert = lazy(() => import('./pages/Convert'));
const Contact = lazy(() => import('./pages/Contact'));
const InfoSection = lazy(() => import('./Components/InfoSection'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("text");
  const [output, setOutput] = useState("");
  const [outputType, setOutputType] = useState("binary");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Suspense fallback={
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              } />
              <Route path="/Convert" element={
                <ErrorBoundary>
                  <Convert
                    input={input}
                    setInput={setInput}
                    output={output}
                    inputType={inputType}
                    outputType={outputType}
                    setInputType={setInputType}
                    setOutputType={setOutputType}
                    setOutput={setOutput}
                  />
                </ErrorBoundary>
              } />
              <Route path="/contact" element={<Contact />} />
              <Route path="/InfoSection" element={<InfoSection />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;