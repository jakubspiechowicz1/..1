import React, { useState, useEffect } from 'react';

const BigText = () => {
  const [textSizePercentage, setTextSizePercentage] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${textSizePercentage}%`;
  }, [textSizePercentage]);

  const increaseTextSize = () => {
    if (textSizePercentage < 200) {
      setTextSizePercentage(textSizePercentage + 10);
    }
  };

  const decreaseTextSize = () => {
    if (textSizePercentage > 50) {
      setTextSizePercentage(textSizePercentage - 10);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md">
      <button 
        onClick={decreaseTextSize} 
        className="px-3 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300"
      >
        -
      </button>
      <span className="font-semibold text-gray-700 dark:text-gray-200">{textSizePercentage}%</span>
      <button 
        onClick={increaseTextSize} 
        className="px-3 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default BigText;
