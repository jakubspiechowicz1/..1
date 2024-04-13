'use client';
import React, { useState, useEffect } from 'react';

// components
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';


const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // Clean up the event listener
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header ? 'py-0 bg-white shadow-lg dark:bg-accent' : 'py-0 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className='container mx-auto min-h-[50px] flex justify-between items-center'>
        {/* Logo Section */}
        <div className='relative'>
          {/* For mobile and smaller devices */}
          <div className="bg-logo_light dark:bg-logo_dark w-[250px] h-[70px] bg-no-repeat bg-center bg-cover xl:hidden"></div>
          {/* For xl devices and up */}
          <div className="hidden xl:block relative bg-logo_light dark:bg-logo_dark w-[600px] h-[130px] bg-no-repeat bg-center bg-cover left-[-3vw]"></div>
        </div>

        {/* Navigation Section */}
        <div className='flex items-center gap-x-6'>
          {/* Desktop Navigation */}
          <Nav
            containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
          />
          {/* Mobile Navigation */}
          <div className='xl:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

