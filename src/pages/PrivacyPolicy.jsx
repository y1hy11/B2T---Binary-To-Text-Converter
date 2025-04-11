// Importing useTranslation hook from react-i18next
import { useTranslation } from "react-i18next";

// PrivacyPolicy Component
const PrivacyPolicy = () => {
  // Initialize the translation hook to access localized content
  const { t } = useTranslation();

  return (
    <div className="privacy-container">
      <div className="privacy-content">
        {/* Main title for the privacy policy page */}
        <h1>{t("privacy.title")}</h1>

        {/* Introduction section */}
        <section>
          <h2>{t("privacy.introduction.title")}</h2>
          <p>{t("privacy.introduction.content")}</p>
        </section>

        {/* Information collection section with list items */}
        <section>
          <h2>{t("privacy.collect.title")}</h2>
          <ul>
            {/* Map through translated array of items using returnObjects option */}
            {t("privacy.collect.items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </section>

        {/* Data usage section with list items */}
        <section>
          <h2>{t("privacy.usage.title")}</h2>
          <ul>
            {t("privacy.usage.items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </section>

        {/* Security practices section */}
        <section>
          <h2>{t("privacy.security.title")}</h2>
          <p>{t("privacy.security.content")}</p>
        </section>

        {/* Cookie policy section */}
        <section>
          <h2>{t("privacy.cookies.title")}</h2>
          <p>{t("privacy.cookies.content")}</p>
        </section>

        {/* Third party relationships section */}
        <section>
          <h2>{t("privacy.thirdParty.title")}</h2>
          <p>{t("privacy.thirdParty.content")}</p>
        </section>

        {/* User rights section */}
        <section>
          <h2>{t("privacy.rights.title")}</h2>
          <p>{t("privacy.rights.content")}</p>
        </section>

        {/* Policy updates section */}
        <section>
          <h2>{t("privacy.updates.title")}</h2>
          <p>{t("privacy.updates.content")}</p>
        </section>

        {/* Contact information section */}
        <section>
          <h2>{t("privacy.contact.title")}</h2>
          <p>{t("privacy.contact.content")}</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;