'use client';

import lightMap from '@/assets/images/lightMap.webp';
import darkMap from '@/assets/images/darkMap.webp';
import mapPfp from '@/assets/images/alexvloure_pfp.webp';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export interface Props {
  lightMap: string;
  darkMap: string;
}

export default function MapCard() {
  const { theme, resolvedTheme } = useTheme();
  const [map, setMap] = useState<StaticImageData>(lightMap);

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setMap(lightMap);
      } else {
        setMap(darkMap);
      }
    } else if (theme === 'light') {
      setMap(lightMap);
    } else {
      setMap(darkMap);
    }
  }, [theme, resolvedTheme]);

  return (
    <a
      href="https://www.google.com/maps/@42.878212,-8.544844,14z?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center relative p-4 md:p-8 rounded-3xl col-span-2 overflow-hidden transition duration-300 hover:scale-[103%]">
      <IoIosArrowDroprightCircle className="text-white text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
      <Image
        src={map}
        alt="Static map image of location"
        className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10 transition duration-300 ease-in-out"
      />
      <div className="relative border-2 bg-white backdrop-blur-[2px] rounded-full w-12 md:w-16 h-12 md:h-16 overflow-hidden">
        <Image
          src={mapPfp}
          alt="alexvloure pfp"
          className="absolute w-full h-full object-cover object-center -top-1 left-0"
        />
      </div>
      <p className="rounded-full bg-white/10 pl-2 pr-3 mt-2 text-[0.9rem] md:text-lg font-bold text-white/95 backdrop-blur-md md:hidden">
        📍 SCQ
      </p>
      <p className="rounded-full bg-white/10 pl-2 pr-3 mt-2 text-[0.9rem] md:text-lg font-bold text-white/95 backdrop-blur-md hidden md:flex">
        📍 Santiago de Compostela
      </p>
    </a>
  );
}
