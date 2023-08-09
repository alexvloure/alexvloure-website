'use client';

import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa6';

export default function TwitterCard() {
  return (
    <a
      href="https://twitter.com/alexvloure"
      target="_blank"
      className="flex flex-col justify-center items-center bg-[#1DA1F2] opacity-80 dark:bg-opacity-80 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm hover:scale-[103%] transition duration-300 ease-in-out cursor-pointer">
      <IoIosArrowDroprightCircle className="text-white text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
      <FaTwitter className="text-white text-4xl md:text-7xl lg:text-9xl" />
    </a>
  );
}
