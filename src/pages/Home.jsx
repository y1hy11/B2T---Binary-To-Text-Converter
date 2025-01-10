import { Link } from 'react-router-dom';
import InfoSection from '../Components/InfoSection';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <main>
        <h1>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
        <Link to="/Convert" className="btn">{t('home.getStarted')}</Link>
      </main>
      <InfoSection />
    </>
  );
}

export default Home;