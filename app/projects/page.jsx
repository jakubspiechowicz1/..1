
'use client';
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
// Import TextReader dynamicznie
const TextReaderClient = dynamic(() => import('../../components/TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
import AccessibilityWidget from '@/components/Access/AccessibilityWidget';
import '../../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const Projects = () => {
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

  // Stan dla aktualnie wybranej kategorii
  const [selectedCategory, setSelectedCategory] = useState(t('allprojects'));

  // Przetłumaczone kategorie do wyświetlenia w zakładkach
  const [translatedCategories, setTranslatedCategories] = useState([]);

// Przygotowanie listy kategorii z tłumaczeniem
useEffect(() => {
  if (projectData.length > 0) { // Sprawdzamy, czy projectData nie jest puste, aby uniknąć nieskończonej pętli aktualizacji
    const categories = [t('allprojects'), ...new Set(projectData.map(item => item.category))];
    setTranslatedCategories(categories.map(category => t(category)));
  }
}, [t, JSON.stringify(projectData)]);

  // Filtrowanie projektów na podstawie wybranej kategorii
  const filteredProjects = projectData.filter(project => {
    if (selectedCategory === t('allprojects')) return true;
    return t(project.category) === selectedCategory;
  });

  return (
    <section className='min-h-screen pt-12'>
      <AccessibilityWidget />
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          {t('myWorks')}
          <TextReaderClient text={t('myWorks')} />
        </h2>
        <Tabs defaultValue={selectedCategory} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-full mb-12 mx-auto md:border dark:border-none'>
            {translatedCategories.map((category, index) => (
              <TabsTrigger
                onClick={() => setSelectedCategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'
              >
                {category}
                <TextReaderClient text={category} />
              </TabsTrigger>
            ))}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => (
              <TabsContent value={selectedCategory} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;