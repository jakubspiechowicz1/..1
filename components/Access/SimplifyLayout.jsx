"use client";
import React, { useState } from 'react';

const SimplifyLayout = () => {
  const [isLayoutSimplified, setIsLayoutSimplified] = useState(false);

  const toggleSimplify = () => {
    setIsLayoutSimplified(!isLayoutSimplified);

    // Znajdź wszystkie elementy, które chcesz ukryć lub zmienić
    const images = document.querySelectorAll('img');
    const sidebars = document.querySelectorAll('.sidebar');
    const nonEssentialElements = document.querySelectorAll('.non-essential');

    if (!isLayoutSimplified) {
      // Uproszczony układ
      images.forEach(img => img.classList.add('hidden'));
      sidebars.forEach(sidebar => sidebar.classList.add('hidden'));
      nonEssentialElements.forEach(elem => elem.classList.add('hidden'));
    } else {
      // Przywróć normalny układ
      images.forEach(img => img.classList.remove('hidden'));
      sidebars.forEach(sidebar => sidebar.classList.remove('hidden'));
      nonEssentialElements.forEach(elem => elem.classList.remove('hidden'));
    }
  };

  return (
    <button 
      onClick={toggleSimplify}
      className={`h-full w-full flex z-10 absolute ${isLayoutSimplified ? '' : ''}`}
    >
      {isLayoutSimplified ? '' : ''}
    </button>
  );
};

export default SimplifyLayout;
