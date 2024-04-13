"use client"
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Import TextReader dynamicznie
// Import TextReader dynamicznie
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation
const About = () => {
  const { t } = useTranslation();
const infoData = [
  { icon: <User2 size={20} />, text: t('name') },
  { icon: <PhoneCall size={20} />, text: t('phone') },
  { icon: <MailIcon size={20} />, text: t('email') },
  { icon: <Calendar size={20} />, text: t('birthDate') },
  { icon: <GraduationCap size={20} />, text: t('degree') },
  { icon: <HomeIcon size={20} />, text: t('address') },
];

  const qualificationData = [
    {
      title: t('education'), // Tłumaczenie tytułu sekcji
      data: [
        {
          university: t('fineArtsAcademyWarsaw'), // Tłumaczenie nazwy uczelni
          qualification: t('bachelorOfFineArts'), // Tłumaczenie kwalifikacji
          years: '2002 - 2006', // Rok może zostać bez tłumaczenia
        },
        {
          university: t('fineArtsAcademyKrakow'),
          qualification: t('masterOfPainting'),
          years: '2006 - 2008',
        },
        {
          university: t('variousArtInstitutions'),
          qualification: t('coursesAndWorkshops'),
          years: '2009 - 2015',
        },
      ],
    },
  {
    title: t('experience'),
    data: [
      {
        company: t('modernArtGalleryWarsaw'),
        role: t('painter'),
        years: '2008 - 2012',
      },
      {
        company: t('contemporaryArtStudioKrakow'),
        role: t('artDepartmentManager'),
        years: '2013 - 2017',
      },
      {
        company: t('ownActivity'),
        role: t('independentPainter'),
        years: t('from') + ' 2018',
      },
    ],
  },
];

const skillData = [
  {
    title: t('skills'),
    data: [
      {
        name: t('portraits'),
      },
      {
        name: t('landscapes'),
      },
      {
        name: t('abstraction'),
      },
    ],
  },
  {
    title: t('techniques'),
    data: [
      {
        name: t('oil'),
      },
      {
        name: t('watercolor'),
      },
      {
        name: t('pastel'),
      },
    ],
  },
];


  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        {t('aboutMe')}
        <TextReaderClient text={t('aboutMe')} />
        </h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/pan2.webp'
            />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none h-auto'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                {t('information')}
                <TextReaderClient text={t('information')} />
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                {t('qualifications')}
                <TextReaderClient text={t('qualifications')} />
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                {t('skills')}
                <TextReaderClient text={t('skills')} />
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                    {t('patienceAndPrecision')} <TextReaderClient text={t('patienceAndPrecision')} />
                    </h3>

                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    {t('specializingInIntuitiveArtworks')} <TextReaderClient text={t('specializingInIntuitiveArtworks')} />
                    </p>

                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div className='ml-3'>{item.text}
                            <TextReaderClient text={item.text} /></div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>{t('foreignLanguages')} <TextReaderClient text={t('foreignLanguages')} /></div>
                      <div className='border-b border-border'></div>
                      <div>{t('languagesList')} <TextReaderClient text={t('languagesList')} /></div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                    {t('history')} <TextReaderClient text={t('history')} />
                    </h3>
                    {/* Doświadczenie & Edukacja wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* Doświadczenie */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, t('experience')).title}
                            <TextReaderClient text={t('experience')} />
                          </h4>
                         
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, t('experience')).data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              const fullText = `${item.company}, ${item.role}, ${item.years}`;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                      
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                      <TextReaderClient text={fullText} />
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Edukacja */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, t('education')).title}
                            <TextReaderClient text={t('education')} />
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, t('education')).data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              const fullTextuniversity = `${item.university}, ${item.qualification}, ${item.years}`;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                      <TextReaderClient text={fullTextuniversity} />
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>{t('howICreateHighQualityWork')}
                    <TextReaderClient text={t('howICreateHighQualityWork')} />
                    </h3>
                    
                    {/* skills */}
                    <div className='mb-7'>
                      <h4 className='text-xl font-semibold mb-2'>{t('skillsAndSpecializations')}
                      <TextReaderClient text={t('skillsAndSpecializations')} />
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, t('skills')).data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-4/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name} <TextReaderClient text={name} /></div>
                                
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  {/* techniki */}
                  <div>
                    <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                    {t('techniques')}
                    <TextReaderClient text={t('techniques')} />
                    </h4>
                    <div className='border-b border-border mb-4'></div>
                    {/* tool list */}
                    <div className='flex flex-wrap gap-x-8 justify-center xl:justify-start'>
                      {getData(skillData, t('techniques')).data.map((item, index) => {
                        const { name } = item; // Zakładając, że każdy element 'item' zawiera pole 'name'
                        return (
                          <div
                            className='w-4/4 text-center xl:text-left mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='font-medium'>{name} <TextReaderClient text={name} /></div>
                            
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
