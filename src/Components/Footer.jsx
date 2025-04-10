// Import necessary libraries and hooks
import { memo } from "react";
import { useTranslation } from "react-i18next";

/** Footer Component - Renders the website footer with about, help, and social media sections **/
const Footer = () => {
  // Initialize translation hook
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h4>{t("footer.about.title")}</h4>
          <p>{t("footer.about.description")}</p>
        </div>

        {/* Help Section - Navigation Links */}
        <div className="footer-section">
          <h4>{t("footer.help.title")}</h4>
          <ul>
            <li>
              <a href="/contact">{t("footer.help.contact")}</a>
            </li>
            <li>
              <a href="/Privacy">{t("footer.help.privacy")}</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-section">
          <h4>{t("footer.connect.title")}</h4>
          <div className="social-links">
            <a
              href="https://x.com/y1hy1_1"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yahya-elalaoui/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Y1hy11"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

// Export memoized component to optimize performance
export default memo(Footer);