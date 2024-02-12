'use client';

import waving from '@/assets/images/alexvloure-waving_upscaled.webp';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Card from './Card';

export default function AboutCard() {
  const { t } = useTranslation('global');

  return (
    <Card colSpan={3} withDefaultColor className="md:row-span-2">
      <Image
        src={waving}
        alt="alexvloure waving"
        className="absolute bottom-16 -right-44 md:auto object-cover -z-0 hidden lg:flex transform -rotate-[38deg]"
        width={500}
        height={500}
        draggable="false"
        loading="eager"
        priority
      />
      <div className="lg:w-8/12 h-full p-8 flex flex-col justify-start md:justify-end">
        <h1 className="text-4xl md:text-6xl">👋🏼</h1>
        <h1 className="max-w text-3xl md:text-[3rem] lg:text-6xl font-bold py-2 bg-clip-text text-transparent dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
          {t('aboutMe.presentation')}
        </h1>
        <h2 className="text-base md:text-2xl">{t('aboutMe.description')}</h2>
      </div>
    </Card>
  );
}
