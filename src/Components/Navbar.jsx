import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '../Context/ThemeContext';

/** Navbar Component - Main navigation component with responsive design **/
function Navbar({ language, changeLanguage }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  // Toggle sidebar visibility for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // SVG icons as components for theme toggle
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="navbar">
        {/* Logo/Brand Section */}
        <div className="navbar-brand">
          <a href="/" className="logo">
            <img src="B2T-LOGO.png" alt="B2T-Logo" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="/">{t("nav.home")}</a>
          </li>
          <li>
            <a href="/Convert">{t("nav.convert")}</a>
          </li>
          <li>
            <a href="/Contact">{t("nav.contact")}</a>
          </li>
        </ul>

        {/* Theme Toggle and Language Selection Controls */}
        <div className="navbar-right">
          <div className="desktop-controls">
            {/* Theme Toggle Button */}
            <div className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </div>

            {/* Language Selection Dropdown */}
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="menu-toggle" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <a href="/" onClick={toggleSidebar}>
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a href="/Convert" onClick={toggleSidebar}>
              {t("nav.convert")}
            </a>
          </li>
          <li>
            <a href="/Contact" onClick={toggleSidebar}>
              {t("nav.contact")}
            </a>
          </li>

          {/* Mobile Theme and Language Controls */}
          <li className="sidebar-controls">
            <div className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </div>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

export default Navbar;