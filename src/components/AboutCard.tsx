'use client';

import { useSpotify } from '@/hooks/useSpotify';
import waving from '../assets/alexvloure-waving_upscaled.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function AboutCard() {
  const { t } = useTranslation('global');

  return (
    <div className="relative col-span-3 bg-[#F5F5F7] dark:bg-[#010101] md:aspect-auto aspect-square md:row-span-2 rounded-3xl overflow-hidden transition duration-300 ease-in-out">
      <Image
        src={waving}
        alt="alexvloure waving"
        className="absolute bottom-16 -right-44 md:auto object-cover -z-0 hidden lg:flex transform -rotate-[38deg]"
        width={500}
        height={500}
        draggable="false"
        placeholder="blur"
        loading="eager"
        priority
      />
      <div className="lg:w-8/12 h-full p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <h1 className="text-4xl md:text-6xl">👋🏼</h1>
        <h1 className="max-w text-3xl md:text-6xl font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-lime-800 dark:from-purple-800 via-lime-500 dark:via-purple-500 to-lime-800 dark:to-purple-800">
          {t('aboutMe.presentation')}
        </h1>
        <h2 className="text-base md:text-2xl">{t('aboutMe.description')}</h2>
      </div>
    </div>
  );
}
