import React, { useState, useEffect } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const SaturationControl = () => {
  const [saturation, setSaturation] = useState(100); // Procent nasycenia od 0 do 100

  useEffect(() => {
    document.documentElement.style.filter = `saturate(${saturation}%)`;
  }, [saturation]);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center space-y-4">
      <label htmlFor="saturation">{t('saturation')} {saturation}%</label>
      <input
        id="saturation"
        type="range"
        min="0"
        max="200"
        value={saturation}
        onChange={(e) => setSaturation(e.target.value)}
        className="w-64"
      />
    </div>
  );
};

export default SaturationControl;
