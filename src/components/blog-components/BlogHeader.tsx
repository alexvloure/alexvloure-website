'use client';

import { useRouter } from 'next-nprogress-bar';
import { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

export default function BlogHeader() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-[100px] flex flex-col justify-between items-center gap-5 overflow-hidden relative">
      <button
        className="cursor-pointer self-start items-center flex"
        onClick={() => router.push('/', { scroll: false })}>
        <IoMdArrowBack className="text-lg md:text-3xl mr-3 md:mr-5" />
        <h2 className="font-bold text-lg md:text-3xl">home</h2>
      </button>
      <div className="flex items-center">
        <h1 className="font-bold text-4xl md:text-5xl !leading-normal bg-clip-text text-transparent dark:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
          Blog
        </h1>
      </div>
    </div>
  );
}
