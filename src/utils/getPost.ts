import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs/promises';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import path from 'path';

export type Frontmatter = {
  title: string;
  publishedDate: string;
  lastUpdatedDate: string;
  tags: string[];
  description: string;
  status: string;
};

type Post<TFrontmatter> = {
  slug: string;
  mdxSerialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export const getPosts = cache(async (): Promise<Post<Frontmatter>[]> => {
  const workDirPath = process.cwd();
  const contentPath = 'src/content';
  const filePath = path.join(workDirPath, contentPath);
  const fileNames = await fs.readdir(filePath);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace('.mdx', '');
      const source = await fs.readFile(`${filePath}/${fileName}`, 'utf-8');
      const mdxSerialized = await serialize(source, { parseFrontmatter: true });

      return {
        slug,
        mdxSerialized,
        frontmatter: mdxSerialized.frontmatter as Frontmatter,
      };
    })
  );
  return posts;
});

export const getPost = async (pSlug: string): Promise<Post<Frontmatter>> => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === pSlug);
  if (!post) {
    redirect('/blog');
  }
  const { slug, mdxSerialized, frontmatter } = post;

  return {
    slug,
    mdxSerialized,
    frontmatter,
  };
};
