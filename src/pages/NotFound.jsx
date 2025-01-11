import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="not-found">
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.message')}</p>
      <a href="/" className="btn">{t('notFound.homeButton')}</a>
    </div>
  );
};

export default NotFound;