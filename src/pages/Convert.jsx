import { useState } from 'react';
import { convertText } from '../utils/utils';

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
    setTimeout(() => setCopyStatus(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="converter">
      <div className="converter-container">
        <div className="input-section">
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="binary">Binary</option>
            <option value="hex">Hexadecimal</option>
            <option value="decimal">Decimal</option>
          </select>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your input here"
          />
        </div>

        <button className="convert-btn" onClick={handleConvert}>
          Convert →
        </button>

        <div className="output-section">
          <div className="output-header">
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="binary">Binary</option>
              <option value="hex">Hexadecimal</option>
              <option value="decimal">Decimal</option>
            </select>
            <button className="copy-button" onClick={handleCopy}>
              <i
                className={`bi ${copyStatus ? "bi-check" : "bi-clipboard"}`}
              ></i>
              {copyStatus ? "Copied " : "Copy"}
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Output will appear here"
          />
        </div>
      </div>
    </div>
  );
};

export default Convert;
