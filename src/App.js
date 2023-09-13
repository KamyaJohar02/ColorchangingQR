import React, { useState } from 'react';
import ColorSelector from './colorselector';
import './MyQRCode.css';
import MyQRCode from './MyQRCode';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="QR_box">
      <ColorSelector onColorChange={handleColorChange} />

      <div className="qr-container">
        <MyQRCode
          linkedinURL="https://in.linkedin.com/in/kamyajohar"
          selectedColor={selectedColor}
          logoURL="https://shorturl.at/cjAQY"
          eyeRadius={8}
        />
        <div className="circular-image-container">
          <img
            src="https://shorturl.at/cjAQY"
            alt="Logo"
            className="circular-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
