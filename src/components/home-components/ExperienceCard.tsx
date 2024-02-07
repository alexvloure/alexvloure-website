'use client';

import { useTranslation } from 'react-i18next';

export default function ExperienceCard() {
  const { t } = useTranslation('global');

  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-[#010101] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm transition duration-300 ease-in-out">
      <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
        3
      </h1>
      <p className="uppercase text-center font-bold text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] bg-clip-text text-transparent dark:bg-gradient-to-l dark:from-amber-100 dark:via-violet-300 dark:to-violet-500 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
        {t('experience.description')}
      </p>
    </div>
  );
}
