// Import necessary libraries and components
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

// --- SVG Icon Components (Updated with better SVGs from svgrepo.com) ---

const IconWrapper = ({ children }) => (
  <span style={{ margin: '8px', verticalAlign: 'middle', display: 'inline-block' }}>{children}</span>
);

// Question mark icon with modern design
const QuestionIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13V15M12 18V18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Binary code icon with modern look
const BinaryIcon = () => (
<svg width="32" height="30" fill="#0939b8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,11A3,3,0,0,0,7,8V6A3,3,0,0,0,1,6V8A3,3,0,0,0,4,11ZM3,6A1,1,0,0,1,5,6V8A1,1,0,0,1,3,8ZM19,6a3,3,0,0,0-6,0V8a3,3,0,0,0,6,0ZM17,8a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Zm-7,3a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0v6A1,1,0,0,1,10,11ZM23,4v6a1,1,0,0,1-2,0V4a1,1,0,0,1,2,0ZM7,18V16a3,3,0,0,0-6,0v2a3,3,0,0,0,6,0ZM3,18V16a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm6,0a3,3,0,0,0,6,0V16a3,3,0,0,0-6,0Zm2-2a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm12-2v6a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm-5-1a1,1,0,0,1,1,1v6a1,1,0,0,1-2,0V14A1,1,0,0,1,18,13Z"></path></g></svg>
);

