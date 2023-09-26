'use client';

import { useRouter } from 'next/navigation';

export default function CustomLink({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug: string;
}) {
  const router = useRouter();

  return <div onClick={() => router.push(`/blog/${slug}`)}>{children}</div>;
}
