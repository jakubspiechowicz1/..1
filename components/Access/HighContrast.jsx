// components/HighContrast
"use client";
import React from 'react';
import { useTheme } from 'next-themes';

const HighContrast = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>

      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="h-full w-full flex z-10 absolute opacity-0">
      {theme ? '' : ''}
    </button>
    </div>
  );
};

export default HighContrast;