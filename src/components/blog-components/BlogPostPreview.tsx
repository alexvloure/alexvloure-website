import { getPost } from '@/utils/getPost';
import { format } from 'date-fns';
import { BsCalendar3 } from 'react-icons/bs';

type BlogPostPreviewProps = {
  slug: string;
};

export default async function BlogPostPreview(props: BlogPostPreviewProps) {
  const post = await getPost(props.slug);
  const publishedDate = new Date(post.frontmatter.publishedDate);
  const dateFormatted = format(publishedDate, 'MMMM dd, yyyy');

  return (
    <div className="w-full min-h-[200px] lg:min-h-[300px] p-6 lg:p-10 bg-[#F5F5F7] dark:bg-[#010101] flex flex-col justify-start items-start rounded-3xl">
      <h1 className="font-semibold text-lg md:text-xl">
        {post.frontmatter.title}
      </h1>
      <div className="flex items-center gap-2">
        <BsCalendar3 />
        <span>{dateFormatted}</span>
      </div>
      <p className="pt-4">{post.frontmatter.description}</p>
    </div>
  );
}
