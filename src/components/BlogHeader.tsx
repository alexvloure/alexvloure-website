import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';

export default function BlogHeader() {
  const router = useRouter();

  return (
    // bg-[#F5F5F7] dark:bg-[#010101] shadow-sm rounded-3xl
    // bg-[#F5F5F7] dark:bg-[#010101] shadow-sm rounded-3xl border-red-500 border
    <div className="w-full h-[150px] md:h-[200px] flex justify-center ">
      <div className="w-full mx-2 flex flex-col justify-center items-center overflow-hidden relative border-red-500 border">
        <button
          className="cursor-pointer items-center flex absolute top-1 left-1"
          onClick={() => router.push('/', { scroll: false })}>
          <IoMdArrowBack className="text-lg md:text-3xl mr-3 md:mr-5" />
          <h1 className="font-bold text-lg md:text-3xl">home</h1>
        </button>
        <div className="flex items-cente">
          {/* from-lime-800 dark:from-purple-800 to-lime-500 dark:to-purple-500 */}
          <h1 className="font-bold text-xl sm:text-3xl md:text-5xl !leading-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
            alexvloure.dev/blog
          </h1>
        </div>
      </div>
    </div>
  );
}
