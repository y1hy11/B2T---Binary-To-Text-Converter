// imports necessary dependencies and components
import { Link } from "react-router-dom";
import InfoSection from "../Components/InfoSection";
import { useTranslation } from "react-i18next";

// Home Component
function Home() {
  //Translation hook for internationalization
  const { t } = useTranslation();

  // Render the Home component
  return (
    <>
      <main>
        {/* Page title and subtitle */}
        <h1>{t("home.title")}</h1>
        <p>{t("home.subtitle")}</p>

        {/* Navigation button to the Convert page */}
        <Link to="/Convert" className="btn">
          {t("home.getStarted")}
        </Link>
      </main>

      {/* Additional information section */}
      <InfoSection />
    </>
  );
}

export default Home;