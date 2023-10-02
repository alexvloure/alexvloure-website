'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function MailCard() {
  const { theme, resolvedTheme } = useTheme();
  const [gradient, setGradient] = useState<string>('');

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setGradient('url(#light-gradient)');
      } else {
        setGradient('url(#dark-gradient)');
      }
    } else if (theme === 'light') {
      setGradient('url(#light-gradient)');
    } else {
      setGradient('url(#dark-gradient)');
    }
  }, [theme, resolvedTheme]);

  return (
    <a
      href="mailto: alejandrovloure@gmail.com"
      aria-label="Mail me"
      className="flex flex-col bg-[#F5F5F7] dark:bg-[#010101] justify-center items-center rounded-3xl relative col-span-1 aspect-square overflow-hidden shadow-sm transition duration-300 ease-in-out hover:scale-[103%] cursor-pointer">
      <HiMail
        className="text-4xl md:text-7xl lg:text-9xl"
        style={{ fill: gradient }}
      />
      <IoIosArrowDroprightCircle className="text-red-400 dark:text-violet-400 text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
    </a>
  );
}
