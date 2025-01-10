import { useState } from 'react';
import { convertText } from '../utils/utils';
import { useTranslation } from 'react-i18next';

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
  const [copyStatus, setCopyStatus] = useState(false);

  const handleConvert = () => {
    const result = convertText(input, inputType, outputType);
    setOutput(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const { t } = useTranslation();

  return (
    <div className="converter">
      <div className="converter-container">
        <div className="input-section">
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
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
          />
        </div>

        <button className="convert-btn" onClick={handleConvert}>
         {t('convert.convertButton')}
        </button>

        <div className="output-section">
          <div className="output-header">
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
            >
              <option value="text">{t('convert.options.text')}</option>
              <option value="binary">{t('convert.options.binary')}</option>
              <option value="hex">{t('convert.options.hex')}</option>
              <option value="decimal">{t('convert.options.decimal')}</option>
            </select>
            <button className="copy-button" onClick={handleCopy}>
              <i
                className={`bi ${copyStatus ? "bi-check" : "bi-clipboard"}`}
              ></i>
              {copyStatus ? t('convert.copied') : t('convert.copyButton')}
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder={t('convert.outputPlaceholder')}
          />
        </div>
      </div>
    </div>
  );
};

export default Convert;
