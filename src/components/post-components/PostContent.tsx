'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export default function BlogPostContent({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return (
    <div className="max-w-2xl mx-auto prose dark:prose-invert">
      <MDXRemote {...source} />
    </div>
  );
}
