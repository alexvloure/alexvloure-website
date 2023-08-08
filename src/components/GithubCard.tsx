'use client';

import Image from 'next/image';
import devGif from '../assets/dev.gif';
import { FaGithub } from 'react-icons/fa6';
import { MdOpenInNew } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export default function GithubCard() {
  const { t } = useTranslation('global');

  return (
    <a
      href="https://www.github.com/alexvloure"
      target="_blank"
      className="rounded-3xl col-span-2 overflow-hidden hover:scale-[103%] transition duration-300 ease-in-out cursor-pointer">
      <div className="relative h-full w-full p-4 md:p-8 bg-[#33530284] dark:bg-[#3d154875] transition duration-300 ease-in-out cursor-pointer">
        <Image
          src={devGif}
          alt="Github image"
          className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
        />
        <div className="flex flex-col"></div>
        <MdOpenInNew className="text-white text-xl md:text-2xl absolute right-4 bottom-4 md:right-8 md:top-8" />
        <div className="w-full h-full flex flex-col justify-between">
          <FaGithub className="text-white md:text-5xl hidden md:flex" />
          <div>
            <h2 className="text-white font-bold text-xl md:text-4xl">GitHub</h2>
            <p className="text-white text-sm md:text-md lg:text-2xl">
              {t('github.description')}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
