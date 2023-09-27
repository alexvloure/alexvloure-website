'use client';

import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function TwitterCard() {
  return (
    <a
      href="https://x.com/alexvloure"
      target="_blank"
      className="flex flex-col justify-center items-center bg-[#010101] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm hover:scale-[103%] transition duration-300 ease-in-out cursor-pointer">
      <IoIosArrowDroprightCircle className="text-white text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
      {/* <FaTwitter className="text-white text-4xl md:text-7xl lg:text-9xl" /> */}
      <span className="text-white text-4xl md:text-7xl lg:text-9xl">𝕏</span>
    </a>
  );
}
