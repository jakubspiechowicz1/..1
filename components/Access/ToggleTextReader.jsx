import React from 'react';

const ToggleTextReader = () => {
  const toggleTextReader = () => {
    const textReaders = document.querySelectorAll('.text-reader');
    
    textReaders.forEach(textReader => {

      textReader.classList.toggle('text-reader-visible');
    });
  };

  return (
    <button onClick={toggleTextReader} className="h-full w-full flex z-10 absolute">

    </button>
  );
};

export default ToggleTextReader;
