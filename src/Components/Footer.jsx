import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t('footer.about.title')}</h4>
          <p>{t('footer.about.description')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.help.title')}</h4>
          <ul>
            <li><a href="/contact">{t('footer.help.contact')}</a></li>
            <li><a href="/Privacy">{t('footer.help.privacy')}</a></li>  
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.connect.title')}</h4>
          <div className="social-links">
            <a href="https://x.com/y1hy1_1" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
            <a href="https://www.linkedin.com/in/yahya-elalaoui/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/Y1hy11" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default memo(Footer);