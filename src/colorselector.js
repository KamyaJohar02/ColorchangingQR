import 'tailwindcss/tailwind.css';
import React from 'react';

function ColorSelector({ onColorChange }) {
  const handleColorChange = (color) => {
    onColorChange(color);
  };

  return (
    <div>
      {/* Color circles */}
      <div
        className="color-circle"
        style={{ backgroundColor: 'red' }}
        onClick={() => handleColorChange('red')}
      ></div>
      <div
        className='color-circle'
        style={{ backgroundColor: 'blue' }}
        onClick={() => handleColorChange('blue')}
      ></div>
      <div
        className='color-circle'
        style={{ backgroundColor: 'green' }}
        onClick={() => handleColorChange('green')}
      ></div>
      <div
        className='color-circle'
        style={{ backgroundColor: 'yellow' }}
        onClick={() => handleColorChange('yellow')}
      ></div>

<div
        className='color-circle'
        style={{ backgroundColor: 'pink' }}
        onClick={() => handleColorChange('pink')}
      ></div>
      <div
        className='color-circle'
        style={{ backgroundColor: 'purple' }}
        onClick={() => handleColorChange('purple')}
      ></div>
    </div>
  );
}

export default ColorSelector;
