import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import Card from './Card';

export default function TwitterCard() {
  return (
    <Card
      colSpan={1}
      className="bg-[#010101] hover:scale-[103%] cursor-pointer">
      <a
        href="https://x.com/alexvloure"
        target="_blank"
        className="h-full flex flex-col justify-center items-center">
        <IoIosArrowDroprightCircle className="text-white text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
        <FaXTwitter className="text-white text-4xl md:text-7xl lg:text-9xl" />
      </a>
    </Card>
  );
}
