import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Add this import

function Navbar({ isDarkMode, toggleTheme, language, changeLanguage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="logo">
            <img src="B2T-LOGO.png" alt="B2T-Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/">{t('nav.home')}</a></li>
          <li><a href="/Convert">{t('nav.convert')}</a></li>
          <li><a href="/Contact">{t('nav.contact')}</a></li>
        </ul>
        <div className="navbar-right">
          <div className="desktop-controls">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
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
          </div>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="/" onClick={toggleSidebar}>{t('nav.home')}</a></li>
          <li><a href="/Convert" onClick={toggleSidebar}>{t('nav.convert')}</a></li>
          <li><a href="/Contact" onClick={toggleSidebar}>{t('nav.contact')}</a></li>
          <li className="sidebar-controls">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
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
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;