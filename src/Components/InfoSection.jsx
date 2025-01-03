import { memo } from 'react';

function InfoSection() {
  return (
    <div className="info-section">
            <h3 className="section-title">🤔 What do these numbers mean?</h3>

      <div className="info-grid">
        <div className="info-card">
          <h4>💻 Binary (Base-2)</h4>
          <p>The computer's language - just 0s and 1s!</p>
          <p>Like a light switch: ON (1) or OFF (0)</p>
          <p>Quick example: Hello → 01001000 01100101 01101100 01101100 01101111</p>
        </div>
        
        <div className="info-card">
          <h4>🔢 Hexadecimal (Base-16)</h4>
          <p>A shorter way to write binary numbers using 0-9 and A-F</p>
          <p>Makes long binary numbers easier to read</p>
          <p>Quick example: Hello → 48 65 6C 6C 6F</p>
        </div>
        
        <div className="info-card">
          <h4>🔢 Decimal (Base-10)</h4>
          <p>Our everyday numbers (0-9)</p>
          <p>What we use to count and do math</p>
          <p>Quick example: Hello → 72 101 108 108 111</p>
        </div>
      </div>

      <h3 className="section-title">✨ Why Choose B2T?</h3>
      <div className="info-grid">
        <div className="info-card">
          <h4>🎯 Simple & Intuitive</h4>
          <p>Clean, modern interface</p>
          <p>No complex setup needed</p>
          <p>Start converting instantly!</p>
        </div>
        
        <div className="info-card">
          <h4>📚 Learn As You Convert</h4>
          <p>Understanding different number systems</p>
          <p>See conversions in real-time</p>
          <p>Perfect for students and developers</p>
        </div>
        
        <div className="info-card">
          <h4>⚡ Lightning Fast</h4>
          <p>Instant conversions</p>
          <p>No page reloads needed</p>
          <p>Convert multiple numbers at once</p>
        </div>
      </div>

      <h3 className="section-title">🚀 Additional Features</h3>
      <div className="info-grid">
        <div className="info-card">
          <h4>🌓 Dark Mode</h4>
          <p>Easy on your eyes</p>
          <p>Perfect for night coding</p>
          <p>Toggle with one click</p>
        </div>

        <div className="info-card">
          <h4>📱 Responsive Design</h4>
          <p>Works on all devices</p>
          <p>Mobile-friendly interface</p>
          <p>Smooth experience everywhere</p>
        </div>

        <div className="info-card">
          <h4>📋 Copy to Clipboard</h4>
          <p>One-click copying</p>
          <p>Easy to share results</p>
          <p>No manual selection needed</p>
        </div>
      </div>
    </div>
  );
}

export default memo(InfoSection);