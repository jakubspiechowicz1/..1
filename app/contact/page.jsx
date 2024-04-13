'use client';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import dynamic from 'next/dynamic';
import AccessibilityWidget from '@/components/Access/AccessibilityWidget';
import '../../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

// Dynamicznie załaduj TextReaderClient
const TextReaderClient = dynamic(() => import('../../components/TextReader'), { ssr: false });

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-contact_illustration_light dark:bg-contact_illustration_dark bg-cover bg-center p-10 text-white">
      <AccessibilityWidget />
      <div className="max-w-4xl backdrop-blur-md bg-black/40 p-8 rounded-lg space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-center">{t('contactMe')} <TextReaderClient text={t('contactMe')} /></h1>
        <p>
          {t('passiontopainting')} <TextReaderClient text={t('passiontopainting')} />
        </p>
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-x-2">
            <MailIcon size={24} />
            <span>marek.kowalski@kowalski.pl</span>
            <TextReaderClient text='marek.kowalski@kowalski.pl' />
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <HomeIcon size={24} />
            <span>{t('address')}</span>
            <TextReaderClient text={t('address')} />
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <PhoneCall size={24} />
            <span>{t('phone')}</span>
            <TextReaderClient text={t('phone')} />
          </div>
        </div>
        {/* Bezpośrednio zdefiniowany komponent Form z ulepszeniami */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder={t('firstname')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <input
            type="email"
            placeholder={t('mail')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <textarea
            placeholder={t('message')}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-150"
          >
            {t('send')}
          </button>
        </form>
        <TextReaderClient text={t('sendfrom')} />
      </div>
    </section>
  );
};

export default Contact;