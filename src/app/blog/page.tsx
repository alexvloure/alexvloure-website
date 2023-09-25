'use client';

import BlogHeader from '@/components/BlogHeader';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Blog() {
  const path = usePathname();

  return (
    <div className="flex flex-col items-center mx-5 ">
      <div className="container my-10 mx-auto xl:px-20">
        <BlogHeader />
      </div>
    </div>
  );
}
