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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.0007 21.9998C8.58075 21.9998 5.00075 18.4198 5.00075 13.9998C5.00075 10.4498 7.31075 7.44979 10.5007 6.49979C10.1607 7.44979 10.0007 8.44979 10.0007 9.49979C10.0007 14.1898 13.8107 17.9998 18.5007 17.9998C19.5507 17.9998 20.5507 17.8398 21.5007 17.4998C20.5507 20.0998 17.5507 21.9998 13.0007 21.9998Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SunIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 7H21M3 12H21M3 17H21" strokeWidth="2" strokeLinecap="round"/>
            </svg>
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