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
              <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1288L10.9098 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7928 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yahya-elalaoui/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.47 2H3.53C2.69 2 2 2.69 2 3.53V20.47C2 21.31 2.69 22 3.53 22H20.47C21.31 22 22 21.31 22 20.47V3.53C22 2.69 21.31 2 20.47 2ZM8.09 18.74H5.07V9.42H8.09V18.74ZM6.59 8.16C5.61 8.16 4.82 7.37 4.82 6.39C4.82 5.41 5.61 4.62 6.59 4.62C7.57 4.62 8.36 5.41 8.36 6.39C8.36 7.37 7.57 8.16 6.59 8.16ZM18.91 18.74H15.89V14.47C15.89 13.31 15.87 11.81 14.27 11.81C12.65 11.81 12.38 13.07 12.38 14.37V18.74H9.36V9.42H12.26V10.81H12.3C12.75 10.01 13.77 9.17 15.27 9.17C18.33 9.17 18.91 11.21 18.91 13.85V18.74Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://github.com/Y1hy11"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.571 21.128 10.285 22V18.143C9.799 18.289 9.369 18.436 8.99 18.291C8.419 18.077 8.07 17.276 7.708 16.623C7.478 16.23 7.063 16.212 6.939 16.224L6.765 14.747C7.57 14.667 8.269 15.053 8.769 15.897C9.02 16.307 9.203 16.924 9.682 17.073C10.133 17.214 10.578 17.023 10.928 16.884C11.013 16.104 11.354 15.799 11.698 15.349C8.505 14.741 7.149 12.773 7.149 10.573C7.149 9.553 7.489 8.577 8.11 7.754C7.926 6.787 7.695 5.053 8.193 4.511C9.516 4.386 10.947 5.505 11.101 5.633C11.846 5.428 12.674 5.318 13.578 5.318C14.484 5.318 15.313 5.428 16.061 5.635C16.334 5.425 17.659 4.441 18.87 4.56C19.361 5.102 19.137 6.789 18.962 7.765C19.591 8.589 19.937 9.571 19.937 10.591C19.937 12.794 18.574 14.765 15.373 15.365C15.773 15.887 16.203 16.731 16.203 17.745V22C20.916 21.128 24.486 16.991 24.486 12C24.486 6.477 20.009 2 14.486 2H12Z" fill="currentColor"/>
              </svg>
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