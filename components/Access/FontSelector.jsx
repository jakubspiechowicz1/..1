"use client";
import React, { useState, useEffect } from 'react';

const FontSelector = () => {
  const [selectedFont, setSelectedFont] = useState('default');

  const fonts = [
    { name: '__Outfit_cfacd3, __Outfit_Fallback_cfacd3', label: 'Domyślna/Default' },
    { name: 'Arial, sans-serif', label: 'Arial' },
    { name: '"Times New Roman", serif', label: 'Times New Roman' },
    { name: 'Georgia, serif', label: 'Georgia' },
    { name: 'Verdana, sans-serif', label: 'Verdana' },
    { name: 'Courier New, monospace', label: 'Courier New' },
    { name: 'Brush Script MT, cursive', label: 'Brush Script' },
    { name: 'Lucida Sans, sans-serif', label: 'Lucida Sans' },
    { name: 'Palatino Linotype, serif', label: 'Palatino Linotype' },
    { name: 'Garamond, serif', label: 'Garamond' },
    { name: 'Comic Sans MS, cursive', label: 'Comic Sans MS' },
    { name: 'Trebuchet MS, sans-serif', label: 'Trebuchet MS' },
  ];

  useEffect(() => {
    document.body.style.fontFamily = selectedFont;
  }, [selectedFont]);

  return (
    <div>
      <select
        onChange={(e) => setSelectedFont(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {fonts.map((font) => (
          <option key={font.name} value={font.name}>
            {font.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
