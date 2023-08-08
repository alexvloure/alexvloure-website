'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageCard() {
  const { t, i18n } = useTranslation('global');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const item = localStorage.getItem('language');
    if (item) {
      setLanguage(item);
      changeLanguage(item);
    } else {
      localStorage.setItem('language', 'en');
      setLanguage('en');
      changeLanguage('en');
    }
  }, []);

  useEffect(() => {
    changeLanguage(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    if (language === 'en') {
      changeLanguage('es');
    } else {
      changeLanguage('en');
    }
  };

  const changeLanguage = (lng: string) => {
    if (lng === language) return;

    localStorage.setItem('language', lng);
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div
      onClick={toggleLanguage}
      className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-[#010101] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
      <p className="font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-lime-950 dark:from-purple-950 to-lime-500 dark:to-purple-500 text-5xl md:text-8xl">
        {language}
      </p>
      <p className="font-bold transition duration-300 ease-in-out ">
        <span
          className={
            language === 'en'
              ? 'dark:text-purple-950 text-lime-800'
              : 'dark:text-white text-zinc-700'
          }>
          EN
        </span>{' '}
        <span
          className={
            language === 'es'
              ? 'dark:text-purple-950 text-lime-800'
              : 'dark:text-white text-zinc-700'
          }>
          ES
        </span>
      </p>
    </div>
  );
}
