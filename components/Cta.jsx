'use client';
import { Button } from './ui/button';
import Link from 'next/link';
// Import TextReader dynamicznie
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const Cta = () => {
  const { t } = useTranslation();
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
          {t('ready')} <TextReaderClient text={t('ready')} />
          </h2>
          <Link href='/contact'>
            <Button>{t('contactMe')}</Button>
          </Link>
          <TextReaderClient text={t('contactMe')} />
        </div>
      </div>
    </section>
  );
};

export default Cta;
