'use client';
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const TextReader = ({ text }) => {
  const { i18n } = useTranslation();
  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Mapowanie kodu języka i18next na kod języka używany w Web Speech API
      const langMap = {
        'en': 'en-US',
        'pl': 'pl-PL',
      };
      
      // Jeżeli język nie jest dostępny, użyj polskiego jako języka domyślnego
      const language = langMap[i18n.language] || 'pl-PL';
      utterance.lang = language;

      window.speechSynthesis.speak(utterance);
    } else {
      console.log("Twoja przeglądarka nie wspiera Web Speech API");
    }
  };

  return (
    <span 
      onClick={speakText} 
      className="text-reader text-xl p-0 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out focus:outline-none"
      aria-label="Odczytaj tekst"
      role="button"
      tabIndex="0"
    >
      🔊
    </span>
  );
};

export default TextReader;

