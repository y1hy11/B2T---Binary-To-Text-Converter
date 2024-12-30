import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>B2T</h4>
          <p>B2T Converter is an online Binary, Hex, Deci, Text conversion tool</p>
        </div>

        <div className="footer-section">
          <h4>Help & Support</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/Privacy">Privacy Policy</a></li>  
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://x.com/y1hy1_1" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
            <a href="https://www.linkedin.com/in/yahya-elalaoui/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/Y1hy11" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} | B2T | All rights reserved.</p>
      </div>
    </footer>
  );
};

// Wrap Footer component with React.memo() since it's static
export default memo(Footer);