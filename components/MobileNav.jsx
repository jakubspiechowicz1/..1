'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
          <div className="flex justify-center items-center w-full">
  <div className="bg-logo_light dark:bg-logo_dark bg-no-repeat bg-center bg-cover" style={{ width: '250px', height: '70px' }}></div>
</div>
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
            />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
