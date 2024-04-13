import React, { useState, useEffect } from 'react';

const NumericKeypadControl = ({ enabled = false }) => {
  const [numericControlEnabled, setNumericControlEnabled] = useState(enabled);

  useEffect(() => {
    setNumericControlEnabled(enabled);
  }, [enabled]);

  const handleKeyDown = (e) => {
    if (!numericControlEnabled) return;

    e.preventDefault();
    const key = e.key;

    switch (key) {
      case '4':
        console.log('Kierunek: Lewo');
        // Tutaj dodaj logikę dla przewijania w lewo lub innej akcji
        break;
      case '8':
        console.log('Kierunek: Góra');
        window.scrollBy(0, -100); // Przewija stronę w górę o 100px
        break;
      case '6':
        console.log('Kierunek: Prawo');
        // Tutaj dodaj logikę dla przewijania w prawo lub innej akcji
        break;
      case '2':
        console.log('Kierunek: Dół');
        window.scrollBy(0, 100); // Przewija stronę w dół o 100px
        break;
      default:
        // Nie reaguj na inne klawisze
        break;
    }
  };

  useEffect(() => {
    // Dodanie nasłuchiwania na zdarzenie keydown, gdy komponent jest montowany
    document.addEventListener('keydown', handleKeyDown);

    // Usunięcie nasłuchiwania na zdarzenie keydown, gdy komponent jest odmontowywany
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [numericControlEnabled]); // Efekt będzie ponownie uruchamiany przy zmianie tego stanu

  return (
    <div style={{ }}>
      <button
        onClick={() => setNumericControlEnabled(!numericControlEnabled)}
        className="h-full w-full flex z-10 absolute"
      >
        {numericControlEnabled ? '' : ''}
      </button>
    </div>
  );
};

export default NumericKeypadControl;
