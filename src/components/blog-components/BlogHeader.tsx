'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowBack } from 'react-icons/io';

export default function BlogHeader() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-[150px] md:h-[200px] flex flex-col items-center">
      <div className="w-full min-h-[100%] flex flex-col justify-center items-center overflow-hidden relative">
        <button
          className="cursor-pointer items-center flex absolute top-0 left-0 ml-[-3px]"
          onClick={() => router.push('/', { scroll: false })}>
          <IoMdArrowBack className="text-lg md:text-3xl mr-3 md:mr-5" />
          <h2 className="font-bold text-lg md:text-3xl">home</h2>
        </button>
        <div className="flex items-center">
          <h1 className="font-bold text-xl sm:text-3xl md:text-5xl !leading-normal bg-clip-text text-transparent dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
            alexvloure.dev/blog
          </h1>
        </div>
      </div>
    </div>
  );
}
