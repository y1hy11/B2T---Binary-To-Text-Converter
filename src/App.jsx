import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from 'react';
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorBoundary from './Components/ErrorBoundary';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

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
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
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

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <div className="App">
            <Navbar 
              isDarkMode={isDarkMode} 
              toggleTheme={toggleTheme}
              language={language}
              changeLanguage={changeLanguage}
            />
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
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;