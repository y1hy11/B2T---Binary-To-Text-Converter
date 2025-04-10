import { useState } from "react";
import { useTranslation } from "react-i18next";

/** Navbar Component - Main navigation component with responsive design **/
function Navbar({ isDarkMode, toggleTheme, language, changeLanguage }) {
  // State for controlling mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Initialize translation hook
  const { t } = useTranslation();

  // Toggle sidebar visibility for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>

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
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>
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