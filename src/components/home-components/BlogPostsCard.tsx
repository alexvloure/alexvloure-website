import { Frontmatter, Post } from '@/models/models';

type BlogPostsCardProps = {
  posts: Post<Frontmatter>[];
};

export default function BlogPostsCard({ posts }: BlogPostsCardProps) {
  const lastPosts = posts
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedDate).getTime() -
        new Date(a.frontmatter.publishedDate).getTime()
    )
    .slice(0, 3);

  return (
    // onClick={() => router.push('/blog', { scroll: false })}
    <div className="flex flex-col bg-[#F5F5F7] dark:bg-[#010101] rounded-3xl col-span-3 md:col-span-2 md:aspect-[2.05] p-3 md:p-4 lg:p-8 overflow-hidden">
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold dark:bg-gradient-to-l dark:from-violet-200 dark:to-violet-600 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 bg-bottom bg-[length:100%_3px] md:bg-[length:100%_4px] bg-repeat-x">
        Last blog posts
      </h1>
      <div className="flex flex-col justify-center pb-2">
        {lastPosts.map((post) => {
          return (
            <h1 className="text-lg font-medium ml-2" key={post.slug}>
              {post.frontmatter.title}
            </h1>
          );
        })}
        <h1 className="text-lg font-medium ml-2">other post</h1>
        <h1 className="text-lg font-medium ml-2">other post</h1>
      </div>
    </div>
  );
}
