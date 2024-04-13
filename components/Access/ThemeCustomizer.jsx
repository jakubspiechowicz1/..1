import React, { useState } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const ThemeCustomizer = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Domyślny kolor tła
  const [fontColor, setFontColor] = useState('#000000'); // Domyślny kolor czcionki

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
    document.body.style.color = e.target.value;
  };
  const { t } = useTranslation();
  return (
    <div className="flex p-4 w-[500px]">
      <div className="flex-1 mr-4">
        <label htmlFor="background-color-picker" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{t('bgcolor')}</label>
        <input type="color" id="background-color-picker" name="background-color-picker" value={backgroundColor} onChange={handleBackgroundColorChange} className="w-full h-8 border-none cursor-pointer"/>
      </div>

      <div className="flex-1">
        <label htmlFor="font-color-picker" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{t('fontcolor')}</label>
        <input type="color" id="font-color-picker" name="font-color-picker" value={fontColor} onChange={handleFontColorChange} className="w-full h-8 border-none cursor-pointer"/>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
