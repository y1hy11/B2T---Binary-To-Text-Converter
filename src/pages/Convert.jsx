// Importing necessary dependencies
import { useState } from 'react';
import { convertText } from '../utils/utils';
import { useTranslation } from 'react-i18next';

/** Convert Component: A versatile text conversion tool that allows users to convert between different formats (text, binary, hex, decimal) with a user-friendly interface and internationalization support. **/
const Convert = ({
  input,
  setInput,
  output,
  inputType,
  outputType,
  setInputType,
  setOutputType,
  setOutput,
}) => {
  /** Copy operation status state, Tracks whether text has been copied to clipboard and Used to show feedback to user after copy operation **/
  const [copyStatus, setCopyStatus] = useState(false);

  /** Handles the conversion operation, Calls the utility function to convert between formats, Updates the output state with the conversion result **/
  const handleConvert = () => {
    const result = convertText(input, inputType, outputType);
    setOutput(result);
  };

  /** Handles copying output to clipboard **/
  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  /**
   * Translation hook for internationalization
   * Provides the t function to access translated strings
   */
  const { t } = useTranslation();

  /**
   * Component UI Rendering
   * Structured with input section, convert button, and output section
   */
  return (
    <div className="converter">
      <div className="converter-container">
        {/* Input Section: Format selector and text input area */}
        <div className="input-section">
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            aria-label={t('convert.inputFormatLabel')}
          >
            <option value="text">{t('convert.options.text')}</option>
            <option value="binary">{t('convert.options.binary')}</option>
            <option value="hex">{t('convert.options.hex')}</option>
            <option value="decimal">{t('convert.options.decimal')}</option>
          </select>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('convert.inputPlaceholder')}
            aria-label={t('convert.inputAreaLabel')}
          />
        </div>

        {/* Convert Button: Triggers conversion process */}
        <button 
          className="convert-btn" 
          onClick={handleConvert}
          aria-label={t('convert.convertButtonLabel')}
        >
         {t('convert.convertButton')}
        </button>

        {/* Output Section: Format selector, copy button and result display */}
        <div className="output-section">
          <div className="output-header">
            {/* Output format selector */}
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
              aria-label={t('convert.outputFormatLabel')}
            >
              <option value="text">{t('convert.options.text')}</option>
              <option value="binary">{t('convert.options.binary')}</option>
              <option value="hex">{t('convert.options.hex')}</option>
              <option value="decimal">{t('convert.options.decimal')}</option>
            </select>
                        <button               className="copy-button"               onClick={handleCopy}            >
              <i
                className={`bi ${copyStatus ? "bi-check" : "bi-clipboard"}`}
                aria-hidden="true"
              ></i>
              {copyStatus ? t('convert.copied') : t('convert.copyButton')}
            </button>
          </div>
          
          {/* Result display area (read-only) */}
          <textarea
            value={output}
            readOnly
            placeholder={t('convert.outputPlaceholder')}
            aria-label={t('convert.outputAreaLabel')}
          />
        </div>
      </div>
    </div>
  );
};

export default Convert;
