import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import { createPortal } from 'react-dom';
const VoiceControl = () => {
    const { i18n } = useTranslation();
    const [isListening, setIsListening] = useState(false);
    const [showCommands, setShowCommands] = useState(false);

  useEffect(() => {
    const initializeRecognition = () => {
      if ('webkitSpeechRecognition' in window) {
        const { webkitSpeechRecognition } = window;
        const recognition = new webkitSpeechRecognition();
        recognition.lang = i18n.language === 'pl' ? 'pl-PL' : 'en-US'; // Ustawienie języka na podstawie aktualnego języka i18n
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (event) => {
            let lastResult = event.results[event.resultIndex];
            if (lastResult.isFinal) {
                const command = lastResult[0].transcript.trim().toLowerCase();
                console.log('Recognized command:', command);
        
        // Definicje komend
        switch (command) {
            case 'przewiń w górę':
            case 'scroll up':
                window.scrollBy(0, -100);
                break;
            case 'przewiń w dół':
            case 'scroll down':
                window.scrollBy(0, 100);
                break;
            case 'wróć':
            case 'go back':
                if (window.history.length > 1) {
                    window.history.back();
                }
                break;
            case 'strona główna':
            case 'home':
                window.location.href = '/';
                break;
            case 'moje prace':
            case 'my works':
                window.location.href = '/projects';
                break;
                case 'kontakt':
                    case 'contact':
                        window.location.href = '/contact';
                        break;
            case 'Skontaktuj się':
            case 'contact me':
                window.location.href = '/contact';
                break;
            default:
                console.log('Unknown command');
                break;
        }
    }
};

        return recognition;
      } else {
        console.log('Your browser does not support Web Speech API');
        return null;
      }
    };

    let recognition = initializeRecognition();

    if (isListening && recognition) {
      recognition.start();
      console.log('Voice recognition started');
    } else if (recognition) {
      recognition.stop();
      console.log('Voice recognition stopped');
    }

    return () => {
      if (recognition) {
        recognition.stop();
        console.log('Voice recognition stopped');
      }
    };
  }, [isListening, i18n.language]); // Dodaj i18n.language jako zależność
  // Renderowanie dialogu z komendami

  
  const renderCommandsDialog = () => {
    return createPortal(
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md">
          <button
            onClick={() => setShowCommands(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200"
          >
            <FaIcons.FaTimes className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
          <h2 className="text-xl font-bold mb-4">Dostępne komendy głosowe</h2>
          <ul className="mb-4">
            <li>"Przewiń w górę" / "Scroll up"</li>
            <li>"Przewiń w dół" / "Scroll down"</li>
            <li>"Wróć" / "Go back"</li>
            <li>"Strona główna" / "Home"</li>
            <li>"Moje prace" / "My works"</li>
            <li>"Kontakt" / "Contact"</li>
            <li>"Skontaktuj się" / "Contact me"</li>
          </ul>
          <button
            onClick={() => setShowCommands(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Zamknij
          </button>
        </div>
      </div>,
      document.body
    );
  };

return (
    <div>
      <button onClick={() => setIsListening(!isListening)} className="h-full w-full flex z-10 absolute">
        {isListening ? '' : ''}
      </button>


      {isListening && createPortal(
        <div className="absolute bottom-0 left-0 w-auto flex items-center h-[60px] bg-red-500 p-2 shadow-md">
          <span className="text-white ">Sterowanie głosowe aktywne</span>
          <button onClick={() => setShowCommands(true)} className="ml-2 text-white ">
            <FaIcons.FaInfoCircle />
          </button>
        </div>,
        document.body
      )}

      {showCommands && renderCommandsDialog()}
    </div>
  );
};
export default VoiceControl;

