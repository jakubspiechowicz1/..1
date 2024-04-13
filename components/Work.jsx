'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
// import navigation
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// components
import ProjectCard from '@/components/ProjectCard';
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const Work = () => {
const { t } = useTranslation();
const projectData = [
  {
    image: '/work/pierwsza-praca.webp',
    category: t('portraitsWithReflection'),
    name: t('depthOfEmotions'),
    description: t('depthOfEmotionsDescription'),
    link: '/',
  },
  {
    image: '/work/druga-praca.webp',
    category: t('naturalLandscapes'),
    name: t('stormyReflections'),
    description: t('stormyReflectionsDescription'),
    link: '/',
  },
  {
    image: '/work/trzecia-praca.webp',
    category: t('naturalLandscapes'),
    name: t('mysticalMoonlitForest'),
    description: t('mysticalMoonlitForestDescription'),
    link: '/',
  },
  {
    image: '/work/czwarta-praca.webp',
    category: t('urbanAndSurrealLandscapes'),
    name: t('momentOfCalm'),
    description: t('momentOfCalmDescription'),
    link: '/',
  },
  {
    image: '/work/piąta-praca.webp',
    category: t('naturalLandscapes'),
    name: t('neonCityNight'),
    description: t('neonCityNightDescription'),
    link: '/',
  },
  {
    image: '/work/szósta-praca.webp',
    category: t('portraitsWithReflection'),
    name: t('expressionOfDetermination'),
    description: t('expressionOfDeterminationDescription'),
    link: '/',
  },
  {
    image: '/work/siódma-praca.webp',
    category: t('urbanAndSurrealLandscapes'),
    name: t('marketOfLife'),
    description: t('marketOfLifeDescription'),
    link: '/',
  },
  {
    image: '/work/ósma-praca.webp',
    category: t('portraitsWithReflection'),
    name: t('reflectionAndIntrospection'),
    description: t('reflectionAndIntrospectionDescription'),
    link: '/',
  },
  {
    image: '/work/dziewiąta-praca.webp',
    category: t('urbanAndSurrealLandscapes'),
    name: t('viewOfThePolytechnic'),
    description: t('viewOfThePolytechnicDescription'),
    link: '/',
  },
];


  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4 flex'>{t('latestWorks')} <TextReaderClient text={t('latestWorks')} /> </h2>
          <p className='subtitle mb-4'>
          {t('viewMyWork')}
            <TextReaderClient text={t('viewMyWork')} />
          </p>
          <Link href='/projects'>
            <Button>{t('allWorks')} </Button>
            
          </Link><TextReaderClient text={t('allWorks')} />
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0 '>
        <Swiper
        
            className='h-[510px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Navigation]} // Dodaj Navigation do modułów
            pagination={{ clickable: true }}
            navigation={true} // Włącz nawigację strzałkową
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
