import Socials from './Socials';
// Import TextReader dynamicznie
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright &copy; Marek Kowalski All rights reserved. <TextReaderClient text="Copyright Marek Kowalski All rights reserved." />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
