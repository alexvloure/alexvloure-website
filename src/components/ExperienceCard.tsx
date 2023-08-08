'use client';

import { useTranslation } from 'react-i18next';

export default function ExperienceCard() {
  const { t } = useTranslation('global');

  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-[#010101] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm transition duration-300 ease-in-out">
      <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-800 dark:from-purple-800 to-lime-500 dark:to-purple-500">
        2
      </h1>
      <p className="uppercase text-center font-bold text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] bg-clip-text text-transparent bg-gradient-to-r from-lime-800 dark:from-purple-800 via-lime-500 dark:via-purple-500 to-lime-800 dark:to-purple-800">
        {t('experience.description')}
      </p>
    </div>
  );
}
