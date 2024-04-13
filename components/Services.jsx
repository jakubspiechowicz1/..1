'use client';
import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// Import TextReader dynamicznie
const TextReaderClient = dynamic(() => import('./TextReader'), { ssr: false });
import dynamic from 'next/dynamic';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const Services = () => {
const { t } = useTranslation();
const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: t('customPaintingDesign'), // Tłumaczenie tytułu
    description: t('customPaintingDesignDescription'), // Tłumaczenie opisu
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: t('paintingWorkshops'), // Tłumaczenie tytułu
    description: t('paintingWorkshopsDescription'), // Tłumaczenie opisu
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: t('customPortraits'), // Tłumaczenie tytułu
    description: t('customPortraitsDescription'), // Tłumaczenie opisu
  },
];

return (
  <section className='mt-20 mb-12 xl:mb-36'>
    <div className='container mx-auto'>
      <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
        {t('myServices')} <TextReaderClient text={t('myServices')} />
      </h2>
      {/* grid items */}
      <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
        {servicesData.map((item, index) => {
          return (
            <Card
              className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
              key={index}
            >
              <CardHeader className='text-primary absolute -top-[60px]'>
                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className='text-center'>
                <CardTitle className='mb-4'>{item.title}</CardTitle>
                <CardDescription className='text-lg'>
                  {item.description}
                  <TextReaderClient text={item.description} />
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
};

export default Services;
