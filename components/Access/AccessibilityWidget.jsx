"use client";
import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import HighContrast from './HighContrast';
import BigText from './BigText';
import StopAnimation from './StopAnimation';
import ToggleNavigationArrows from './ToggleNavigationArrows';
import ToggleTextReader from './ToggleTextReader';
import UseTranslation from './UseTranslation';
import FontSelector from './FontSelector';
import ThemeCustomizer from './ThemeCustomizer';
import SaturationControl from './SaturationControl';
import NumericKeyPadControl from './NumericKeyPadControl';
import VoiceControl from './VoiceControl';
import ColorSchemeSwitcher from './ColorSchemeSwitcher';
import SimplifyLayout from './SimplifyLayout';
const TextReaderClient = dynamic(() => import('../TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
import '../i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const AccessibilityWidget = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userMenuOpen2, setUserMenuOpen2] = useState(false);
  const [userMenuOpen3, setUserMenuOpen3] = useState(false);
  const [userMenuOpen4, setUserMenuOpen4] = useState(false);
  const [userMenuOpen5, setUserMenuOpen5] = useState(false);
  const [userMenuOpen6, setUserMenuOpen6] = useState(false);
  const [voiceMenuOpen, setvoiceMenuOpen] = useState(false);
  const [colorsSettingOpen, setcolorsSettingOpen] = useState(false);
  const [insideSettingOpen, setinsideSettingOpen] = useState(false);
  // Dodaj stany dla efektów ułatwień dostępu
  const [highContrastEnabled, setHighContrastEnabled] = useState(false);
  const [bigTextEnabled, setBigTextEnabled] = useState(false);
  const [stopAnimationEnabled, setStopAnimationEnabled] = useState(false);
  const [navigationArrowsEnabled, setNavigationArrowsEnabled] = useState(false);
  const [textReaderEnabled, setTextReaderEnabled] = useState(false);
  const [UseTranslationEnabled, setUseTranslationEnabled] = useState(false);
  const [NumericKeyPadControlEnabled, setNumericKeyPadControlEnabled] = useState(false);
  const [VoiceControlEnabled, setVoiceControlEnabled] = useState(false);
  const [ColorSchemeSwitcherEnabled, setColorSchemeSwitcherEnabled] = useState(false);
  const [SimplifyLayoutEnabled, setSimplifyLayoutEnabled] = useState(false);

  // Efekty są domyślnie wyłączone, więc nie musisz ich tutaj włączać
  // Możesz dodać logikę do przełączania stanów tutaj, jeśli potrzebujesz
  const { t } = useTranslation();
  return (
    
    <div className="fixed right-4 bottom-4 z-50 max-h-[80vh] overflow-y-auto">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transform transition-all duration-500 hover:scale-105"
      >
        <FaIcons.FaUniversalAccess className="mr-2 text-xl" />
        <TextReaderClient text={t('access')} />{t('access')}
      </button>

      {menuOpen && (
        <div className="mt-2 bg-white shadow-2xl rounded-lg overflow-y-auto md:right-4 lg:right-4 xl:right-4 2xl:right-4 xl:w-[40vw] w-[90vw] " >
          <ul className="text-gray-700">
            <li className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-t-lg">
              <div className="flex items-center">
                <FaIcons.FaGlobe className="text-3xl" />
                <span className="ml-3">
                <TextReaderClient text={t('translation')} />{t('translation')}
                </span>
                <li className="flex text-black items-center p-0 ml-5 hover:bg-blue-500">
                  <UseTranslation enabled={UseTranslationEnabled} />
                </li>
              </div>
            </li>
        {/* Profile Ustawień Dostępu */}
        <li className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <div className="flex items-center justify-center min-w-[40px]">
            <FaIcons.FaUserCog className="text-3xl text-blue-500" />
          </div>
          <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="ml-3 focus:outline-none text-lg"><TextReaderClient text={t('profileAccessibilitySettings')} />{t('profileAccessibilitySettings')}</button>
        </li>
        {userMenuOpen && (
          <div className="">
            {/* Ślepota */}
            <li className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <div className="p-2 rounded-full bg-blue-100">
                <FaIcons.FaBlind className="text-3xl text-blue-500" />
              </div>
              <button onClick={() => setUserMenuOpen2(!userMenuOpen2)} className="ml-3 focus:outline-none text-lg">
              <TextReaderClient text={t('blindness')} />{t('blindness')}
              </button>
            </li>
            {userMenuOpen2 && (
              <div className="ml-3 flex">
                {/* Czytnik Tekstu */}
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"><ToggleTextReader enabled={textReaderEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('textReaderDescription')} />{t('textReaderDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaBookReader className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('textReader')}
                    </span>
                  </div>
                </li>

                {/* Nawigacja strzałkami */}
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <NumericKeyPadControl enabled={NumericKeyPadControlEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('numericKeypadControlDescription')} />{t('numericKeypadControlDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaKeyboard className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('numericKeypadControl')}
                    </span>
                  </div>
                </li>


              </div>
            )}


<li className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <div className="p-2 rounded-full bg-blue-100">
                <FaIcons.FaHandPointer className="text-3xl text-blue-500" />
              </div>
              <button onClick={() => setUserMenuOpen3(!userMenuOpen3)} className="ml-3 focus:outline-none text-lg">
              <TextReaderClient text={t('motorImpairment')} />{t('motorImpairment')}
              </button>
            </li>
            {userMenuOpen3 && (
              <div className="ml-3 flex">
                {/* Czytnik Tekstu */}
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"><ToggleTextReader enabled={textReaderEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('textReaderDescription')} />{t('textReaderDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaBookReader className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('textReader')}
                    </span>
                  </div>
                </li>

                {/* Nawigacja strzałkami */}
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <NumericKeyPadControl enabled={NumericKeyPadControlEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('numericKeypadControlDescription')} />{t('numericKeypadControlDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaKeyboard className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('numericKeypadControl')}
                    </span>
                  </div>
                </li>

                {/* sterowanie głosem */}
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <VoiceControl enabled={VoiceControlEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('voiceControl')} />{t('voiceControl')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaMicrophone className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('voiceControl')}
                    </span>
                  </div>
                </li>


              </div>
            )}


<li className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <div className="p-2 rounded-full bg-blue-100">
                <FaIcons.FaAdjust className="text-3xl text-blue-500" />
              </div>
              <button onClick={() => setUserMenuOpen4(!userMenuOpen4)} className="ml-3 focus:outline-none text-lg">
              <TextReaderClient text={t('colorBlindnessSetting')} />{t('colorBlindnessSetting')}
              </button>
            </li>
            {userMenuOpen4 && (
              <div className="ml-3 flex">


                {/* ThemeCustomizer */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaPaintBrush className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <ColorSchemeSwitcher />
                </li>

                {/* Kontrast */}

                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <HighContrast enabled={highContrastEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('contrastSwitcherDescription')} />{t('contrastSwitcherDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaAdjust className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('lightDarkContrast')}
                    </span>
                  </div>
                </li>
              </div>
            )}



<li className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <div className="p-2 rounded-full bg-blue-100">
                <FaIcons.FaLowVision className="text-3xl text-blue-500" />
              </div>
              <button onClick={() => setUserMenuOpen5(!userMenuOpen5)} className="ml-3 focus:outline-none text-lg">
              <TextReaderClient text={t('visualImpairment')} />{t('visualImpairment')}
              </button>
            </li>
            {userMenuOpen5 && (
              <div className="ml-3 flex">
                <div className="">

                {/* Większy Tekst */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaTextHeight className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <BigText enabled={bigTextEnabled} />
                </li>
                {/* FontSelector */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaFont className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <FontSelector />
                </li>
                </div>
                {/* Kontrast */}

                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <HighContrast enabled={highContrastEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('contrastSwitcherDescription')} />{t('contrastSwitcherDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaAdjust className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('lightDarkContrast')}
                    </span>
                  </div>
                </li>
              </div>
            )}


<li className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <div className="p-2 rounded-full bg-blue-100">
                <FaIcons.FaBrain className="text-3xl text-blue-500" />
              </div>
              <button onClick={() => setUserMenuOpen6(!userMenuOpen6)} className="ml-3 focus:outline-none text-lg">
              <TextReaderClient text={t('adhdSetting')} />{t('adhdSetting')}
              </button>
            </li>
            {userMenuOpen6 && (
              <div className="ml-3 flex">
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <StopAnimation enabled={stopAnimationEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('stopAnimationDescription')} />{t('stopAnimationDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaStopCircle className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    <TextReaderClient text={t('animationStopper')} />{t('animationStopper')}
                    </span>
                  </div>
                </li>

            {/* simplify */}
            <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <SimplifyLayout enabled={SimplifyLayoutEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('simplifyLayout')} />{t('simplifyLayout')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaGripLines className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    <TextReaderClient text={t('simplifyLayoutDescription')} />{t('simplifyLayoutDescription')}
                    </span>
                  </div>
                </li>
              </div>
            )}


              </div>
            )}
            {/* Ustawienia Głosu i Nawigacji */}
            <li className="flex items-center p-4 hover:bg-gray-100">
              <FaIcons.FaMicrophone className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
              <button onClick={() => setvoiceMenuOpen(!voiceMenuOpen)} className="focus:outline-none">
              <TextReaderClient text={t('voiceAndNavigationSettings')} />{t('voiceAndNavigationSettings')}
              </button>
            </li>
            {voiceMenuOpen && (
              <div className="ml-8 xl:flex block">
                {/* Czytnik Tekstu */}
                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"><ToggleTextReader enabled={textReaderEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('textReaderDescription')} />{t('textReaderDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaBookReader className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('textReader')}
                    </span>
                  </div>
                </li>



                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <StopAnimation enabled={stopAnimationEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('stopAnimationDescription')} />{t('stopAnimationDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaStopCircle className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    <TextReaderClient text={t('animationStopper')} />{t('animationStopper')}
                    </span>
                  </div>
                </li>


                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <ToggleNavigationArrows enabled={navigationArrowsEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('arrowsSliderDescription')} />{t('arrowsSliderDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaArrowsAltH className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    <TextReaderClient text={t('sliderarrows')} />{t('sliderarrows')}
                    </span>
                  </div>
                </li>

              </div>
            )}
            {/* Ustawienia Kolorów */}
            <li className="flex items-center p-4 hover:bg-gray-100">
              <FaIcons.FaPalette className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
              <button onClick={() => setcolorsSettingOpen(!colorsSettingOpen)} className="focus:outline-none">
              <TextReaderClient text={t('colorSettings')} />{t('colorSettings')}
              </button>
            </li>
            {colorsSettingOpen && (
              <div className="ml-8">
                {/* Kontrast */}

                <li className="group relative w-32 h-32 bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <HighContrast enabled={highContrastEnabled} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex justify-center items-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                    <TextReaderClient text={t('contrastSwitcherDescription')} />{t('contrastSwitcherDescription')}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full z-10 p-4">
                    <FaIcons.FaAdjust className="text-4xl text-blue-500" />
                    <span className="text-center mt-2 text-gray-700">
                    {t('lightDarkContrast')}
                    </span>
                  </div>
                </li>


                {/* SaturationControl */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaSlidersH className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <SaturationControl />
                </li>
                {/* ThemeCustomizer */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaPaintBrush className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <ThemeCustomizer />
                </li>
              </div>
            )}
            {/* Ustawienia Zawartości */}
            <li className="flex items-center p-4 hover:bg-gray-100">
              <FaIcons.FaPencilRuler className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
              <button onClick={() => setinsideSettingOpen(!insideSettingOpen)} className="focus:outline-none">
              <TextReaderClient text={t('contentSettings')} />{t('contentSettings')}
              </button>
            </li>
            {insideSettingOpen && (
              <div className="ml-8">
                {/* Większy Tekst */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaTextHeight className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <BigText enabled={bigTextEnabled} /><span>
                  <TextReaderClient text={t('biggerText')} />{t('biggerText')}
                  </span>
                </li>
                {/* FontSelector */}
                <li className="flex items-center p-4 hover:bg-gray-100">
                  <FaIcons.FaFont className="mr-3 text-3xl text-blue-500" /> {/* Zmieniona ikonka i kolor */}
                  <FontSelector />
                </li>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
