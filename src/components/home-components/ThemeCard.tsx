'use client';

import { useTheme } from 'next-themes';
import { BiSolidMoon } from 'react-icons/bi';
import { TbSunFilled } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Card from './Card';

export default function ThemeCard() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>();
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });

  useLayoutEffect(() => {
    if (theme === 'dark') {
      setIsDark(true);
    } else if (theme === 'light') {
      setIsDark(false);
    } else {
      setIsDark(window?.matchMedia('(prefers-color-scheme: dark)')?.matches);
    }
  }, []);

  const toggleTheme = () => {
    if (!isDark) {
      setTheme('dark');
      setIsDark(true);
    } else {
      setTheme('light');
      setIsDark(false);
    }
  };

  const variants = {
    initial: {
      x: isDark ? (isLg ? 75 : 45) : 0,
      opacity: 0,
    },
    animate: { x: isDark ? (isLg ? 75 : 45) : 0, opacity: 1 },
    exit: {
      x: isDark ? 0 : isLg ? 75 : 45,
      opacity: 0,
      rotate: isDark ? -120 : 120,
      scale: isDark ? 0.6 : 1.4,
    },
  };

  return (
    <Card
      withDefaultColor
      className="flex flex-col justify-center items-center">
      <button
        id="theme-button"
        aria-label="Theme button"
        onClick={toggleTheme}
        className="w-[88px] lg:w-[128px] overflow-hidden rounded-full p-1 border-2 bg-white dark:bg-[#161616] border-gray-300 dark:border-gray-800 text-yellow-500 dark:text-gray-400">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="w-8 h-8 lg:w-10 lg:h-10"
            key={isDark ? 'moon' : 'sun'}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={variants}
            transition={{ duration: 0.3 }}>
            {isDark ? (
              <BiSolidMoon className="w-8 h-8 lg:w-10 lg:h-10 transition-opacity duration-500 text-gray-400" />
            ) : (
              <TbSunFilled className="w-8 h-8 lg:w-10 lg:h-10 transition-opacity duration-500 text-gray-400" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </Card>
  );
}
