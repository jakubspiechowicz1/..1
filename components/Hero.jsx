"use client"
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { RiArrowDownSLine } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import Socials from './Socials';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

// Import TextReader dynamicznie
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });

const Hero = () => {
  const { t } = useTranslation();
  return (
  <section className='py-12 xl:py-24 h-[84vh] xl:pt-0 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
    <div className='container mx-auto'>
      <div className='flex justify-between gap-x-8'>
        <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
        <div className=' xl:text-left text-center mb-4'>
          <div className='text-sm uppercase font-semibold mb-0 text-primary tracking-[4px]'>
          {t('artistPainter')} {/* Klucz tłumaczenia */}
          </div>
          <TextReaderClient text={t('artistPainter')} />
          </div>
            <h1 className='h1 mb-4'>{t('greeting')} {/* Klucz tłumaczenia */} </h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
            {t('discoverMyPassion')} {/* Klucz tłumaczenia */}<br></br>
            <TextReaderClient text={t('discoverMyPassion')} />
            </p>
            
            {/* buttons */}
            <div className='flex flex-col md:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12 items-start'>
            <div className='flex flex-col items-center md:items-start'>
              <Link href='/contact'>
                <Button className='gap-x-2 mb-3 md:mb-0'>
                {t('contactMe')} {/* Klucz tłumaczenia */} <Send size={18} />
                </Button>
              </Link>
              <TextReaderClient text={t('contactMe')} />
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <Button variant='secondary' className='gap-x-2 mb-3 md:mb-0'>
              {t('downloadCV')}
                <Download size={18} />
              </Button>
              <TextReaderClient text={t('downloadCV')} />
            </div>
          </div>

            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative w-[80vh] h-[88vh]'>
          <div className="bg-hero_light dark:bg-hero_dark w-[80vh] h-[90vh] bg-no-repeat bg-center bg-cover absolute -top-1 -right-15"></div>
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
