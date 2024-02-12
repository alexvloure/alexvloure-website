'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Card from './Card';

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
    <Card
      colSpan={1}
      withDefaultColor
      className="hover:scale-[103%] cursor-pointer">
      <a
        href="mailto: alejandrovloure@gmail.com"
        aria-label="Mail me"
        className="h-full flex flex-col justify-center items-center">
        <HiMail
          className="text-4xl md:text-7xl lg:text-9xl"
          style={{ fill: gradient }}
        />
        <IoIosArrowDroprightCircle className="text-red-400 dark:text-violet-400 text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
      </a>
    </Card>
  );
}
