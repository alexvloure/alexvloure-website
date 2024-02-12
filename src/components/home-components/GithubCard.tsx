'use client';

import Image from 'next/image';
import devGif from '@/assets/images/dev.gif';
import { FaGithub } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Card from './Card';

export default function GithubCard() {
  const { t } = useTranslation('global');

  return (
    <Card colSpan={2} className="hover:scale-[103%] cursor-pointer">
      <a
        href="https://www.github.com/alexvloure"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="h-full flex flex-col justify-center items-center p-4 md:p-8 bg-[#ee5c3768] dark:bg-[#3d154875]">
        <Image
          src={devGif}
          alt="Github image"
          className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
        />
        <div className="flex flex-col"></div>
        <IoIosArrowDroprightCircle className="text-white text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
        <div className="w-full h-full flex flex-col justify-between">
          <FaGithub className="text-white md:text-5xl hidden md:flex" />
          <div>
            <h2 className="text-white font-bold text-xl md:text-4xl">GitHub</h2>
            <p className="text-white text-sm md:text-md lg:text-2xl">
              {t('github.description')}
            </p>
          </div>
        </div>
      </a>
    </Card>
  );
}
