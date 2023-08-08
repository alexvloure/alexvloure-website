'use client';

import { useTranslation } from 'react-i18next';

export default function CVCard() {
  const { i18n } = useTranslation('global');

  return (
    <a
      href={
        i18n.language === 'en' ? '/CV_AlexVino_en.pdf' : '/CV_AlexVino_es.pdf'
      }
      target="_blank"
      className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-[#010101] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm hover:scale-[103%] transition duration-300 ease-in-out cursor-pointer">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-950 dark:from-purple-950 to-lime-500 dark:to-purple-500">
        CV
      </h1>
    </a>
  );
}
