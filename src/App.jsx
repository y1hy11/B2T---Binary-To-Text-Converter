import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from 'react';
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorBoundary from './Components/ErrorBoundary';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { ThemeProvider } from './Context/ThemeContext';

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
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  useEffect(() => {
    const title = document.querySelector('title');
    if (title) {
      title.textContent = title.getAttribute(`data-${language}`) || title.getAttribute('data-en');
    }
  }, [language]);

  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <BrowserRouter>
            <div className="App">
              <Navbar 
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
        </ThemeProvider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;