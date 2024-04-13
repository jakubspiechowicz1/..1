'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';
import TextReader from '../components/TextReader';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const Reviews = () => {
const { t } = useTranslation();
const reviewsData = [
  {
    avatar: '/reviews/kobieta.webp',
    name: 'Anna Nowak',
    job: t('job1'),
    review:
      t('testimonial1'),
  },
  {
    avatar: '/reviews/mezczyzna.webp',
    name: 'Piotr Wiśniewski',
    job: t('job2'),
    review:
      t('testimonial2'),
  },
  {
    avatar: '/reviews/kobieta.webp',
    name: 'Ewa Kubiak',
    job: t('job3'),
    review:
      t('testimonial3'),
  },
  {
    avatar: '/reviews/mezczyzna.webp',
    name: 'Piotr Skuza',
    job: t('job4'),
    review:
      t('testimonial4'),
  },
];

return (
  <section className='mb-12 xl:mb-32'>
    <div className='container mx-auto'>
      <h2 className='section-title mb-12 text-center mx-auto'>
        {t('testimonials')} <TextReader text={t('testimonials')} />
      </h2>
      {/* slider */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1400: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        className='h-[350px]'
      >
        {reviewsData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                <CardHeader className='p-0 mb-10'>
                  <div className='flex items-center gap-x-4'>
                    {/* image */}
                    <Image
                      src={person.avatar}
                      width={70}
                      height={70}
                      alt=''
                      priority
                    />
                    {/* name and job */}
                    <div className='flex flex-col'>
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className='text-lg text-muted-foreground'>
                  {person.review}
                </CardDescription>
                {/* TextReader button */}
                <TextReader text={person.review} />
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </section>
);
};

export default Reviews;
