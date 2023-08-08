'use client';

import greenMap from '../assets/greenMap.png';
import purpleMap from '../assets/purpleMap.png';
import mapPfp from '../assets/alexvloure_pfp.png';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { useSpotify } from '@/hooks/useSpotify';

export interface Props {
  lightMap: string;
  darkMap: string;
}

export default function MapCard() {
  // const darkMap = `https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-8.5442,42.8769,12,0/480x268?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;
  // const lightMap = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-8.5442,42.8769,12,0/480x268?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;
  const { theme, resolvedTheme } = useTheme();
  const [map, setMap] = useState<StaticImageData>(greenMap);

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setMap(greenMap);
      } else {
        setMap(purpleMap);
      }
    } else if (theme === 'light') {
      setMap(greenMap);
    } else {
      setMap(purpleMap);
    }
  }, [theme, resolvedTheme]);

  return (
    <div className="flex flex-col justify-center items-center relative p-4 md:p-8 rounded-3xl col-span-2 overflow-hidden">
      <Image
        // width={480}
        // height={268}
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
      <p className="rounded-full bg-black/20 dark:bg-white/10 pl-2 pr-3 mt-2 text-[0.9rem] md:text-lg font-bold text-white/95 backdrop-blur-md">
        📍 SCQ
      </p>
    </div>
  );
}
