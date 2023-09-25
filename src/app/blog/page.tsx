import BlogContent from '@/components/blog-components/BlogContent';
import BlogHeader from '@/components/blog-components/BlogHeader';
import LangBanner from '@/components/blog-components/LangBanner';

export default function Blog() {
  return (
    <>
      <LangBanner />
      <div className="flex flex-col items-center mx-5">
        <div className="container my-10 mx-auto xl:px-20">
          <BlogHeader />
          <BlogContent />
        </div>
      </div>
    </>
  );
}
