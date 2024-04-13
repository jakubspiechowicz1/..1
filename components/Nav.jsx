'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation
import dynamic from 'next/dynamic';

// Dynamicznie załaduj TextReaderClient
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const { t } = useTranslation();

  // Zaktualizowana struktura linków, aby umożliwić łatwe włączenie TextReaderClient
  const links = [
    { path: '/', text: t('home') },
    { path: '/projects', text: t('myWorks') },
    { path: '/contact', text: t('contact') },
  ];

  const path = usePathname();
  
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} legacyBehavior>
          <a className={`capitalize ${linkStyles}`}>
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={underlineStyles}
              />
            )}
            {link.text}
            <TextReaderClient text={link.text} />
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
