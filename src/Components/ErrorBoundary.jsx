// Import necessary dependencies
import { Component } from "react";
import { withTranslation } from "react-i18next";

/**
 * ErrorBoundary Component
 * A class component that catches JavaScript errors in child components
 * Provides fallback UI and error handling for runtime errors
 * Implements i18n translation for error messages
 */
class ErrorBoundary extends Component {
  // Initialize state to track error status
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /** Lifecycle method called when an error occurs **/
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /** Lifecycle method called after an error is caught **/
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Error caught by boundary:", error, errorInfo);
  }

  /** Renders either the error UI or the child components, Uses translation hook for internationalized error messages **/
  render() {
    const { t } = this.props;

    // Display error UI if an error occurred
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>{t("errorBoundary.title")}</h2>
          <p>{t("errorBoundary.message")}</p>
          <button onClick={() => window.location.reload()}>
            {t("errorBoundary.refreshButton")}
          </button>
        </div>
      );
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

// Wrap component with translation HOC for i18n support
export default withTranslation()(ErrorBoundary);