import { FaLinkedinIn } from 'react-icons/fa6';

export default function LinkedInCard() {
  return (
    <a
      href="https://www.linkedin.com/in/alexvloure"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center bg-[#0077B5] bg-opacity-80 dark:bg-opacity-60 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm hover:scale-[103%] transition duration-300 ease-in-out cursor-pointer">
      <FaLinkedinIn className="text-white text-4xl md:text-7xl lg:text-9xl" />
    </a>
  );
}
