// Importing useTranslation hook from react-i18next
import { useTranslation } from "react-i18next";

// NotFound Component
const NotFound = () => {
  // Translation hook for internationalization
  const { t } = useTranslation();

  return (
    <div className="not-found">
      {/* Page title - 404 message */}
      <h1>{t("notFound.title")}</h1>

      {/* Explanation message for the user */}
      <p>{t("notFound.message")}</p>

      {/* Navigation link to return to homepage */}
      <a href="/" className="btn">
        {t("notFound.homeButton")}
      </a>
    </div>
  );
};

export default NotFound;