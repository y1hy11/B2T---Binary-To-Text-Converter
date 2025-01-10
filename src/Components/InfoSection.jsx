import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function InfoSection() {
  const { t } = useTranslation();
  
  return (
    <div className="info-section">
      <h3 className="section-title">{t('infoSection.numbersMeaning.title')}</h3>

      <div className="info-grid">
        <div className="info-card">
          <h4>{t('infoSection.numbersMeaning.binary.title')}</h4>
          {t('infoSection.numbersMeaning.binary.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        <div className="info-card">
          <h4>{t('infoSection.numbersMeaning.hexadecimal.title')}</h4>
          {t('infoSection.numbersMeaning.hexadecimal.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        <div className="info-card">
          <h4>{t('infoSection.numbersMeaning.decimal.title')}</h4>
          {t('infoSection.numbersMeaning.decimal.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <h3 className="section-title">{t('infoSection.whyChoose.title')}</h3>
      <div className="info-grid">
        <div className="info-card">
          <h4>{t('infoSection.whyChoose.simple.title')}</h4>
          {t('infoSection.whyChoose.simple.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        <div className="info-card">
          <h4>{t('infoSection.whyChoose.learn.title')}</h4>
          {t('infoSection.whyChoose.learn.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        <div className="info-card">
          <h4>{t('infoSection.whyChoose.fast.title')}</h4>
          {t('infoSection.whyChoose.fast.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <h3 className="section-title">{t('infoSection.additionalFeatures.title')}</h3>
      <div className="info-grid">
        <div className="info-card">
          <h4>{t('infoSection.additionalFeatures.darkMode.title')}</h4>
          {t('infoSection.additionalFeatures.darkMode.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="info-card">
          <h4>{t('infoSection.additionalFeatures.responsiveDesign.title')}</h4>
          {t('infoSection.additionalFeatures.responsiveDesign.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

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

export default memo(InfoSection);