import React from 'react';
import { useTranslation } from 'react-i18next';

const UseTranslation = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex  items-center">
      <label htmlFor="language-select" className="mb-2 text-gray-700"></label>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className="cursor-pointer rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
};

export default UseTranslation;
