// Import necessary libraries and components
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * InfoSection Component
 * Displays informational content about number systems and features
 * Implements i18n translation for multilingual support
 * Uses grid layout for responsive card-based information display
 */
function InfoSection() {
  // Initialize translation hook for i18n support
  const { t } = useTranslation();
  
  return (
    <div className="info-section">
      {/* Number Systems Explanation Section */}
      <h3 className="section-title">{t('infoSection.numbersMeaning.title')}</h3>
      <div className="info-grid">
        {/* Binary Information Card */}
        <div className="info-card">
          <h4>{t('infoSection.numbersMeaning.binary.title')}</h4>
          {/* Map through array of translated description paragraphs */}
          {t('infoSection.numbersMeaning.binary.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Hexadecimal Information Card */}
        <div className="info-card">
          <h4>{t('infoSection.numbersMeaning.hexadecimal.title')}</h4>
          {t('infoSection.numbersMeaning.hexadecimal.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Decimal Information Card */}
        <div className="info-card">
          <h4>{t('infoSection.numbersMeaning.decimal.title')}</h4>
          {t('infoSection.numbersMeaning.decimal.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Why Choose Our Tool Section */}
      <h3 className="section-title">{t('infoSection.whyChoose.title')}</h3>
      <div className="info-grid">
        {/* Simplicity Feature Card */}
        <div className="info-card">
          <h4>{t('infoSection.whyChoose.simple.title')}</h4>
          {t('infoSection.whyChoose.simple.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Learning Feature Card */}
        <div className="info-card">
          <h4>{t('infoSection.whyChoose.learn.title')}</h4>
          {t('infoSection.whyChoose.learn.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Performance Feature Card */}
        <div className="info-card">
          <h4>{t('infoSection.whyChoose.fast.title')}</h4>
          {t('infoSection.whyChoose.fast.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Additional Features Section */}
      <h3 className="section-title">{t('infoSection.additionalFeatures.title')}</h3>
      <div className="info-grid">
        {/* Dark Mode Feature Card */}
        <div className="info-card">
          <h4>{t('infoSection.additionalFeatures.darkMode.title')}</h4>
          {t('infoSection.additionalFeatures.darkMode.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Responsive Design Feature Card */}
        <div className="info-card">
          <h4>{t('infoSection.additionalFeatures.responsiveDesign.title')}</h4>
          {t('infoSection.additionalFeatures.responsiveDesign.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Clipboard Feature Card */}
        <div className="info-card">
          <h4>{t('infoSection.additionalFeatures.copyToClipboard.title')}</h4>
          {t('infoSection.additionalFeatures.copyToClipboard.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export memoized component to prevent unnecessary re-renders
export default memo(InfoSection);