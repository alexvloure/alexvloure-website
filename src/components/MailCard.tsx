'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMail } from 'react-icons/hi';

export default function MailCard() {
  const { theme, resolvedTheme } = useTheme();
  const [gradient, setGradient] = useState<string>('');

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setGradient('url(#lime-gradient)');
      } else {
        setGradient('url(#purple-gradient)');
      }
    } else if (theme === 'light') {
      setGradient('url(#lime-gradient)');
    } else {
      setGradient('url(#purple-gradient)');
    }
  }, [theme, resolvedTheme]);

  return (
    <a
      href="mailto: alejandrovloure@gmail.com"
      className="flex flex-col bg-[#F5F5F7] dark:bg-[#010101] justify-center items-center rounded-3xl relative col-span-1 aspect-square overflow-hidden shadow-sm transition duration-300 ease-in-out hover:scale-[103%] cursor-pointer">
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <linearGradient
          id="purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%">
          <stop stopColor="#6b21a8" offset="0%" />
          <stop stopColor="#a855f7" offset="100%" />
        </linearGradient>
      </svg>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <linearGradient id="lime-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f6212" offset="0%" />
          <stop stopColor="#84cc16" offset="100%" />
        </linearGradient>
      </svg>
      <HiMail
        className="text-4xl md:text-7xl lg:text-9xl"
        style={{ fill: gradient }}
      />
    </a>
  );
}
