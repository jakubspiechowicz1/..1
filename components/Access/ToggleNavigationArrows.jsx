// components/acces/ToggleNavigationArrows.jsx
"use client";
import React, { useState } from 'react';

const ToggleNavigationArrows = () => {
  const [arrowsVisible, setArrowsVisible] = useState(true);

  const toggleArrows = () => {
    // Przełączanie widoczności strzałek
    setArrowsVisible(!arrowsVisible);

    // Pobranie wszystkich strzałek na stronie
    const nextArrows = document.querySelectorAll('.swiper-button-next');
    const prevArrows = document.querySelectorAll('.swiper-button-prev');

    // Ustawienie stylu display dla wszystkich strzałek
    const displayStyle = arrowsVisible ? 'none' : 'flex'; // Zakładając, że strzałki są flexboxami
    nextArrows.forEach(arrow => arrow.style.display = displayStyle);
    prevArrows.forEach(arrow => arrow.style.display = displayStyle);
  };

  return (
    <button onClick={toggleArrows} className="h-full w-full flex z-10 absolute opacity-0">
      {arrowsVisible ? '' : ''}
    </button>
  );
};


export default ToggleNavigationArrows;