import { getPost } from '@/utils/getPost';
import { formatDistanceToNow } from 'date-fns';

type BlogPostPreviewProps = {
  slug: string;
};

export default async function BlogPostPreview(props: BlogPostPreviewProps) {
  const post = await getPost(props.slug);
  const publishedDate = new Date(post.frontmatter.publishedDate);
  const distanceDate = formatDistanceToNow(publishedDate, { addSuffix: true });

  return (
    <div className="w-full min-h-[200px] lg:min-h-[300px] p-6 lg:p-10 bg-[#F5F5F7] dark:bg-[#010101] flex flex-col justify-start items-start rounded-3xl">
      <h1 className="font-semibold text-lg md:text-xl">
        {post.frontmatter.title}
      </h1>
      <p>{distanceDate}</p>
      <p className="pt-4">{post.frontmatter.description}</p>
    </div>
  );
}
