import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>{t('privacy.title')}</h1>
        <section>
          <h2>{t('privacy.introduction.title')}</h2>
          <p>{t('privacy.introduction.content')}</p>
        </section>

        <section>
          <h2>{t('privacy.collect.title')}</h2>
          <ul>
            {t('privacy.collect.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{t('privacy.usage.title')}</h2>
          <ul>
            {t('privacy.usage.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{t('privacy.security.title')}</h2>
          <p>{t('privacy.security.content')}</p>
        </section>

        <section>
          <h2>{t('privacy.cookies.title')}</h2>
          <p>{t('privacy.cookies.content')}</p>
        </section>

        <section>
          <h2>{t('privacy.thirdParty.title')}</h2>
          <p>{t('privacy.thirdParty.content')}</p>
        </section>

        <section>
          <h2>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.content')}</p>
        </section>

        <section>
          <h2>{t('privacy.updates.title')}</h2>
          <p>{t('privacy.updates.content')}</p>
        </section>

        <section>
          <h2>{t('privacy.contact.title')}</h2>
          <p>{t('privacy.contact.content')}</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;