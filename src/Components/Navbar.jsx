import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar({ isDarkMode, toggleTheme }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="logo">
            <img src="B2T-LOGO.png" alt="P2G-Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/Convert">Convert</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <select 
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

        <ul className="sidebar-links">
          <li><a href="/" onClick={toggleSidebar}>Home</a></li>
          <li><a href="/Convert" onClick={toggleSidebar}>Convert</a></li>
          <li><a href="/Contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </div>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;