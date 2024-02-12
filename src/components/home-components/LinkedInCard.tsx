import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa6';
import Card from './Card';

export default function LinkedInCard() {
  return (
    <Card className="bg-[#0077B5] bg-opacity-80 dark:bg-opacity-60 hover:scale-[103%] cursor-pointer">
      <a
        href="https://www.linkedin.com/in/alexvloure"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="h-full flex flex-col justify-center items-center">
        <IoIosArrowDroprightCircle className="text-white text-lg md:text-3xl absolute right-4 bottom-4 xl:right-8 xl:bottom-8" />
        <FaLinkedinIn className="text-white text-4xl md:text-7xl lg:text-9xl" />
      </a>
    </Card>
  );
}
