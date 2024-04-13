"use client";
import React, { useState } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation


const ColorSchemeSwitcher = () => {
  const [selectedScheme, setSelectedScheme] = useState('default');

  const handleChange = (event) => {
    const scheme = event.target.value;
    setSelectedScheme(scheme);
    applyColorScheme(scheme);
  };

  const applyColorScheme = (scheme) => {
    const root = document.documentElement;
    switch (scheme) {
      case 'redGreenBlind':
        root.style.setProperty('--primary', '169, 99%, 67%');
        root.style.setProperty('--secondary', '46, 100%, 89%');
        root.style.setProperty('--background', '0, 0%, 98%');
        root.style.setProperty('--text', '210, 16%, 22%');
        break;
      case 'protanope':
        root.style.setProperty('--primary', '248, 68%, 56%');
        root.style.setProperty('--secondary', '45, 100%, 57%');
        root.style.setProperty('--background', '210, 16%, 90%');
        root.style.setProperty('--text', '210, 16%, 22%');
        break;
      case 'deutanope':
        root.style.setProperty('--primary', '340, 79%, 49%');
        root.style.setProperty('--secondary', '44, 100%, 64%');
        root.style.setProperty('--background', '210, 36%, 100%');
        root.style.setProperty('--text', '210, 16%, 10%');
        break;
      case 'tritanope':
        root.style.setProperty('--primary', '168, 84%, 32%');
        root.style.setProperty('--secondary', '262, 75%, 57%');
        root.style.setProperty('--background', '48, 100%, 92%');
        root.style.setProperty('--text', '210, 16%, 32%');
        break;
      default:
        // Resetuj do domyślnych kolorów
        root.style.removeProperty('--primary');
        root.style.removeProperty('--secondary');
        root.style.removeProperty('--background');
        root.style.removeProperty('--text');
        break;
    }
  };
  
  const { t } = useTranslation();
  return (
    
    <div>
      <label htmlFor="color-scheme-switcher" style={{ marginRight: '8px' }}>{t('selectColorScheme')}</label>
      <select id="color-scheme-switcher" value={selectedScheme} onChange={handleChange}>
        <option value="default">{t('defaultOption')}</option>
        <option value="redGreenBlind">{t('redGreenBlindOption')}</option>
        <option value="protanope">{t('protanopeOption')}</option>
        <option value="deutanope">{t('deutanopeOption')}</option>
        <option value="tritanope">{t('tritanopeOption')}</option>
      </select>
    </div>
  );
};

export default ColorSchemeSwitcher;