// Hexadecimal icon with clean lines
const HexIcon = () => (
  <svg width="32" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.18,21.2519V15.5h-9a2,2,0,0,1-2-2v-9h-18a2,2,0,0,0-2,2v35a2,2,0,0,0,2,2h27a2,2,0,0,0,2-2V31.7834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="28.1799" y1="4.5" x2="39.1799" y2="15.5"/>
    <path d="M44.5861,18.0282a2.8444,2.8444,0,0,0-3.9051.8665L31.5655,33.2092,30.9127,39.5l5.4243-3.2523,9.1156-14.3145A3.0885,3.0885,0,0,0,44.5861,18.0282Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.5655,33.2092l4.7715,3.0385" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.9799" y1="39.4" x2="15.3799" y2="39.4"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.9799" y1="32.6" x2="15.3799" y2="32.6"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.9799" y1="36" x2="14.1967" y2="36"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.9799" y1="32.6" x2="11.9799" y2="39.4"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17.5799" y1="39.4" x2="20.9799" y2="39.4"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17.5799" y1="32.6" x2="20.9799" y2="32.6"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17.5799" y1="36" x2="19.7967" y2="36"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17.5799" y1="32.6" x2="17.5799" y2="39.4"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.1799" y1="32.6" x2="29.5799" y2="32.6"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.1799" y1="36" x2="28.3967" y2="36"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.1799" y1="32.6" x2="26.1799" y2="39.4"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.1799" y1="8.5401" x2="28.1799" y2="8.5401"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.1799" y1="11.9401" x2="28.1799" y2="11.9401"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.1799" y1="8.5401" x2="26.1799" y2="15.3401"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.6799" y1="15.2798" x2="13.7223" y2="8.5"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="15.6799" y1="15.3" x2="13.7223" y2="8.5"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="15.0251" y1="13.0253" x2="12.3591" y2="13.0253"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17.2799" y1="15.3199" x2="19.3223" y2="8.5401"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="21.2799" y1="15.3401" x2="19.3223" y2="8.5401"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="20.6251" y1="13.0654" x2="17.9591" y2="13.0654"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="32.5011" y1="27.3298" x2="34.5434" y2="20.55"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="36.1261" y1="26.0475" x2="34.5434" y2="20.55"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="35.8462" y1="25.0753" x2="33.1802" y2="25.0753"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.9799" y1="27.3399" x2="15.3799" y2="27.3399"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="11.9799" y1="21.4655" x2="13.6799" y2="20.5399"/>
    <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="13.6799" y1="20.5399" x2="13.6799" y2="27.3399"/>
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="19.8324" cy="25.0874" r="2.2525"/>
    <path d="M21.8859,21.3692a2.2,2.2,0,0,0-1.8953-.8293h-.1582A2.2525,2.2525,0,0,0,17.58,22.7924v2.295" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.18,22.7924a2.2525,2.2525,0,1,1,4.505,0,2.1016,2.1016,0,0,1-.66,1.5928c-.9112.8-3.8453,2.9547-3.8453,2.9547h4.505" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Decimal numbers icon
const DecimalIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7C9.79086 7 8 9.01472 8 11.5V12.5C8 14.9853 9.79086 17 12 17C14.2091 17 16 14.9853 16 12.5V11.5C16 9.01472 14.2091 7 12 7Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Sparkle icon for feature sections
const SparkleIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L6 6L2 8L6 10L8 14L10 10L14 8L10 6L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 14L15 16L13 17L15 18L16 20L17 18L19 17L17 16L16 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 4L17.5 6L16 7L17.5 8L18.5 10L19.5 8L21 7L19.5 6L18.5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Target icon for "Simple & Intuitive"
const TargetIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Book icon for "Learn As You Convert"
const BookIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Lightning bolt icon for "Fast & Efficient"
const BoltIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3L6 13H12L11 21L18 11H12L13 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Moon icon for "Dark Mode"
const MoonIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9548 12.9564C20.5779 15.3717 17.9791 17.0001 15.0001 17.0001C10.5818 17.0001 7.00006 13.4183 7.00006 9.00009C7.00006 6.02093 8.62833 3.42216 11.0437 2.04517C6.21968 2.35136 2.35046 6.21881 2.01556 11.043C2.01762 11.0256 2.00006 11.5148 2.00006 12.0001C2.00006 17.5229 6.47721 22.0001 12 22.0001C12.4852 22.0001 12.9745 21.9825 13.457 21.9465C18.2816 21.6099 22.149 17.7404 21.9548 12.9564Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Responsive design icon
const ResponsiveIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 2H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Clipboard icon for "Copy to Clipboard"
const ClipboardIcon = () => (
  <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4V6C8 7.10457 8.89543 8 10 8H14C15.1046 8 16 7.10457 16 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- End SVG Icon Components ---

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
      <h3 className="section-title">
        <IconWrapper><QuestionIcon /></IconWrapper>
        {t('infoSection.numbersMeaning.title')}
        <IconWrapper><QuestionIcon /></IconWrapper>
      </h3>
      <div className="info-grid">
        {/* Binary Information Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><BinaryIcon /></IconWrapper>
            {t('infoSection.numbersMeaning.binary.title')}
<IconWrapper><BinaryIcon /></IconWrapper>
          </h4>
          {/* Map through array of translated description paragraphs */}
          {t('infoSection.numbersMeaning.binary.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Hexadecimal Information Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><HexIcon /></IconWrapper>
            {t('infoSection.numbersMeaning.hexadecimal.title')}
            <IconWrapper><HexIcon /></IconWrapper>
          </h4>
          {t('infoSection.numbersMeaning.hexadecimal.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Decimal Information Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><DecimalIcon /></IconWrapper>
            {t('infoSection.numbersMeaning.decimal.title')}
            <IconWrapper><DecimalIcon /></IconWrapper>
          </h4>
          {t('infoSection.numbersMeaning.decimal.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Why Choose Our Tool Section */}
      <h3 className="section-title">
        <IconWrapper><SparkleIcon /></IconWrapper>
        {t('infoSection.whyChoose.title')}
        <IconWrapper><SparkleIcon /></IconWrapper>
      </h3>
      <div className="info-grid">
        {/* Simplicity Feature Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><TargetIcon /></IconWrapper>
            {t('infoSection.whyChoose.simple.title')}
            <IconWrapper><TargetIcon /></IconWrapper>
          </h4>
          {t('infoSection.whyChoose.simple.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Learning Feature Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><BookIcon /></IconWrapper>
            {t('infoSection.whyChoose.learn.title')}
            <IconWrapper><BookIcon /></IconWrapper>
          </h4>
          {t('infoSection.whyChoose.learn.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        
        {/* Performance Feature Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><BoltIcon /></IconWrapper>
            {t('infoSection.whyChoose.fast.title')}
            <IconWrapper><BoltIcon /></IconWrapper>
          </h4>
          {t('infoSection.whyChoose.fast.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Additional Features Section */}
      <h3 className="section-title">
        <IconWrapper><SparkleIcon /></IconWrapper> {/* Reusing SparkleIcon */}
        {t('infoSection.additionalFeatures.title')}
        <IconWrapper><SparkleIcon /></IconWrapper>
      </h3>
      <div className="info-grid">
        {/* Dark Mode Feature Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><MoonIcon /></IconWrapper>
            {t('infoSection.additionalFeatures.darkMode.title')}
            <IconWrapper><MoonIcon /></IconWrapper>
          </h4>
          {t('infoSection.additionalFeatures.darkMode.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Responsive Design Feature Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><ResponsiveIcon /></IconWrapper>
            {t('infoSection.additionalFeatures.responsiveDesign.title')}
            <IconWrapper><ResponsiveIcon /></IconWrapper>
          </h4>
          {t('infoSection.additionalFeatures.responsiveDesign.description', { returnObjects: true }).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Clipboard Feature Card */}
        <div className="info-card">
          <h4>
            <IconWrapper><ClipboardIcon /></IconWrapper>
            {t('infoSection.additionalFeatures.copyToClipboard.title')}
            <IconWrapper><ClipboardIcon /></IconWrapper>
          </h4>
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