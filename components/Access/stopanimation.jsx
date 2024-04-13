"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const StopAnimation = () => {
  const [isAnimationStopped, setIsAnimationStopped] = useState(false);

  useEffect(() => {
    if (isAnimationStopped) {
      document.body.classList.add('animation-paused');
    } else {
      document.body.classList.remove('animation-paused');
    }
  }, [isAnimationStopped]);

  return (
    <Button 
      onClick={() => setIsAnimationStopped(!isAnimationStopped)}
      className={`h-full w-full flex z-10 absolute opacity-0 ${isAnimationStopped ? '' : ''}`}
    >
      {isAnimationStopped ? '' : ''}
    </Button>
  );
};

export default StopAnimation;